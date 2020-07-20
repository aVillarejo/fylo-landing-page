import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const HeaderStyled = styled.header`
  font-family: 'Raleway', sans-serif;

  .container {
    /* border: 1px solid red; */

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px;
  }

  img {
    width: 74px;
    height: auto;
  }

  ul {
    display: flex;
    list-style: none;
    padding: 0;
  }

  li {
    width: fit-content;
    padding: 0 10px;
  }
  a {
    text-decoration: none;
    color: #fff;
  }

  /* @media */
  @media (min-width: 900px) {
    .container {
      padding: 75px;
    }
    img {
      width: auto;
    }
    li {
      padding: 0 25px;
    }
  }
`;
const Header = () => {
  return (
    <HeaderStyled>
      <div className='container'>
        <div className={'logoContainer'}>
          <Link href='/'>
            <img src='/images/logo.svg' alt='' />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link href='/features'>
                <a>Features</a>
              </Link>
            </li>
            <li>
              <Link href='/team'>
                <a>Team</a>
              </Link>
            </li>
            <li>
              <Link href='/sign-in'>
                <a>Sign In</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderStyled>
  );
};

export default Header;
