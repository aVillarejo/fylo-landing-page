import React, { useEffect } from 'react';
import Router from 'next/router';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Index() {
  useEffect(() => {
    const { pathname } = Router;
    if (pathname == '/') {
      Router.push('/home');
    }
  });
  return <Title>Next with styled-components</Title>;
}
