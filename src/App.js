import './App.scss';
import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import Routes from './routes/routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <Router>
      <Route render={props => (
        <>
          <Header {...props} />
          <Routes />
          <Footer />
        </>
      )} />
    </Router>
  );
}

export default App;
