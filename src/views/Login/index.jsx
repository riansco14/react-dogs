import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginCreate } from './LoginCreate';
import { LoginForm } from './LoginForm';
import { LoginPasswordReset } from './LoginPasswordReset';
import { LoginLostPassword } from './LoginLostPassword';
import { Container } from './styles';

export function Login() {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<LoginForm />} ></Route>
        <Route path='/create' element={<LoginCreate />} ></Route>
        <Route path='/lost-password' element={<LoginPasswordReset />} ></Route>
        <Route path='/reset-password' element={<LoginLostPassword />} ></Route>
      </Routes>
    </Container>
  );
}

