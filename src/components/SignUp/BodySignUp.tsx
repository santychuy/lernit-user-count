import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { Input } from '../common/Input';
import { ButtonSignUp } from './ButtonSignUp';

interface SignUpInput {
  email: string;
  password: string;
  confirm: string;
}

export default () => {
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

  return (
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
      <ButtonSignUp confirm={confirm} email={email} password={password} />
      <BtnLogin onClick={() => history.push('/')}>¿Ya tienes cuenta?</BtnLogin>
    </BodyLogin>
  );
};

const BodyLogin = styled.div`
  background-color: #fff;
  height: 450px;
  width: 280px;
  border-radius: 25px;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0 0.55);
  padding: 10px 35px;
  @media (min-width: 1200px) {
    height: 500px;
    width: 500px;
  }
`;

const FormTitle = styled.h2`
  font-size: 1.4em;
  padding-bottom: 20px;
  @media (min-width: 1200px) {
    font-size: 2em;
    padding-bottom: 10px;
  }
`;

const BtnLogin = styled.button`
  width: 100%;
  text-align: center;
  text-decoration: underline;
  border: none;
  background-color: white;
`;
