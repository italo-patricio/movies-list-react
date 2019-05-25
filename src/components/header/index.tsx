import React from 'react';
import styled from "styled-components";

const HeaderStyle = styled.nav`
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  box-shadow: #dadada 2px;
`;

const HeaderTitle = styled.h1`
  font-size: 25px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color: palevioletred;
`; 

const Header = () => {
    return <HeaderStyle>
               <HeaderTitle>Listagem de Filmes </HeaderTitle>
           </HeaderStyle>
};

export default Header;