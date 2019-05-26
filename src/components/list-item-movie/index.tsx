import React from 'react';
import {Movie} from "../../interfaces/movie";
import {Config} from "../../config/app-config";
import styled from "styled-components";
import Img from '../Img';
import Button from '../button';
import { Link } from 'react-router-dom';

const ItemMovie = styled.div`
   background: #fff;
   width: 200px;
   height: 300px;
   border-radius: 5px;
   box-shadow: #333;
   margin: 2px; 
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
   align-items: center;
   justify-content: space-between;
   border: 1px solid #DDD;
   padding: 10px;
   
`;


const SubTitle = styled.p`
   font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
   font-size: 14px; 
`;


export interface ListItemMovieProp {
    movie: Movie;
    handleClick?: any;
}

const ListItemMovie = (props: ListItemMovieProp ) => {
    const { movie } = props;
  return <ItemMovie>
            <Img src={`${Config.API_URL_IMAGE}/w200/${movie.poster_path}`} />
            <SubTitle>{movie.title }</SubTitle>
            <Button to={`/movie/${movie.id}`}>Ver detalhes</Button>    
            
        </ItemMovie>;
}

export default ListItemMovie;