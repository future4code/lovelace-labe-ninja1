import React from 'react';
import axios from "axios";
import styled from 'styled-components';


const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export class DetalheServico extends React.Component {

    state = {
        informacoes: {
            id: Math.random(),
            name: 'card x'
        }
    }

    render() {
        return (

            <MainContainer>
                <h3> {this.props.servico.title} </h3>
                <p> R$:
                {this.props.servico.price}
                </p>
                <p>
                {this.props.servico.description}
                </p>
                <p>
                {this.props.servico.paymentMethods}
                </p>

                <button>Voltar para a lista</button>
               
            </MainContainer>

        );
    }
}


// export default App;




