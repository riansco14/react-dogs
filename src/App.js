import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './views/Home';
import { Login } from './views/Login';
import { ProviderAuth } from './hooks/useAuth';
import { GlobalStyle, theme } from './globalStyles';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <ProviderAuth>
            <GlobalStyle />
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login/*" element={<Login />} />
            </Routes>
            <Footer />
          </ProviderAuth>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
