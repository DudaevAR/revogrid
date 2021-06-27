import { DATA_COL, DATA_ROW } from '../utils/consts';
export function getCell(cell) {
  return {
    x: parseInt(cell.getAttribute(DATA_COL), 10),
    y: parseInt(cell.getAttribute(DATA_ROW), 10),
  };
}
