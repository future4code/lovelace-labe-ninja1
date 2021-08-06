import React from 'react';
import axios from "axios";
import styled from 'styled-components';
import Button from '@material-ui/core/Button';


const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100vw;
height: 100vh;
color: #E53170;
padding: 10px;
`

const Inputs = styled.div`
display: flex;
flex-direction: column;
width: 300px;
// border: 2px solid black;
gap: 15px;
padding: 10px;
input {
    padding: 10px;
    border-radius: 10px;
}


`
const Botao = styled.div`
margin-top: 20px;
`


const url = "https://labeninjas.herokuapp.com/jobs"

const headers = {
    headers: {
        Authorization: "6a92c60e-5cc8-4cdd-b60a-7e55a0798b10"
    }
};


export class CadastroPrestador extends React.Component {

    state = {
        titulo: "",
        descriçao: "",
        preco: "",
        metodosPagamento: [],
        dataPrazo: ""

    }

    onChangeTitulo = (event) => {
        this.setState({
            titulo: event.target.value

        })
    }

    onChangeDescricao = (event) => {
        this.setState({
            descricao: event.target.value

        })
    }

    onChangePreco = (event) => {
        this.setState({
            preco: Number(event.target.value)

        })
    }

    onChangePagamento = (event) => {
        this.setState({
            metodosPagamento: [event.target.value]

        })
    }

    onChangePrazo = (event) => {
        this.setState({
            dataPrazo: event.target.value

        })
    }

    criaServico = () => {
        const body = {

            title: this.state.titulo,
            description: this.state.descricao,
            price: this.state.preco,
            paymentMethods: this.state.metodosPagamento,
            dueDate: this.state.dataPrazo
            }
            

        axios
            .post(url, body, headers)
            .then((response) => {
                alert("Serviço cadastrado!");
                this.setState({ titulo: "", descricao: "", preco: "", metodosPagamento: [], dataPrazo: "" });

            })
            .catch((error) => {
                alert("Opa, algo deu errado!");
                
            });
    }

    render() {
        return (

            <MainContainer>
                <h1>Cadastre seu serviço!</h1>
                <Inputs>
                    <input
                        placeholder="Título do serviço"
                        value={this.state.titulo}
                        onChange={this.onChangeTitulo}
                    />
                    <input
                        placeholder="Descrição do serviço"
                        value={this.state.descricao}
                        onChange={this.onChangeDescricao}
                    />
                    <input
                        placeholder="Preço do serviço" type="number" value=""
                        value={this.state.preco}
                        onChange={this.onChangePreco}
                    />
                    <select
                        value={this.state.metodosPagamento}
                        onChange={this.onChangePagamento}>
                        <option value="forma de pagamento"> Escolha sua forma de pagamento </option>
                        <option value="cartão de crédito"> Cartão de crédito </option>
                        <option value="cartão de débito"> Cartão de débito </option>
                        <option value="paypal"> PayPal </option>
                        <option value="PIX"> PIX </option>
                    </select>

                    <input type="date" 
                    value={this.state.dataPrazo}
                    onChange={this.onChangePrazo}
                    />

                </Inputs>
                <Botao>
                    <Button variant="contained" color="primary" onClick={this.criaServico}>Cadastrar serviço</Button>
                </Botao>

            </MainContainer>

        );
    }
}


// export default CadastroPrestador;