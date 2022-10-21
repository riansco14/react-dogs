import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './views/Home';
import { Login } from './views/Login';
import { ProviderAuth } from './hooks/useAuth';
import { GlobalStyle, theme } from './globalStyles';
import { ThemeProvider } from 'styled-components';
import { NotFound } from './views/NotFound/';
import { ProtectedRoute } from './components/Helpers/ProtectedRoute';
import { User } from './views/User';
import { AuthLoading } from 'components/Helpers/AuthLoading';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <ProviderAuth>
              <GlobalStyle />
              <Header />
              <AuthLoading>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="login/*" element={<ProtectedRoute userExists={true} redirectPath="/account" />} >
                    <Route index element={<Login />} />
                  </Route>
                  <Route element={<ProtectedRoute />} >
                    <Route path="account/*" element={<User />} />
                  </Route>
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </AuthLoading>
              <Footer />
            </ProviderAuth>
          </QueryClientProvider>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;
