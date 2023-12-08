import { Route, Routes } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { Header } from '../Header/Header';
import styles from './App.module.scss';
import Main from '../Main/Main';

const App: React.FC = () => {
  return (
    <div className={styles.page}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
