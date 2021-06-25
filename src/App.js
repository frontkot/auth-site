import './App.scss';
import Header from './components/Header/Header.component';
import AppRoutes from './routes/AppRoutes/AppRoutes.component';
import Footer from './components/Footer/Footer.component';
import SocialNetworks from './components/SocialNetworks/SocialNetworks.component';
import Pagination from './components/Pagination/Pagination.component';

const App = () => {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
      <Footer />
      {/* <SocialNetworks /> */}
      {/* <Pagination /> */}
    </div>
  );
}

export default App;
