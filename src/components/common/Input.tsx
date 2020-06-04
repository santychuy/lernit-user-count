import React, { FC } from 'react';
import styled from 'styled-components';

interface InputConfig {
  title: string;
  type: 'text' | 'password';
  value: string;
  name: string;
  change: any;
}

export const Input: FC<InputConfig> = ({ type, title, value, name, change }) => (
  <>
    <InputTitle>{title}</InputTitle>
    <InputText type={type} value={value} name={name} onChange={e => change(e)} />
  </>
);

const InputTitle = styled.p`
  color: #cfcfcf;
`;

const InputText = styled.input`
  background-color: #f7f7f7;
  color: #000;
  border: none;
  height: 30px;
`;
