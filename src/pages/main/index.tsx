import React, {Component} from 'react';
import Api from "../../services/api";
import {Config} from "../../config/app-config";
import {AxiosResponse} from "axios";
import {Movie} from "../../interfaces/movie";
import {RequestHttp} from "../../interfaces/request-http";
import {ResponseStatus} from "../../enums/response-status";
import ListMovie from "../../components/list-movie";
import Empty from "../../components/empty";
import styled from "styled-components";

enum TypeFilter {
    FILMES= 'Filmes',
    SERIES= 'Séries'
}

const Footer = styled.footer`
    width: 70vw;
    height: 10vh;
    background: #DDD;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const FooterParagraph = styled.p`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 15px;
    
    display:flex;
    justify-content: space-between;
`;

const MainPageStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Button = styled.button`
    background: palevioletred;
    color: #fff;
    height: 40px;
    display: flex;
    font-size: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    display: flex;
    margin-left: 5px;
    margin-right: 5px;
    cursor: pointer;
    :hover {
       background: #afafaf;
       color: #fff;       
   }
`;

export default class MainPage extends Component {
    state = {
        loading: false,
        page: 1,
        items: [],
        total_page: 0,
        total_items: 0,
        type_filter: TypeFilter.FILMES
    };
    componentDidMount() {
        this.loadCards();
    }

    loadCards =  async (pageTo = 1) => {
        this.setState({
            loading: true
        })
       const response: AxiosResponse<RequestHttp<Movie>> = await Api.get(`movie/popular?api_key=${Config.API_KEY_V3}&language=${Config.LANGUAGE}&page=${pageTo}`);
       if(response.status === ResponseStatus.SUCCESS){
            this.setState({
                total_items: response.data.total_results,
                total_page: response.data.total_pages,
                items: response.data.results,
                page: pageTo,
                loading: false,
            })
           console.log(response.data);
       }
       else {
           console.log('Falha na requisição!');
       }
    }

    // Carrega a lista baseado no tipo do filtro selecionado
    getList =  () => {
        switch(this.state.type_filter) {
            case TypeFilter.FILMES:
                 return this.getListMovie();
            case TypeFilter.SERIES:
                    alert("Metodo nao implementado!");
                break;
            default:
                 return this.getListMovie();    
        }
    }

    getListMovie = () => {
        return <ListMovie movies={this.state.items}/>
    }

    prevPage = () => {
        const {page} = this.state;

        if(page === 1) return;

        const pageNumber = page - 1;

        this.loadCards(pageNumber);

    }

    nextPage = () => {
        const {page, total_page} = this.state;
        
        if(page === total_page) return;

        const pageNumber = page +1;

        this.loadCards(pageNumber);
    }

    render() {
        const { loading, items ,total_items, total_page } = this.state;

        return(
           <MainPageStyled>
               { loading ? 'Carregando por favor aguarde..': '' }
               { items.length > 0 ? this.getList() : Empty({mensagem: 'Nada a exibir!'}) }
               <Footer>
                <FooterParagraph>
                        <p><b>Total de itens:</b> { total_items } </p>
                        <p><b>Total de páginas:</b> { total_page }</p>
                 </FooterParagraph>
                <FooterParagraph>
                    <Button onClick={this.prevPage}>Voltar página</Button>
                    <Button onClick={this.nextPage}>Próxima página</Button>
                </FooterParagraph>
               </Footer>
           </MainPageStyled>
        );
    }
}

