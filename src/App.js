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
import ReduxToastr from "react-redux-toastr";

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
      <ReduxToastr
        timeOut={3000}
        newestOnTop
        preventDuplicates
        position="top-right"
        getState={(state) => state.toastr}
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
      />
      {/* <SocialNetworks /> */}
      {/* <Pagination /> */}
    </div>
  );
}

export default App;
