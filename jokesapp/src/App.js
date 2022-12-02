import React from 'react';
import './App.css';
import Examen from './examen';
import ExameDetail from './examendetail';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Examen />} />
        <Route path="/casas" element={<Examen />} />
        <Route path="/casas/:casaId" element={<ExameDetail />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
