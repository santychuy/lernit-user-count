import React, { FC } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase';

import { validateEmail } from '../../helpers/validateEmail';

interface InputLogin {
  email: string;
  password: string;
}

export const ButtonLogin: FC<InputLogin> = ({ email, password }) => {
  const history = useHistory();

  const handleLogin = async (): Promise<void> => {
    if (email === '' && password === '') return alert('Llenar campos requeridos');
    if (!validateEmail(email)) return alert('Escribir e-mail válido');

    try {
      firebase.auth().signInWithEmailAndPassword(email, password);
      history.push('/counter');
    } catch (e) {
      console.log(e);
    }
  };

  return <BtnLogin onClick={handleLogin}>Entrar</BtnLogin>;
};

const BtnLogin = styled.button`
  background-color: #009ecf;
  color: #fff;
  padding: 15px 50px;
  width: 100%;
  margin-top: 70px;
  margin-bottom: 10px;
  @media (min-width: 1200px) {
    margin-top: 90px;
  }
`;
