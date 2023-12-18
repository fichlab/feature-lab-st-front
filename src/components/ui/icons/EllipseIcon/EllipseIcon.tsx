import { FC } from 'react';
import cl from 'classnames';
import s from './Ellipse.module.scss';

export type IconProps = {
  now?: boolean;
  done?: boolean;
  className?: string;
};

export const EllipseIcon: FC<IconProps> = ({ done = false, now = false, className = '' }) => {
  return (
    <div className={cl(s.circle, className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="42"
        viewBox="0 0 42 42"
        fill="none">
        <circle
          cx="21"
          cy="21"
          r="19"
          fill={done ? '#002D63' : 'white'}
          stroke={done || now ? '#002D63' : '#8096B1'}
          strokeWidth="4"
        />
        <path
          d="M18.9939 29L12 21.4158L13.7485 19.5198L18.9939 25.2079L30.2515 13L32 14.8961L18.9939 29Z"
          fill={now ? '#002D63' : 'white'}
        />
      </svg>
      <div className={s.circle__gradient} />
    </div>
  );
};
