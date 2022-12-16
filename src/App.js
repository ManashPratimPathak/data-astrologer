import './Global.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={< HomePage />} key='route-home-screen'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
