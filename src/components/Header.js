import React from 'react';
import axios from "axios";
import styled from 'styled-components';
import Home from './Home';
import { Carrinho } from './Carrinho';

const EstilizaHeader = styled.div`
display: flex;
justify-content: space-between;
height: 30%;
background-color: black;
color: white;
`

const EstilizaTitulo = styled.div`
display: flex;
margin-left: 70px;
color: #FF8906;
`

const Botao = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
margin-right: 120px;
`

class Header extends React.Component {

        

render() {
        return (
        <EstilizaHeader>
                <EstilizaTitulo>
                <h1>LabeNinjas</h1>
                </EstilizaTitulo>
                <Botao>
                        <button onClick={this.props.irParaHome}>Home</button>
                        <button onClick={this.props.irParaCarrinho}>Carrinho</button>
                </Botao>
        </EstilizaHeader>
                );
        }
}


export default Header;