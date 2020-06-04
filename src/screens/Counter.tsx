import React, { useState } from 'react';
import styled from 'styled-components';

import { Layout } from '../components/Layout';

export default (): JSX.Element => {
  const [counter, setCounter] = useState(0);

  const handleCount = (operation: string): void => {
    if (operation.includes('Add')) {
      if (counter <= 100) {
        setCounter(counter + 1);
      }
    } else {
      if (counter > 0) {
        setCounter(counter - 1);
      }
    }
  };

  return (
    <Layout>
      <Title>Usuario: Santiago</Title>
      <ButtonCounter onClick={() => handleCount('Add')}>+</ButtonCounter>
      <Count>{counter}</Count>
      <ButtonCounter onClick={() => handleCount('Subtract')}>-</ButtonCounter>
    </Layout>
  );
};

const Title = styled.h1`
  padding-bottom: 50px;
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
