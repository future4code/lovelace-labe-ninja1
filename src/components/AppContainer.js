import React, { Component } from 'react'
import { CadastroPrestador } from './CadastroPrestador'
import { DetalheServico } from './DetalheServico'
import { Home } from './Home'
import Header from './Header'
import { ContratarServico } from './contratarServico'

export class AppContainer extends Component {
  
  
  render() {
    return (
      <div>
        <Header />
        <Home />
        {/* <CadastroPrestador/> */}
        {/* <ContratarServico /> */}
        {/* <DetalheServico /> */}
      </div>
    )
  }
}
