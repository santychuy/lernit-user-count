import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase';

import { Layout } from '../components/Layout';
import { Input } from '../components/common/Input';
import { validateEmail } from '../helpers/validateEmail';

interface UserInput {
  email: string;
  password: string;
}

export default (): JSX.Element => {
  const [{ email, password }, setUserInput] = useState<UserInput>({
    email: '',
    password: '',
  });
  const history = useHistory();

  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    setUserInput(prevState => ({ ...prevState, [name]: value }));
  };

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

  return (
    <Layout>
      <Title>Lernit App</Title>
      <BodyLogin>
        <FormTitle>Login</FormTitle>
        <Input
          title="Email"
          type="text"
          name="email"
          value={email}
          change={handlerChange}
        />
        <Input
          title="Contraseña"
          type="password"
          name="password"
          value={password}
          change={handlerChange}
        />
        <BtnLogin onClick={handleLogin}>Entrar</BtnLogin>
        <BtnSignUp onClick={() => history.push('/signup')}>
          ¿Todavia no tienes una cuenta?
        </BtnSignUp>
      </BodyLogin>
    </Layout>
  );
};

const Title = styled.h1`
  padding-bottom: 20px;
`;

const BodyLogin = styled.div`
  background-color: #fff;
  height: 450px;
  width: 280px;
  border-radius: 25px;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0 0.55);
  padding: 10px 35px;
`;

const FormTitle = styled.h2`
  font-size: 1.4em;
  padding-bottom: 20px;
`;

const BtnLogin = styled.button`
  background-color: #009ecf;
  color: #fff;
  padding: 15px 50px;
  width: 100%;
  margin-top: 70px;
  margin-bottom: 10px;
`;

const BtnSignUp = styled.button`
  width: 100%;
  text-align: center;
  text-decoration: underline;
  border: none;
  background-color: white;
`;
