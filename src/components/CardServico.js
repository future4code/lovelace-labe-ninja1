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
    state = {
        product: {
            id: Math.random(),
            name: 'card 1'
        }
    }
    
            
    render() {
        console.log(this.props)
        return (

            <MainContainer>
                {/* <h3> {this.props.servico.title} </h3> */}
                <p>R$: 
                {this.props.servico.price}
                </p>
                <p>
                {this.props.servico.dueDate}
                </p>
               
                <button>Ver detalhes</button>
                <button onClick={() => this.props.updateProducts(this.state.product)}>Adicionar ao carrinho</button>
               
            </MainContainer>

        );
    }
}