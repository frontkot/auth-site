import './theme/App.scss';
import Header from './components/Header/Header.component';
import AppRoutes from './routes/AppRoutes/AppRoutes.component';
import Footer from './components/Footer/Footer.component';
import SocialNetworks from './components/SocialNetworks/SocialNetworks.component';
import Pagination from './components/Pagination/Pagination.component';
import { useSelector } from 'react-redux';
import { checkIsOpen } from './store/modalWindow/selectors';
import ModalWindow from './components/ModalWindow/ModalWindow.component';
import { useLocation } from 'react-router-dom';

const App = () => {
  const isModalOpen = useSelector(checkIsOpen);
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className={path !== '/' ? 'App App__other-page' : 'App'}>
      {isModalOpen && <ModalWindow />}
      
      {path !== '/' &&  <Header />}
      <AppRoutes />
      <Footer />
      {/* <SocialNetworks /> */}
      {/* <Pagination /> */}
    </div>
  );
}

export default App;
