import { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { CloseButtonProps, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Footer/Footer';
import { Header } from '../Header/Header';
import Main from '../Main/Main';
import { CrossIcon } from '../ui/icons';
import s from './App.module.scss';

const ToastCloseButton: React.FC<CloseButtonProps> = ({ closeToast }) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    localStorage.setItem('cookiesAccepted', 'true');
    closeToast(e);
  };

  return (
    <button type="button" onClick={handleClick}>
      <CrossIcon />
    </button>
  );
};

const App: React.FC = () => {
  useEffect(() => {
    // Use local storage to track if the user has accepted cookies
    if (!localStorage.getItem('cookiesAccepted')) {
      // Display a cookie notification using the react-toastify library
      toast('Мы используем куки для улучшения работы сайта', {
        className: s.cookieToast,
        bodyClassName: s.cookieToastBody,
        position: 'bottom-center',
        autoClose: false,
        closeOnClick: false,
        closeButton: ToastCloseButton,
      });
    }
  }, []);

  return (
    <div className={s.page}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
      <ToastContainer className={s.toastContainer} />
    </div>
  );
};

export default App;
