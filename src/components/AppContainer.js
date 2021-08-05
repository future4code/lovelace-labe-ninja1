import React, { Component } from 'react'
import { CadastroPrestador } from './CadastroPrestador'
import { DetalheServico } from './DetalheServico'
import { Home } from "./Home"
import Header from "./Header"
import { ContratarServico } from './ContratarServico'
import { Carrinho } from './Carrinho'
export class AppContainer extends Component {
  state = {
    products: []
  }

  updateProducts = (product) => {
    let newProducts = this.state.products;
    newProducts.push(product)
    this.setState({products: newProducts})
  }

  verDetalhes = (det) => {
    let info = this.state.informacoes;
  }  
  render() {
    return (
      <div>
        <Header />
        <div> 
          {this.state.products.map((product) => (
            <Carrinho product={product}/>
          ))}
        </div>
     
         <Home />
       
        <p>Pronto para começar!</p>
        <CadastroPrestador />
        <ContratarServico updateProducts={this.updateProducts}/>
         <DetalheServico />
      </div>
    )
  }
}
