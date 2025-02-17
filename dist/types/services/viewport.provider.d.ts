import ViewportStore from '../store/viewPort/viewport.store';
import { RevoGrid } from '../interfaces';
export declare type ViewportStores = {
  [T in RevoGrid.MultiDimensionType]: ViewportStore;
};
export default class ViewportProvider {
  readonly stores: ViewportStores;
  constructor();
  setViewport(dimensionType: RevoGrid.MultiDimensionType, data: Partial<RevoGrid.ViewportState>): void;
}
