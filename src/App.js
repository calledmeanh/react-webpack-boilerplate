import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../asset/logo.png';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #292c33;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const rotate = keyframes`
to {
  transform: rotate(360deg);
}`;

const Logo = styled.img`
  animation: 5s ${rotate} infinite linear;
`;

const Message = styled.p`
  color: #fff;
  font-size: 14px;
`;

const Link = styled.a`
  color: #83d7f3;
  font-size: 14px;
`;

export default function App() {
  return (
    <Wrapper>
      <Logo src={logo} alt="react-logo" width={150}></Logo>
      <Message>Edit src/App.js and save to reload</Message>
      <Link href="https://react.dev/" target="_blank">
        Learn React
      </Link>
    </Wrapper>
  );
}
