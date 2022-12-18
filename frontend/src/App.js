import './Global.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import OurWorkPage from './pages/OurWorkPage/OurWorkPage';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={< HomePage />} key='route-home-screen'/>
          <Route exact path="/OurWork" element={< OurWorkPage />} key='route-our-work-screen'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
