import React, { Component } from 'react'
import { CadastroPrestador } from './CadastroPrestador'
import { DetalheServico } from './DetalheServico'
import { Home } from './Home'

export class AppContainer extends Component {
  
  
  render() {
    return (
      <div>
        <p>Pronto para começar!</p>
        {/* <CadastroPrestador /> */}
        <DetalheServico />
        <Home />
      </div>
    )
  }
}
