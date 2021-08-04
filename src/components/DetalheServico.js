import React from 'react';
import axios from "axios";
import styled from 'styled-components';


const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export class DetalheServico extends React.Component {

    render() {
        return (

            <MainContainer>
                <h3> {this.props.servico.title} </h3>
                <p>Aqui vai o preço:
                {/* {this.props...} */}
                </p>
                <p>Aqui vai o prazo:
                {/* {this.props...} */}
                </p>
                <p>Aqui vai a descrição:
                {/* {this.props...} */}
                </p>
                <p>Aqui vai a forma de pagamento:
                {/* {this.props...} */}
                </p>

                <button>Voltar para a lista</button>
               
            </MainContainer>

        );
    }
}


// export default App;




