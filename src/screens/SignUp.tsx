import React from 'react';
import styled from 'styled-components';

import { Layout } from '../components/Layout';
import BodySignUp from '../components/SignUp/BodySignUp';

export default (): JSX.Element => {
  return (
    <Layout>
      <Title>Registrar</Title>
      <BodySignUp />
    </Layout>
  );
};

const Title = styled.h1`
  padding-bottom: 10px;
`;
