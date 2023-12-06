import { Route, Routes } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styles from './App.module.scss';

const App: React.FC = () => {
  return (
    <div className={styles.page}>
      <Header />
      <Routes>
        <Route path="/" />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
