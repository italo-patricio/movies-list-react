import React from 'react';
import {Movie} from "../../interfaces/movie";
import {Config} from "../../config/app-config";
import styled from "styled-components";

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

interface ImageProp {
    src: string;
    width?: string;
    height?: string;

}

const Img = styled.img`
  src: ${(props: ImageProp) => props.src};
  width: ${(props: ImageProp) => props.width || '150px'};
  height: ${(props: ImageProp) => props.height || '200px'};
`;

const SubTitle = styled.p`
   font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
   font-size: 14px; 
`;

const Button = styled.button`
    background: palevioletred;
    color: #fff;
    height: 40px;
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

export interface ListItemMovieProp {
    movie: Movie;
}

const ListItemMovie = (props: ListItemMovieProp ) => {
    const { movie } = props;
  return <ItemMovie>
            <Img src={`${Config.API_URL_IMAGE}/w200/${movie.poster_path}`} />
            <SubTitle>{movie.title }</SubTitle>
            <Button>Ver detalhes</Button>    
        </ItemMovie>;
}

export default ListItemMovie;