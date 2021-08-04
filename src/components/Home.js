import React, { Component } from 'react';
import axios from "axios";
import styled from 'styled-components';
import labeninjas2 from "./imgs/labeninjas2.png";
import { CadastroPrestador } from './CadastroPrestador';



 const CardHome = styled.div`
padding: 10px;
margin: 10px;
text-align: center;
.img{
  display: block;
  margin-left: auto;
  margin-right: auto
}
`
export class Home extends Component {
  state = {
    telaAtual : "cadastro",
  };
  escolheTela = () => {
      switch(this.state.telaAtual){
        case "cadastro":
          return 
          //<TelaCadastro irParaContratar={this.irParaContratar}/>
        case "contratar":
          return 
          //<TelaLista CadastroPrestador ={this.CadastroPrestador}/>
        default:
        return <div>Erro</div>
      }
  }
  CadastroPrestador = () =>{
    this.setState({telaAtual: "cadastro"})
  }
  irParaContratar = () =>{
    this.setState({telaAtual: "contratar"})
  }
  render() {
    return (
    <div> <CardHome>
          <img src ={labeninjas2}/>    
          <h1>LabeNinjas</h1>
          <h3>O talento certo no momento certo</h3>
          <button 
          //onClick={this.props.CadastroPrestador}
          >Quero ser um Ninja</button>
          <button 
          //onClick={this.props.irParaContratar}
          >Contratar um Ninja</button>
      </CardHome> 
      {this.escolheTela()}
    </div> 
    )
  }
}


















