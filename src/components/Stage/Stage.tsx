import { FC } from 'react';
import cl from 'classnames';
import s from './Stage.module.scss';
import { EllipseIcon, IconProps } from '../ui/icons';

export const Stage: FC<IconProps> = ({ done = false, now = false, className = '' }) => {
  const stageState = done || now;

  return (
    <div className={cl(s.stage, className)}>
      <EllipseIcon now={now} done={done} />
      <p className={cl(s.stage__text, stageState && s.stage__text_active)}>Этап 1</p>
    </div>
  );
};
