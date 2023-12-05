import { FC } from 'react';
import styles from './Main.module.scss';

interface IProps {
  children?: React.ReactNode;
}

const Main: FC<IProps> = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export default Main;
