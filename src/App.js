import './App.scss';
import Header from './components/Header/Header.component';
import AppRoutes from './routes/AppRoutes/AppRoutes.component';
import Footer from './components/Footer/Footer.component';
import SocialNetworks from './components/SocialNetworks/SocialNetworks.component';
import Pagination from './components/Pagination/Pagination.component';
import { useSelector } from 'react-redux';
import { checkIsOpen } from './store/modalWindow/selectors';
import ModalWindow from './components/ModalWindow/ModalWindow.component';

const App = () => {
  const isModalOpen = useSelector(checkIsOpen);
  return (
    <div className="App">
      {isModalOpen && <ModalWindow header='Do you want to sign out?' isEntry={false}/>}
      
      <Header />
      <AppRoutes />
      <Footer />
      {/* <SocialNetworks /> */}
      {/* <Pagination /> */}
    </div>
  );
}

export default App;
