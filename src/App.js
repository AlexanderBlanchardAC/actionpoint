import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import FooterAddress from './components/footer/FooterAddress';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <FooterAddress />
      </div>
    </Router>
  );
}

export default App;
