import React from "react";
import {Movie} from "../../interfaces/movie";
import ListItemMovie from "../list-item-movie";
import Empty from "../empty";
import styled from "styled-components";

interface ListMovieProp {
    movies: Movie[];
}

const ListMovieStyled = styled.div`
   display:flex;
   flex-wrap: wrap;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   max-width: 70vw;
   margin: 20px auto 0;
   padding: 0 20px; 
`;

const ListMovie = (props: ListMovieProp ) => {
    const { movies } = props;
    
    console.log('ListMovie',movies);

    return <ListMovieStyled>
        {
            movies.length > 0 ?
            movies.map((item: Movie)=> <ListItemMovie movie={item} />)
            : Empty({ mensagem: "Listagem vazia!" })
        }
    </ListMovieStyled>;
}

export default ListMovie;