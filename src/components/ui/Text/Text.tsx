import React, { memo } from 'react';
import cl from 'classnames';
import s from './Text.module.scss';

export type TextProps = {
  children: React.ReactNode;
  className?: string;
  view?:
    | 'title-1'
    | 'title-2'
    | 'title-3'
    | 'title-4'
    | 'title-molot-1'
    | 'title-molot-2'
    | 'title-molot-3'
    | 'title-molot-4'
    | 'text-1'
    | 'text-2'
    | 'text-3';
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'div' | 'p' | 'span';
  line?: boolean;
  outlined?: boolean;
};

const TextWithoutMemo: React.FC<TextProps> = ({
  className = '',
  view = 'text-3',
  tag = 'div',
  children,
  line = false,
  outlined = false,
}) => {
  const isTitle = view.includes('title');
  const fontType = isTitle && view.includes('molot') ? 'molot' : 'germano';
  const titleFontFamily = isTitle ? fontType : undefined;

  const Tag = tag;

  return (
    <Tag
      className={cl(
        s.text,
        s[`text__view-${view}`],
        line && s.text__line,
        outlined && s.text__outlined,
        titleFontFamily && s[`text__title-${titleFontFamily}`],
        className,
      )}>
      {children}
    </Tag>
  );
};

export const Text = memo(TextWithoutMemo);
