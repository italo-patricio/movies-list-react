import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Button = styled(Link)`
    background: palevioletred;
    color: #fff;
    width: calc(150px);
    height: 40px;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    display: inline-block;
    font-size: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    display: flex;
    cursor: pointer;
    :hover {
       background: #afafaf;
       color: #fff;       
   }
`;

export default Button;
