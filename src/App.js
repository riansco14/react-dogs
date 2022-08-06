import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './views/Home';
import { Login } from './views/Login';
import './App.css';
import { ProviderAuth } from './hooks/useAuth';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ProviderAuth>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
          </Routes>
          <Footer />
        </ProviderAuth>
      </BrowserRouter>
    </div>
  );
}

export default App;
