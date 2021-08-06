import React from 'react';
import axios from "axios";
import styled from 'styled-components';


const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
-webkit-box-shadow: 7px 7px 15px 1px rgba(0,0,0,0.79); 
box-shadow: 7px 7px 15px 1px rgba(0,0,0,0.79);
margin-top: 20px;
`


export class CardServico extends React.Component {
    setProductDetails = () => {
        this.props.changeScene('detalhe');
        this.props.showProduct(this.props.servico)
    }
    
            
    render() {
        console.log(this.props)
        return (

            <MainContainer>
                <h3> {this.props.servico.title} </h3>
                <p>R$: 
                {this.props.servico.price}
                </p>
                <p>
                {this.props.servico.description}
                </p>
               
               
                <button onClick={this.setProductDetails}>Ver detalhes</button>
                <button onClick={() => this.props.updateProducts(this.props.servico)}>Adicionar ao carrinho</button>
               
            </MainContainer>

        );
    }
}