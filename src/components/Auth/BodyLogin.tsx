import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { Input } from '../common/Input';
import { ButtonLogin } from './ButtonLogin';

interface UserInput {
  email: string;
  password: string;
}

export default () => {
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

  return (
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
      <ButtonLogin email={email} password={password} />
      <BtnSignUp onClick={() => history.push('/signup')}>
        ¿Todavia no tienes una cuenta?
      </BtnSignUp>
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
`;

const FormTitle = styled.h2`
  font-size: 1.4em;
  padding-bottom: 20px;
`;

const BtnSignUp = styled.button`
  width: 100%;
  text-align: center;
  text-decoration: underline;
  border: none;
  background-color: white;
`;
