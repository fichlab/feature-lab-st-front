import { FC } from 'react';
import cl from 'classnames';
import s from './Icon.module.scss';
import { IconProps } from './Icon.types';

const pathProperties: React.SVGProps<SVGPathElement> = {
  strokeWidth: '2',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export const CardholderIcon: FC<IconProps> = ({ filled = false, className = '' }) => {
  return (
    <div className={cl(s.icon, className && className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none">
        <path
          d="M26 7H6C4.89543 7 4 7.89543 4 9V23C4 24.1046 4.89543 25 6 25H26C27.1046 25 28 24.1046 28 23V9C28 7.89543 27.1046 7 26 7Z"
          fill={filled ? '#002D63' : ''}
          stroke="#002D63"
          {...pathProperties}
        />
        <path
          d="M4 15H11.1C11.3303 14.9987 11.5538 15.078 11.7318 15.2241C11.9099 15.3702 12.0313 15.5739 12.075 15.8C12.266 16.6994 12.76 17.5059 13.4745 18.0847C14.189 18.6634 15.0806 18.9791 16 18.9791C16.9194 18.9791 17.811 18.6634 18.5255 18.0847C19.24 17.5059 19.734 16.6994 19.925 15.8C19.9687 15.5739 20.0901 15.3702 20.2682 15.2241C20.4462 15.078 20.6697 14.9987 20.9 15H28"
          stroke={filled ? 'white' : '#002D63'}
          {...pathProperties}
        />
        <path d="M4 11H28" stroke={filled ? 'white' : '#002D63'} {...pathProperties} />
      </svg>
    </div>
  );
};
