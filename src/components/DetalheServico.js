import React from 'react';
import axios from "axios";
import styled from 'styled-components';
import { theme } from './theme';
import {ThemeProvider } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';


const MainContainer = styled.div`

width:400px;
height:100vh;
margin-left: 500px;
padding-bottom: 30px;


`

const EstilizaCard = styled.div`
height: 300px;
background-color: white;
-webkit-box-shadow: 7px 7px 15px 1px rgba(0,0,0,0.79); 
box-shadow: 1px 7px 15px 1px rgba(0,0,0,0.79);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 20px;
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
                <EstilizaCard>
                <h2> <strong> {this.props.servico.title} </strong> </h2>
                <p> R$:
                {this.props.servico.price}
                </p>
                <p>
                {this.props.servico.description}
                </p>
                <p>
                {this.props.servico.paymentMethods}
                </p>

                <ThemeProvider theme={theme}>
                <Button variant="contained" color="primary">Voltar para a lista</Button>
                </ThemeProvider>
                </EstilizaCard>

            </MainContainer>

        );
    }
}


// export default App;




