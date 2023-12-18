import { FC } from 'react';
import { Competencies } from '../Competencies/Competencies';
import { Promo } from '../Promo/Promo';
import styles from './Main.module.scss';
import { LabSection } from '../LabSection/LabSection';

interface IProps {
  children?: React.ReactNode;
}

const Main: FC<IProps> = ({ children = null }) => {
  return (
    <main className={styles.main}>
      {children}
      <Promo />
      <Competencies />
      <LabSection />
    </main>
  );
};

export default Main;
