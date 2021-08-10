import React, { Component } from 'react';
import styled from 'styled-components';
import labeninjas2 from "./imagens/labeninjas2.png";
import Button from '@material-ui/core/Button';
import { theme } from './theme';
import {ThemeProvider } from '@material-ui/core/styles';

 const CardHome = styled.div`
padding: 10px;
margin: 10px;
text-align: center;
color: #7C66C5;
`

const HomeImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;

`

const ButtonHome = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 20px;
`

export default class Home extends React.Component {
 

  render() {
    return (
    <div> <CardHome>
          <HomeImg src ={labeninjas2}/>    
          <h1>LabeNinjas</h1>
          <h3>O talento certo no momento certo</h3>
          <ButtonHome>
          <ThemeProvider theme={theme}>
          <Button variant="contained" color="primary" 
          onClick={this.props.irParaCadastroPrestador}>Quero ser um Ninja</Button>
          
          <Button variant="contained" color="primary" 
          onClick={this.props.irParaContratarServico}>Contratar um Ninja</Button>
        
          </ThemeProvider>
          </ButtonHome>
        
      </CardHome> 
    </div> 
    )
  }
}


















