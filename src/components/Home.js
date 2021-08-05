import React, { Component } from 'react';
import axios from "axios";
import styled from 'styled-components';
import labeninjas2 from "./imagens/labeninjas2.png";
import { CadastroPrestador } from './CadastroPrestador';
import { ContratarServico } from './ContratarServico';
import App from '../App';

 const CardHome = styled.div`
padding: 10px;
margin: 10px;
text-align: center;

.img{
  display: block;
  margin-left: auto;
  margin-right: auto;
},

button{
  margin: 10px;
}
`
export default class Home extends React.Component {
 

  render() {
    return (
    <div> <CardHome>
          <img src ={labeninjas2}/>    
          <h1>LabeNinjas</h1>
          <h3>O talento certo no momento certo</h3>
          <button onClick={this.props.irParaCadastroPrestador}>Quero ser um Ninja</button>
          <button onClick={this.props.irParaContratarServico}>Contratar um Ninja</button>
      </CardHome> 
    </div> 
    )
  }
}


















