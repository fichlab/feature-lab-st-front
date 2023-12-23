import { FC } from 'react';
import s from './PageTitle.module.scss';

export interface ILeadSectionProps {
  pageTitle: string;
  subTitle: string;
}

export const PageTitle: FC<ILeadSectionProps> = ({ pageTitle, subTitle }) => {
  return (
    <>
      <h1 className={s.pageTitle}>{pageTitle}</h1>
      <div className={s.subTitleWrapper}>
        <p className={s.subTitle}>{subTitle}</p>
      </div>
    </>
  );
};
