import { h, VNode } from '@stencil/core';
import { JSXBase } from '@stencil/core/internal';

export interface RowProps extends JSXBase.HTMLAttributes {
  size: number;
  start: number;
  rowClass?: string;
  depth?: number;
  href?: string;
  target?: string;
}

export const PADDING_DEPTH = 10;

const RowRenderer = ({ rowClass, size, start, style, depth, href, target }: RowProps, cells: VNode[]) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        class={`rgRow ${rowClass || ''}`}
        style={{
          ...style,
          height: `${size}px`,
          transform: `translateY(${start}px)`,
          paddingLeft: depth ? `${PADDING_DEPTH * depth}px` : undefined,
        }}
      >
        {cells}
      </a>
    );
  }
  return (
    <div
      class={`rgRow ${rowClass || ''}`}
      style={{
        ...style,
        height: `${size}px`,
        transform: `translateY(${start}px)`,
        paddingLeft: depth ? `${PADDING_DEPTH * depth}px` : undefined,
      }}
    >
      {cells}
    </div>
  );
};

export default RowRenderer;
