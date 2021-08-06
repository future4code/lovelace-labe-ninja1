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

const Botao = styled.div`
display: flex;
justify-content: flex-end;
`

class Header extends React.Component {

        

render() {
        return (
        <EstilizaHeader>
                <h1>LabeNinja</h1>
                <Botao>
                        <button onClick={this.props.irParaHome}>Home</button>
                        <button onClick={this.props.irParaCarrinho}>Carrinho</button>
                </Botao>
        </EstilizaHeader>
                );
        }
}


export default Header;