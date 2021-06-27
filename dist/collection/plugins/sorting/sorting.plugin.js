import size from 'lodash/size';
import { setStore } from '../../utils/store.utils';
import BasePlugin from '../basePlugin';
/**
 * lifecycle
 * 1) @event beforesorting - sorting just started, nothing happened yet
 * 2) @metod updateColumnSorting - column sorting icon applied to grid and column get updated, data still untiuched
 * 3) @event beforesortingapply - before we applied sorting data to data source, you can prevent data apply from here
 * 4) @event afterSortingApply - sorting applied, just finished event
 *
 * If you prevent event it'll not reach farther steps
 */
export default class SortingPlugin extends BasePlugin {
  constructor(revogrid) {
    super(revogrid);
    this.revogrid = revogrid;
    this.sorting = null;
    const beforesourceset = ({ detail }) => {
      if (this.hasSorting) {
        // is sorting allowed
        const event = this.emit('beforesourcesortingapply');
        // sorting prevented
        if (event.defaultPrevented) {
          return;
        }
      }
      const data = this.setData(detail.source, detail.type);
      if (data) {
        detail.source = data;
      }
    };
    const aftercolumnsset = async ({ detail: { order } }) => this.sort(order);
    const headerclick = async (e) => {
      if (e.defaultPrevented) {
        return;
      }
      if (!e.detail.column.sortable) {
        return;
      }
      this.headerclick(e.detail.column, e.detail.index);
    };
    this.addEventListener('beforesourceset', beforesourceset);
    this.addEventListener('aftercolumnsset', aftercolumnsset);
    this.addEventListener('initialHeaderClick', headerclick);
  }
  get hasSorting() {
    return !!this.sorting;
  }
  async headerclick(column, index) {
    let order = this.getNextOrder(column.order);
    const beforeEvent = this.emit('beforesorting', { column, order });
    if (beforeEvent.defaultPrevented) {
      return;
    }
    order = beforeEvent.detail.order;
    const newCol = await this.revogrid.updateColumnSorting(beforeEvent.detail.column, index, order);
    // apply sort data
    const beforeApplyEvent = this.emit('beforesortingapply', { column: newCol, order });
    if (beforeApplyEvent.defaultPrevented) {
      return;
    }
    order = beforeApplyEvent.detail.order;
    this.sort({ [column.prop]: order });
  }
  setData(data, type) {
    // sorting available for rgRow type only
    if (type === 'rgRow' && this.sorting) {
      return this.sortItems(data, this.sorting);
    }
  }
  /**
   * Sorting apply, available for rgRow type only
   * @param sorting - per column sorting
   * @param data - this.stores['rgRow'].store.get('source')
   */
  async sort(sorting) {
    if (!size(sorting)) {
      this.sorting = null;
      return;
    }
    this.sorting = sorting;
    const store = await this.revogrid.getSourceStore();
    const source = store.get('source');
    const proxyItems = this.sortIndexByItems([...store.get('proxyItems')], source, this.sorting);
    setStore(store, {
      proxyItems,
      source: [...source],
    });
    this.emit('afterSortingApply');
  }
  keySort(a, b, dir) {
    const directionIndex = dir === 'asc' ? 1 : -1;
    if (a === b) {
      return 0;
    }
    return (a === null || a === void 0 ? void 0 : a.toString().toLowerCase()) > (b === null || b === void 0 ? void 0 : b.toString().toLowerCase()) ?
      1 * directionIndex : -1 * directionIndex;
  }
  sortIndexByItems(indexes, source, sorting) {
    // TODO - is there a situation where multiple kvps in the `sorting` object would cause this to break?
    for (let prop in sorting) {
      if (typeof sorting[prop] === 'undefined') {
        // Unsort indexes
        return [...Array(indexes.length).keys()];
      }
    }
    return indexes.sort((a, b) => {
      let sorted = 0;
      for (let prop in sorting) {
        const dir = sorting[prop];
        const itemA = source[a][prop];
        const itemB = source[b][prop];
        sorted = this.keySort(itemA, itemB, dir);
      }
      return sorted;
    });
  }
  sortItems(source, sorting) {
    return source.sort((a, b) => {
      let sorted = 0;
      for (let prop in sorting) {
        const dir = sorting[prop];
        const itemA = a[prop];
        const itemB = b[prop];
        sorted = this.keySort(itemA, itemB, dir);
      }
      return sorted;
    });
  }
  getNextOrder(currentOrder) {
    switch (currentOrder) {
      case undefined:
        return 'asc';
      case 'asc':
        return 'desc';
      case 'desc':
        return undefined;
    }
  }
}
