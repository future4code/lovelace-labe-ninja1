import React, { Component } from 'react'
import { CadastroPrestador } from './CadastroPrestador'
import { DetalheServico } from './DetalheServico'
import { Home } from './Home'

export class AppContainer extends Component {
  
  
  render() {
    return (
      <div>
        <Header />
         <Home />
        <p>Pronto para começar!</p>
        <CadastroPrestador />
        <ContratarServico />
        {/* <DetalheServico /> */}
      </div>
    )
  }
}
