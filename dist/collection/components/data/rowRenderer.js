import { h } from '@stencil/core';
export const PADDING_DEPTH = 10;
const RowRenderer = ({ rowClass, size, start, style, depth, href, target }, cells) => {
  if (href) {
    return (h("a", { href: href, target: target, class: `rgRow ${rowClass || ''}`, style: Object.assign(Object.assign({}, style), { height: `${size}px`, transform: `translateY(${start}px)`, paddingLeft: depth ? `${PADDING_DEPTH * depth}px` : undefined }) }, cells));
  }
  return (h("div", { class: `rgRow ${rowClass || ''}`, style: Object.assign(Object.assign({}, style), { height: `${size}px`, transform: `translateY(${start}px)`, paddingLeft: depth ? `${PADDING_DEPTH * depth}px` : undefined }) }, cells));
};
export default RowRenderer;
