import React from 'react';
import { Routes } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { Header } from '../Header/Header';
import Main from '../Main/Main';
import { PopupContact } from '../PopupContact/PopupContact';
import { CookiesToastContainer } from '../ui/CookiesToastContainer/CookiesToastContainer';
import { PopupFeedback } from '../PopupFeedback/PopupFeedback';
import s from './App.module.scss';

const App: React.FC = () => {
  const [isPopupContactOpen, setPopupContactIsOpen] = React.useState(false);
  const [isPopupFeedbackOpen, setIsPopupFeedbackOpen] = React.useState(false);

  const closePopupContactPopups = () => {
    setPopupContactIsOpen(false);
  };

  const closePopupFeedbackPopup = () => {
    setIsPopupFeedbackOpen(false);
  };

  return (
    <div className={s.page}>
      <Header />
      <Main>
        <Routes>{/* <Route path="/" element={} /> */}</Routes>
      </Main>

      <PopupContact isOpen={isPopupContactOpen} onClose={closePopupContactPopups} />
      <PopupFeedback isOpen={isPopupFeedbackOpen} onClose={closePopupFeedbackPopup} />

      <Footer />
      <CookiesToastContainer />
    </div>
  );
};

export default App;
