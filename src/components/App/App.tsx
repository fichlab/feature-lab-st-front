import { Route, Routes } from 'react-router';
import { CookiesToastContainer } from '../ui/CookiesToastContainer/CookiesToastContainer';
import Footer from '../Footer/Footer';
import { Header } from '../Header/Header';
import Main from '../Main/Main';
import s from './App.module.scss';

const App: React.FC = () => {
  return (
    <div className={s.page}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
      <CookiesToastContainer />
    </div>
  );
};

export default App;
