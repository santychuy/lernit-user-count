import React, { FC } from 'react';
import styled from 'styled-components';

export const Layout: FC = ({ children }): JSX.Element => (
  <Container>{children}</Container>
);

const Container = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
`;
