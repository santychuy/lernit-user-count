import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

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

  const handleLogin = (): void => {
    if (email === '' && password === '') return alert('Llenar campos requeridos');
    if (!validateEmail(email)) return alert('Escribir e-mail válido');
    history.push('/counter');
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
      </BodyLogin>
    </Layout>
  );
};

const Title = styled.h1`
  padding-bottom: 20px;
`;

const BodyLogin = styled.div`
  background-color: #fff;
  height: 400px;
  width: 250px;
  border-radius: 25px;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0 0.55);
  padding: 10px 35px;
`;

const FormTitle = styled.h2`
  font-size: 1.4em;
  padding-bottom: 40px;
`;

const BtnLogin = styled.button`
  background-color: #009ecf;
  color: #fff;
  padding: 15px 50px;
  width: 100%;
  margin-top: 60px;
`;
