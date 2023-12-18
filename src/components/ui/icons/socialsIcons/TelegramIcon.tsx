import { FC } from 'react';
import cl from 'classnames';
import s from './Socials.module.scss';

export interface TelegramIconProps {
  className?: string;
}

export const TelegramIcon: FC<TelegramIconProps> = ({ className = '' }) => {
  return (
    <svg
      className={cl(s.icon, className && className)}
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none">
      <rect width="80" height="80" rx="40" fill="#002D63" />
      <path
        d="M56 25.2045L49.9892 56.5845C49.9892 56.5845 49.1481 58.7602 46.8378 57.7168L32.9692 46.7052L32.9048 46.6727C34.7782 44.9308 49.3048 31.4053 49.9397 30.7922C50.9225 29.8427 50.3124 29.2775 49.1712 29.9947L27.7136 44.1059L19.4353 41.2215C19.4353 41.2215 18.1325 40.7417 18.0072 39.6982C17.8802 38.6531 19.4782 38.0878 19.4782 38.0878L53.2263 24.3779C53.2263 24.3779 56 23.1159 56 25.2045Z"
        fill="white"
      />
    </svg>
  );
};
