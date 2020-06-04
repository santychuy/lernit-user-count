import React, { FC } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase';

interface SignUpInput {
  email: string;
  password: string;
  confirm: string;
}

export const ButtonSignUp: FC<SignUpInput> = ({ confirm, email, password }) => {
  const history = useHistory();

  const handleRegister = async (): Promise<void> => {
    if (email === '' && password === '' && confirm === '')
      return alert('Llenar campos requeridos');
    if (password !== confirm) return alert('Contraseñas no coinciden');
    if (password.length < 6) return alert('Contraseña debe ser más segura');

    try {
      const userCreated = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      const userID = userCreated.user?.uid;
      var db = firebase.firestore();
      await db.collection('users').add({
        id: userID,
        counter: 0,
      });

      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  return <BtnSignUp onClick={handleRegister}>Entrar</BtnSignUp>;
};

const BtnSignUp = styled.button`
  background-color: #009ecf;
  color: #fff;
  padding: 15px 50px;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 10px;
  @media (min-width: 1200px) {
    margin-top: 50px;
  }
`;
