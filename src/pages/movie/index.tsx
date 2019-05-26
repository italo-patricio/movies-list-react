import React, { Component } from 'react';
import styled from 'styled-components';
import Api from '../../services/api';
import { Config } from '../../config/app-config';
import {ResponseStatus} from "../../enums/response-status";
import { AxiosResponse } from 'axios';
import { RequestHttp } from '../../interfaces/request-http';
import { Movie } from '../../interfaces/movie';
import Img from '../../components/Img';
import Button from '../../components/button';
import { Link } from 'react-router-dom';

const MovieBoxShow = styled.div`
    background: #DDD;
    border: 1px solid #DDD;
    height: 70vh;
    width: 70vw;
    display: flex;
    margin: 10px 10px;
    margin-left: 15vw; 
    justify-content: space-between;
`; 

const TitleMovie = styled.h1`
    width: 40vw;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
`;

const SubTitleMovie = styled.p`
    width: 40vw;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
`;


interface MoviePageProp {
    id: any;
}

export default class MoviePage extends React.Component<any> {
    state = {
        movie: {} as Movie,
        loading: true,
    };

    async componentDidMount() {
        const { id } = this.props.match.params;
        this.setState({loading: true});

        const response : AxiosResponse<RequestHttp<Movie>>  = await Api.get(`movie/${id}?api_key=${Config.API_KEY_V3}&language=${Config.LANGUAGE}&append_to_response=images`);

        const movie = response.data as Movie ;  

        if(response.status === ResponseStatus.SUCCESS ){
            console.log('movie',movie);
            this.setState({
                movie: movie,
                loading: false,
            })
        }

    }
    
    backList = () =>{ console.log('Voltar a listagem!') }
    


    render(){ 

        const { movie, loading } = this.state;

        let tplMovie = (
            <MovieBoxShow>
            <Img src={`${Config.API_URL_IMAGE}/w500/${movie.poster_path}`} width={`380px`} height={`450px`} />  
            <div>
              <TitleMovie>{movie.title}</TitleMovie>
              <SubTitleMovie>{movie.overview}</SubTitleMovie>
              
              <Button to="/">Voltar para listagem</Button>
            </div>
          </MovieBoxShow> 
        );
        
        return (
            <>
            { loading ? 'Carregando por favor aguarde..' : tplMovie}
            </>
        )
    }

}
