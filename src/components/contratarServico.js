import React, { Component } from 'react'
import axios from "axios";
import styled from 'styled-components';
import { DetalheServico } from './DetalheServico';
import { CardServico } from './CardServico';
import { findByLabelText } from '@testing-library/react';

const url = "https://labeninjas.herokuapp.com/jobs"

const headers = {
  headers: {
    Authorization: "6a92c60e-5cc8-4cdd-b60a-7e55a0798b10"
  }
};

const CardsServicos = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr; 
`



export class ContratarServico extends Component {

  state = {
    servicos: []
  }

  componentDidMount() {
    this.mostraServicos();
  }

  mostraServicos = () => {
    axios
      .get(url, headers)
      .then((response) => {
        this.setState({ servicos: response.data.jobs });
        console.log(response.data.jobs)

      })
      .catch((error) => {
        console.log(error.response.data.message)
      });
  }


  render() {


    const exibirServicos = this.state.servicos.map((servico) => {
      return (
        <CardServico key={servico.id} servico={servico} />
        
      )

    })

    // const exibirServicos = this.state.servicos.map((servico) => {
    //   return (
    //     <DetalheServico servico={servico} />
    //   )
    // })



    return (
      <div>

        <h1>Escolha um serviço</h1>

        <input
          placeholder="Valor Mínimo"
        />
        <input
          placeholder="Valor Máximo"
        />
        <input
          placeholder="Buscar por Serviço"
        />

        <select>
          <option text="Ordenar por"> Ordenar Por: </option>
          <option text="Título"> Título </option>
          <option value="Menor Preço">Menor Preço </option>
          <option value="Maior Preço"> Maior preço </option>
          <option value="Prazo"> Prazo </option>
        </select>

        <CardsServicos>
        {exibirServicos}
        </CardsServicos>
        

      </div>
    )
  }
}
