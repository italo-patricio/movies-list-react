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
`;

const FooterParagraph = styled.p`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 15px;
    margin-top: 15px;
`;

const MainPageStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default class MainPage extends Component {
    state = {
        items: [],
        total_page: 0,
        total_items: 0,
        type_filter: TypeFilter.FILMES
    };
    componentDidMount() {
        this.loadCards();
    }

    loadCards =  async () => {
       const response: AxiosResponse<RequestHttp<Movie>> = await Api.get(`movie/popular?api_key=${Config.API_KEY_V3}&language=${Config.LANGUAGE}`);
       if(response.status === ResponseStatus.SUCCESS){
            this.setState({
                total_items: response.data.total_results,
                total_page: response.data.total_pages,
                items: response.data.results
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

    render() {
        const { total_items, total_page } = this.state;

        return(
           <MainPageStyled>
               { this.state.items.length > 0 ? this.getList() : Empty({mensagem: 'Nada a exibir!'}) }
               <Footer>
                <FooterParagraph>
                        <p><b>Total de itens:</b> { total_items }</p>
                        <p><b>Total de páginas:</b> { total_page }</p>
                 </FooterParagraph>
                <FooterParagraph>
                    <button>Voltar página</button>
                    <button>Próxima página</button>
                </FooterParagraph>
               </Footer>
           </MainPageStyled>
        );
    }
}

