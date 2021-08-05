import React, { Component } from 'react'
import { CadastroPrestador } from './CadastroPrestador'
import { DetalheServico } from './DetalheServico'
import { Home } from "./Home"
import Header from "./Header"
import { ContratarServico } from './ContratarServico'

export class AppContainer extends Component {
  
  
  render() {
    return (
      <div>
        <Header />
         <Home />
        <p>Pronto para começar!</p>
        <CadastroPrestador />
        {/* <ContratarServico /> */}
        {/* <DetalheServico /> */}
      </div>
    )
  }
}
