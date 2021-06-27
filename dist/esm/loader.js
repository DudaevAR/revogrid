import { C as CSS, p as plt, w as win, a as promiseResolve, b as bootstrapLazy } from './index-42c84e7c.js';

/*
 Stencil Client Patch Esm v2.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    // NOTE!! This fn cannot use async/await!
    // @ts-ignore
    if (!(CSS && CSS.supports && CSS.supports('color', 'var(--c)'))) {
        // @ts-ignore
        return import(/* webpackChunkName: "polyfills-css-shim" */ './css-shim-8d75038b.js').then(() => {
            if ((plt.$cssShim$ = win.__cssshim)) {
                return plt.$cssShim$.i();
            }
            else {
                // for better minification
                return 0;
            }
        });
    }
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["revogr-clipboard",[[0,"revogr-clipboard",{"doCopy":[64]},[[4,"paste","onPaste"],[4,"copy","copyStarted"]]]]],["revogr-filter-panel",[[0,"revogr-filter-panel",{"uuid":[1537],"filterTypes":[16],"filterNames":[16],"filterEntities":[16],"changes":[32],"show":[64],"getChanges":[64]},[[5,"mousedown","onMouseDown"]]]]],["revo-grid_11",[[0,"revo-grid",{"rowHeaders":[4,"row-headers"],"frameSize":[2,"frame-size"],"rowSize":[2,"row-size"],"colSize":[2,"col-size"],"range":[4],"readonly":[4],"resize":[4],"canFocus":[4,"can-focus"],"useClipboard":[4,"use-clipboard"],"columns":[16],"source":[16],"pinnedTopSource":[16],"pinnedBottomSource":[16],"rowDefinitions":[16],"editors":[16],"plugins":[16],"columnTypes":[16],"theme":[1537],"rowClass":[513,"row-class"],"autoSizeColumn":[4,"auto-size-column"],"filter":[4],"trimmedRows":[16],"exporting":[4],"grouping":[16],"stretch":[8],"extraElements":[32],"refresh":[64],"scrollToRow":[64],"scrollToColumnIndex":[64],"scrollToColumnProp":[64],"updateColumns":[64],"addTrimmed":[64],"scrollToCoordinate":[64],"setCellEdit":[64],"registerVNode":[64],"getSource":[64],"getVisibleSource":[64],"getSourceStore":[64],"getColumnStore":[64],"updateColumnSorting":[64],"getColumns":[64],"clearFocus":[64],"getPlugins":[64],"getFocused":[64]},[[0,"internalRowDragStart","onRowDragStarted"],[0,"internalRowDragEnd","onRowDragEnd"],[0,"internalRowDrag","onRowDrag"],[0,"internalRowMouseMove","onRowMouseMove"],[0,"internalCellEdit","onBeforeEdit"],[0,"internalRangeDataApply","onBeforeRangeEdit"],[0,"internalSelectionChanged","onRangeChanged"],[0,"initialRowDropped","onRowDropped"],[0,"initialHeaderClick","onHeaderClick"],[0,"internalFocusCell","onCellFocus"]]],[0,"revogr-row-headers",{"height":[2],"dataPorts":[16],"headerProp":[16],"uiid":[1],"resize":[4],"rowHeaderColumn":[16]}],[4,"revogr-overlay-selection",{"readonly":[4],"range":[4],"canDrag":[4,"can-drag"],"useClipboard":[4,"use-clipboard"],"selectionStore":[16],"dimensionRow":[16],"dimensionCol":[16],"dataStore":[16],"colData":[16],"lastCell":[16],"editors":[16]},[[5,"mousemove","onMouseMove"],[5,"mouseleave","onMouseOut"],[5,"mouseup","onMouseUp"],[0,"dragStartCell","onCellDrag"],[4,"keyup","onKeyUp"],[4,"keydown","onKeyDown"]]],[0,"revogr-focus",{"selectionStore":[16],"dimensionRow":[16],"dimensionCol":[16]}],[0,"revogr-scroll-virtual",{"dimension":[1],"viewportStore":[16],"dimensionStore":[16],"setScroll":[64],"changeScroll":[64]}],[0,"revogr-temp-range",{"selectionStore":[16],"dimensionRow":[16],"dimensionCol":[16]}],[0,"revogr-data",{"readonly":[4],"range":[4],"canDrag":[4,"can-drag"],"rowClass":[1,"row-class"],"target":[1],"rowSelectionStore":[16],"viewportRow":[16],"viewportCol":[16],"dimensionRow":[16],"colData":[16],"dataStore":[16]}],[0,"revogr-edit",{"editCell":[16],"column":[16],"editor":[16]}],[0,"revogr-header",{"viewportCol":[16],"dimensionCol":[16],"selectionStore":[16],"parent":[1],"groups":[16],"groupingDepth":[2,"grouping-depth"],"canResize":[4,"can-resize"],"colData":[16],"columnFilter":[4,"column-filter"]}],[0,"revogr-order-editor",{"parent":[16],"dimensionRow":[16],"dimensionCol":[16],"dataStore":[16],"dragStart":[64],"endOrder":[64],"clearOrder":[64]},[[5,"mouseleave","onMouseOut"],[5,"mouseup","onMouseUp"]]],[4,"revogr-viewport-scroll",{"contentWidth":[2,"content-width"],"contentHeight":[2,"content-height"],"setScroll":[64],"changeScroll":[64]}]]]], options);
  });
};

export { defineCustomElements };
