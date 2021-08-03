import React, { Component } from 'react';
import axios from "axios";
import styled from 'styled-components';
import labeninjas2 from "./components/labeninjas2";

 const CardHome = styled.div`
padding: 10px;
margin: 10px;
text-align: center;

`


export class Home extends Component {
  state = {
    telaAtual : "cadastro",
  };

  escolheTela = () => {
      switch(this.state.telaAtual){
        case "cadastro":
          return <TelaCadastro irParaContratar={this.irParaContratar}/>
        case "contratar":
          return <TelaLista irParaCadastro={this.irParaCadastro}/>
        default:
        return <div>Erro</div>
      }
  }

  irParaCadastro = () =>{
    this.setState({telaAtual: "cadastro"})
  }

  irParaContratar = () =>{
    this.setState({telaAtual: "contratar"})
  }


  render() {
    return (
    <div> 
      <img src ={labeninjas2}/>
      <CardHome>
          <h1>LabeNinjas</h1>
          <h3>O talento certo no momento certo</h3>
          <button onClick={this.props.irParaCadastro}>Quero ser um Ninja</button>
          <button onClick={this.props.irParaContratar}>Contratar um Ninja</button>
      </CardHome> 
      {this.escolheTela()}
    </div> 

    )
  }
}
