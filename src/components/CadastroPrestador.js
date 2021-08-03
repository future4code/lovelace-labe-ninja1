import React from 'react';
import axios from "axios";
import styled from 'styled-components';

const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100vw;
`

const Inputs = styled.div`
display: flex;
flex-direction: column;
width: 300px;
// border: 2px solid black;
gap: 15px;
`
const Botao = styled.div`
margin-top: 20px;
`


export class CadastroPrestador extends React.Component {

    render() {
        return (

            <MainContainer>
                <h1>Cadastre seu serviço!</h1>
                <Inputs>
                    <input
                        placeholder="Título do serviço"
                    />
                    <input
                        placeholder="Descrição do serviço"
                    />
                    <input
                        placeholder="Preço do serviço" type="number" value=""  
                    />
                    <select>
         <option value="forma de pagamento"> Escolha sua forma de pagamento </option>
            <option value="cartão de crédito"> Cartão de crédito </option>
            <option value="cartão de débito"> Cartão de débito </option>
            <option value="paypal"> PayPal </option>
            <option value="PIX"> PIX </option>
        </select>
                        
                    <input type="date" />
                </Inputs>
                <Botao>
                    <button>Cadastrar serviço</button>
                </Botao>

            </MainContainer>

        );
    }
}


// export default CadastroPrestador;