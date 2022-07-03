import './App.css';

import {Routes, Route} from 'react-router-dom';

import DetailsPage from './pages/DetailsPage';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/:id" element={<DetailsPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
