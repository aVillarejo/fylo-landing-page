import React from 'react';
import styled from 'styled-components';

import Header from '../components/header';

const HomeStyled = styled.div`
  background: hsl(218, 28%, 13%);
  min-height: 100vh;
  margin: 0;
`;
const Home = () => {
  return (
    <HomeStyled>
      <Header />
    </HomeStyled>
  );
};

export default Home;
