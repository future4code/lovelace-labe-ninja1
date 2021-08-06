import React from 'react';
import axios from "axios";
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { theme } from './theme';
import {ThemeProvider } from '@material-ui/core/styles';

const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
-webkit-box-shadow: 7px 7px 15px 1px rgba(0,0,0,0.79); 
box-shadow: 7px 7px 15px 1px rgba(0,0,0,0.79);
margin-top: 20px;
`

const Botao = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 20px;
margin-right: 10px;
margin-left: 10px;
`


export class CardServico extends React.Component {
    setProductDetails = () => {
        this.props.changeScene('detalhe');
        this.props.showProduct(this.props.servico)
    }
    
            
    render() {
        console.log(this.props)
        return (

            <MainContainer>
                <h3> {this.props.servico.title} </h3>
                <p>R$: 
                {this.props.servico.price}
                </p>
                <p>
                {this.props.servico.description}
                </p>
                <Botao>
                <ThemeProvider theme={theme}>
                <Button variant="contained" color="primary" 
                 onClick={this.setProductDetails}>Ver detalhes</Button>

                <Button variant="contained" color="primary" 
                 onClick={() => this.props.updateProducts(this.props.servico)}
                >Adicionar ao carrinho</Button>
               </ThemeProvider>
               </Botao>
            </MainContainer>

        );
    }
}