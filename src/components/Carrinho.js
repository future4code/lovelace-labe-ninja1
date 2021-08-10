import React, { Component } from 'react'
import { CadastroPrestador } from './CadastroPrestador'
import { DetalheServico } from './DetalheServico'
import { Home } from "./Home"
import Header from "./Header"
import { ContratarServico } from './ContratarServico'
import axios from "axios";


 
 
          
              
          

export class Carrinho extends Component {



  
  
  CarrinhoVazio = () => (
    <div>
      Carrinho vazio
    </div>
  )

  CarrinhoConteudo = () => (
    <div>
      {
        this.props.products.map((product) => (
          <div>
            <p>{product.title}</p> 
            <p>{product.price}</p>
          </div>
        ))
      }
    </div>
  )

  renderContent = () => {
    if (this.props.products.length > 0) {
      return this.CarrinhoConteudo()
    } else {
      this.CarrinhoVazio()
    }
  }
  
  render() {
    
    return (
      <div>
       {this.renderContent()}

       <button onClick={() => this.props.removeProducts}> lixeira </button>
      </div>
    )
  }
}