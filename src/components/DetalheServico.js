import React from 'react';
import axios from "axios";
import styled from 'styled-components';
import { theme } from './theme';
import {ThemeProvider } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';


const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
-webkit-box-shadow: 7px 7px 15px 1px rgba(0,0,0,0.79); 
box-shadow: 1px 7px 15px 1px rgba(0,0,0,0.79);
margin-top: 20px;
width:400px;
height:250px;
margin-left: 600px;

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

                <ThemeProvider theme={theme}>
                <Button variant="contained" color="primary">Voltar para a lista</Button>
                </ThemeProvider>

            </MainContainer>

        );
    }
}


// export default App;




