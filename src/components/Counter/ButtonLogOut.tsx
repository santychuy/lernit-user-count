import React from 'react';
import styled from 'styled-components';
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';

export const ButtonLogOut = () => {
  const history = useHistory();

  const handleLogout = async (): Promise<void> => {
    try {
      await firebase.auth().signOut();
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  return <BtnLogOut onClick={handleLogout}>Cerrar Sesión</BtnLogOut>;
};

const BtnLogOut = styled.button`
  background-color: #fc3d5d;
  color: #fff;
  border: none;
  margin-top: 60px;
  padding: 15px 45px;
  border-radius: 10px;
`;
