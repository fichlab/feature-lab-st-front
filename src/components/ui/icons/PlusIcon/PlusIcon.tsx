import { FC, useState } from 'react';
import cl from 'classnames';
import s from './PlusIcon.module.scss';

interface PlusIconProps {
  className?: string;
}

export const PlusIcon: FC<PlusIconProps> = ({ className = '' }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    setIsPressed(!isPressed);
  };

  return (
    <svg
      className={cl(className && className, s.plusIcon)}
      onClick={handleClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 80 80"
      width={80}
      height={80}
      fill="none">
      <rect x="1.75" y="1.75" width="76.5" height="76.5" rx="38.25" fill="white" />
      <rect
        x="1.75"
        y="1.75"
        width="76.5"
        height="76.5"
        rx="38.25"
        stroke="#002D63"
        strokeWidth="3.5"
      />
      {isPressed ? (
        <>
          <line
            x1="20.2374"
            y1="19.7626"
            x2="59.1283"
            y2="58.6534"
            stroke="#002D63"
            strokeWidth="3.5"
          />
          <line
            x1="19.7626"
            y1="58.7626"
            x2="58.6534"
            y2="19.8717"
            stroke="#002D63"
            strokeWidth="3.5"
          />
        </>
      ) : (
        <>
          <line x1="13" y1="39.25" x2="68" y2="39.25" stroke="#002D63" strokeWidth="3.5" />
          <line x1="39.25" y1="67" x2="39.25" y2="12" stroke="#002D63" strokeWidth="3.5" />
        </>
      )}
    </svg>
  );
};
