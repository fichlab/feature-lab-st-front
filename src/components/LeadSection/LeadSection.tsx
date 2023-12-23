import { FC } from 'react';
import cl from 'classnames';
import s from './LeadSection.module.scss';

export interface ILeadSectionProps {
  className?: string;
}

export const LeadSection: FC<ILeadSectionProps> = ({ className = '' }) => {
  return (
    <section className={cl(s.lead, className)}>
      <h1>Наши клиенты</h1>
    </section>
  );
};
