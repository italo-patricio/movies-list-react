import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components'
import MainPage from "./pages/main";
import styled from "styled-components";

const ContainerApp = styled.div``;

const Footer = styled.div`
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`; 

const App = () => {
  return (
   <ContainerApp>
      <Header />
      <MainPage />
      <Footer>
        <p>Desenvolvido por <a href="mailto://italopatriciosouza@hotmail.com">Ítalo Patrício</a></p>
      </Footer>
    </ContainerApp>
  );
}

export default App;
