import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { Layout } from '../components/Layout';
import { Input } from '../components/common/Input';
import { validateEmail } from '../helpers/validateEmail';

interface SignUpInput {
  email: string;
  password: string;
  confirm: string;
}

export default (): JSX.Element => {
  const [{ confirm, email, password }, setInputUser] = useState<SignUpInput>({
    confirm: '',
    email: '',
    password: '',
  });

  const history = useHistory();

  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    setInputUser(prevState => ({ ...prevState, [name]: value }));
  };

  const handleRegister = (): void => {
    if (email === '' && password === '' && confirm === '')
      return alert('Llenar campos requeridos');
    if (!validateEmail(email)) return alert('Escribir e-mail válido');
    if (password !== confirm) return alert('Contraseñas no coinciden');
    history.push('/');
  };

  return (
    <Layout>
      <Title>Registrar</Title>
      <BodyLogin>
        <FormTitle>Sign Up</FormTitle>
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
        <Input
          title="Confirmar"
          type="password"
          name="confirm"
          value={confirm}
          change={handlerChange}
        />
        <BtnSignUp onClick={handleRegister}>Entrar</BtnSignUp>
        <BtnLogin onClick={() => history.push('/')}>¿Ya tienes cuenta?</BtnLogin>
      </BodyLogin>
    </Layout>
  );
};

const Title = styled.h1`
  padding-bottom: 10px;
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

const BtnSignUp = styled.button`
  background-color: #009ecf;
  color: #fff;
  padding: 15px 50px;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 10px;
`;

const BtnLogin = styled.button`
  width: 100%;
  text-align: center;
  text-decoration: underline;
`;
