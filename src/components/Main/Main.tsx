import { FC } from 'react';
import styles from './Main.module.scss';
import { Promo } from '../Promo/Promo';

interface IProps {
  children?: React.ReactNode;
}

const Main: FC<IProps> = ({ children = null }) => {
  return (
    <main className={styles.main}>
      {children}
      <Promo />
    </main>
  );
};

export default Main;
