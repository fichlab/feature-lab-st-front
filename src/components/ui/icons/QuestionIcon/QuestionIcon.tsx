import { FC } from 'react';
import cl from 'classnames';
import s from './QuestionIcon.module.scss';

export interface QuestionIconProps {
  className?: string;
}

export const QuestionIcon: FC<QuestionIconProps> = ({ className = '' }) => {
  return (
    <div className={cl(s.questionIcon, className)}>
      <div className={cl(s.questionIcon__sign)}>?</div>
    </div>
  );
};
