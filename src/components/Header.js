import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { theme } from './theme';
import {ThemeProvider } from '@material-ui/core/styles'


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
color: #E53170;
`

const Botao = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
margin-right: 120px;
gap: 20px;
`

class Header extends React.Component {

        

render() {
        return (
        <EstilizaHeader>
                <EstilizaTitulo>
                <h1>LabeNinjas</h1>
                </EstilizaTitulo>
                <Botao>
                <ThemeProvider theme={theme}>
                        
                        <Button variant="contained" color="primary" 
                        onClick={this.props.irParaHome}>Home</Button>

                        <Button variant="contained" color="primary"
                         onClick={this.props.irParaCarrinho}>Carrinho</Button>

                </ThemeProvider>

                </Botao>
        </EstilizaHeader>
                );
        }
}


export default Header;