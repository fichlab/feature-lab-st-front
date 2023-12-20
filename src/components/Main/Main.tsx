import { FC } from 'react';
import { Competencies } from '../Competencies/Competencies';
import { PromoSection } from '../PromoSection/PromoSection';
import styles from './Main.module.scss';
import { LabSection } from '../LabSection/LabSection';

interface IProps {
  children?: React.ReactNode;
}

const Main: FC<IProps> = ({ children = null }) => {
  return (
    <main className={styles.main}>
      {children}
      <PromoSection />
      <Competencies />
      <LabSection />
    </main>
  );
};

export default Main;
