import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginCreate } from './LoginCreate';
import { LoginForm } from './LoginForm';
import { LoginPasswordReset } from './LoginPasswordReset';
import { LoginLostPassword } from './LoginLostPassword';
import { Container, FormContainer } from './styles';
import { ContextAuth } from '../../hooks/useAuth';

export function Login() {
  const { user } = useContext(ContextAuth)

  if (user)
    return <Navigate to="/conta" />
  return (
    <Container>
      <FormContainer>
        <Routes>
          <Route path='/' element={<LoginForm />} ></Route>
          <Route path='/create' element={<LoginCreate />} ></Route>
          <Route path='/lost-password' element={<LoginPasswordReset />} ></Route>
          <Route path='/reset-password' element={<LoginLostPassword />} ></Route>
          </Routes>
        </FormContainer>
    </Container>
  );
}

