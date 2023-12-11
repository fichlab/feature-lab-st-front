import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { Header } from '../Header/Header';
import styles from './App.module.scss';
import Main from '../Main/Main';
import { PopupContact } from '../PopupContact/PopupContact';

const App: React.FC = () => {
  const [isPopupOpen, setPopupIsOpen] = React.useState(true);

  const closeAllPopups = () => {
    setPopupIsOpen(false);
  };

  return (
    <div className={styles.page}>
      <Header />
      <Main>
        <Routes>{/* <Route path="/" element={} /> */}</Routes>
      </Main>

      <PopupContact isOpen={isPopupOpen} onClose={closeAllPopups} header="hello" />
      <Footer />
    </div>
  );
};

export default App;
