import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { DriftPage, ForzaPage, HomePage, TimeAttackPage } from './components/Menu/components';

import { Menu } from './components/Menu/Menu'

import './css/index.css'

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}