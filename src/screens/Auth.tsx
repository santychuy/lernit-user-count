import React from 'react';
import styled from 'styled-components';

import { Layout } from '../components/Layout';
import BodyAuth from '../components/Auth/BodyLogin';

export default (): JSX.Element => {
  return (
    <Layout>
      <Title>Lernit App</Title>
      <BodyAuth />
    </Layout>
  );
};

const Title = styled.h1`
  padding-bottom: 20px;
`;
