import React, { Component } from 'react'
import axios from "axios";
import styled from 'styled-components';

import { DetalheServico } from './DetalheServico';
import CardServico from './CardServico';
import { findByLabelText } from '@testing-library/react';

import Button from '@material-ui/core/Button';
import { theme } from './theme';
import {ThemeProvider } from '@material-ui/core/styles';


const url = "https://labeninjas.herokuapp.com/jobs"

const headers = {
  headers: {
    Authorization: "6a92c60e-5cc8-4cdd-b60a-7e55a0798b10"
  }
};

const CardsServicos = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr; 
background-color: white;
border-box: 2px solid black
padding: 20px;
margin: 20px;
gap: 20px;
background-color: #35363A;
`

const EstilizaTitulo = styled.div`
display: flex;
color: #E53170;
margin-left: 30px;
`
const EstilizaFiltros = styled.div`
display: flex;
gap: 30px;
margin-left: 30px;

`


export class ContratarServico extends Component {

  state = {
    servicos: [],
    listaServicosFiltrada: [],
    inputValorMinimo: 0,
    inputValorMaximo: 1000,
    inputBusca: "",
    sort: "",

  }

  onChangeValorMinimo = (event) => {
    this.setState({
      inputValorMinimo: event.target.value

    })
  }

  onChangeValorMaximo = (event) => {
    this.setState({
      inputValorMaximo: event.target.value

    })
  }

  onChangeBusca = (event) => {
    this.setState({
      inputBusca: event.target.value

    })

  }

  onChangeSelect = (event) => {
    this.setState({
      sort: event.target.value
      
    })
  }

  listaFiltrada = () => {
    return this.state.servicos
      .filter((servico) => servico.price < this.state.inputValorMaximo)
      .filter((servico) => servico.price > this.state.inputValorMinimo)
      .filter((servico) => servico.title.toLowerCase().includes(this.state.inputBusca.toLowerCase()) || servico.description.toLowerCase().includes(this.state.inputBusca.toLowerCase()))
      .sort((a,b)=>this.state.sort === "Menor Preço" ? a.price  -  b.price : b.price - a.price) 
      .sort((a,b)=>this.state.sort === "titulo" &&
      (a.title > b.title ? 1 : b.title > a.title ? -1 : 0)) 
      
    }
    



  componentDidMount() {
    this.mostraServicos();
  }

  mostraServicos = () => {
    let env = this;
    axios
      .get(url, headers)
      .then((response) => {
        env.setState({ servicos: response.data.jobs });
        console.log(env.state.servicos)

      })
      .catch((error) => {
        // console.log(error)
      });
  }


  render() {
    
    const exibeListaFiltrada = this.listaFiltrada()

    const exibirLista = exibeListaFiltrada.map((servico) => {
      return (
        <CardServico key={servico.id} servico={servico} showProduct={this.props.showProduct} changeScene={this.props.changeScene} updateProducts={this.props.updateProducts}/>
      )
    })

    const exibirServicos = this.state.servicos.map((servico) => {
      return (
        <CardServico key={servico.id} servico={servico} />
      )
    })

    return (
      <div>
        <EstilizaTitulo>
        <h1>Escolha um serviço</h1>
        </EstilizaTitulo>

        <EstilizaFiltros>
        <input
          placeholder="Valor Mínimo"
          type="number"
          value={this.state.inputValorMinimo}
          onChange={this.onChangeValorMinimo}
        />
        <input
          placeholder="Valor Máximo"
          type="number"
          value={this.state.inputValorMaximo}
          onChange={this.onChangeValorMaximo}
        />
        <input
          placeholder="Buscar por Serviço"
          value={this.state.inputBusca}
          onChange={this.onChangeBusca}
        />

        <select onChange={this.onChangeSelect}>
          <option text="Ordenar por"> Ordenar Por: </option>
          <option value="titulo"> Título </option>
          <option value="Menor Preço">Menor Preço </option>
          <option value="Maior Preço"> Maior preço </option>
          <option value="Prazo"> Prazo </option>
        </select>
        </EstilizaFiltros>

        <CardsServicos>
          {exibirLista}
        </CardsServicos>


      </div>
    )
  }
}
