import styles from "./App.scss";
import "../../assets/fonts/fonts.scss";
import 'normalize.css';
import { Routes, Route } from 'react-router-dom';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";

const App: React.FC = () => {
  return (
    <div className={styles.page}>
      <Header />
      <Routes>
        <Route path="/" element={
          <Main>

          </Main>
        } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
