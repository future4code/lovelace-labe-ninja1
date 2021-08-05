import React, { Component } from 'react'
import { CadastroPrestador } from './CadastroPrestador'
import { DetalheServico } from './DetalheServico'
import { Home } from "./Home"
import Header from "./Header"
import { ContratarServico } from './ContratarServico'

export class Carrinho extends Component {
  
  
  render() {
    return (
      <div>
        <p>ID: {this.props.product.id}</p>
      </div>
    )
  }
}