/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import firebase, { User } from 'firebase';
import { useHistory } from 'react-router-dom';
import { useUser } from 'reactfire';

import { Layout } from '../components/Layout';
import { ButtonLogOut } from '../components/Counter/ButtonLogOut';

export default (): JSX.Element => {
  const [counter, setCounter] = useState(0);
  const [docID, setDocID] = useState('');

  const history = useHistory();
  const user: User = useUser();
  const db = firebase.firestore();

  useEffect(() => {
    const getCountUser = async () => {
      try {
        const users = await db.collection('users').get();
        users.forEach(userDoc => {
          const userDocId = userDoc.data().id;
          if (userDocId === user.uid) {
            const countUser = userDoc.data().counter;
            setDocID(userDoc.id);
            setCounter(countUser);
          }
        });
      } catch (e) {
        console.log(e);
      }
    };
    getCountUser();
  }, [user]);

  const handleCount = async (operation: string): Promise<void> => {
    if (operation.includes('Add')) {
      if (counter <= 100) {
        const counterNew = counter + 1;
        setCounter(counterNew);
        const refUser = db.collection('users').doc(docID);
        await refUser.update({ counter: counterNew });
      }
    } else {
      if (counter > 0) {
        const counterNew = counter - 1;
        setCounter(counter - 1);
        const refUser = db.collection('users').doc(docID);
        await refUser.update({ counter: counterNew });
      }
    }
  };

  return (
    <Layout>
      {user ? (
        <>
          <Title>Usuario: {user.email}</Title>
          <ButtonCounter onClick={() => handleCount('Add')}>+</ButtonCounter>
          <Count>{counter}</Count>
          <ButtonCounter onClick={() => handleCount('Subtract')}>-</ButtonCounter>
          <ButtonLogOut />
        </>
      ) : (
        <>
          <Title>¿Qué haces? Inicia sesion</Title>
          <ButtonHome onClick={() => history.push('/')}>Ir a inicio</ButtonHome>
        </>
      )}
    </Layout>
  );
};

const Title = styled.h1`
  padding-bottom: 30px;
  font-size: 1.7em;
  text-align: center;
  @media (min-width: 1200px) {
    font-size: 2.2em;
  }
`;

const ButtonCounter = styled.button`
  color: #fff;
  background-color: #7573ff;
  border: none;
  padding: 30px 60px;
  font-size: 1.7em;
  border-radius: 15px;
`;

const Count = styled.h2`
  font-size: 2em;
  color: #000;
  padding: 15px 0;
`;

const ButtonHome = styled.button`
  border: none;
  background-color: #f4f4f1;
  color: #000;
`;
