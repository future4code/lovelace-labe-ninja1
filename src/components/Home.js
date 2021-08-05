import React, { Component } from 'react';
import axios from "axios";
import styled from 'styled-components';
import labeninjas2 from "./imagens/labeninjas2.png";
import { CadastroPrestador } from './CadastroPrestador';
import { ContratarServico } from './contratarServico';

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
export class Home extends Component {
   state = {
    telaAtual : "cadastro",
  }

  escolheTela = () => {
      switch(this.state.telaAtual){
        case "cadastro":
          return <CadastroPrestador/>;

        case "contratar":
          return <ContratarServico/>;
          
        default:
        return <div>Erro</div>;
      }
  }

  irParaCadastroPrestador = () =>{
    this.setState({telaAtual: "cadastro"})
  }
  irParaContratarServico = () =>{
    this.setState({telaAtual: "contratar"})
  } 

  render() {
    return (
    <div> <CardHome>
          <img src ={labeninjas2}/>    
          <h1>LabeNinjas</h1>
          <h3>O talento certo no momento certo</h3>
          <button onClick={this.irParaCadastroPrestador}>Quero ser um Ninja</button>
          <button onClick={this.irParaContratarServico}>Contratar um Ninja</button>
      </CardHome> 
      {this.escolheTela()}
    </div> 
    )
  }
}


















