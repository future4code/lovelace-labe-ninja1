import { render } from '@testing-library/react'
import React from 'react'
import Home from './components/Home';
import { ContratarServico } from './components/ContratarServico';
import { CadastroPrestador } from './components/CadastroPrestador';
import Header from './components/Header';
import { Carrinho } from './components/Carrinho';
import { DetalheServico } from './components/DetalheServico';
import {ThemeProvider } from '@material-ui/core/styles'
import { theme } from "./components/theme"
import styled from 'styled-components';

const MainContainer = styled.div`
background-color: rgb(53, 54, 58);
`


export default class App extends React.Component {
	state = {
		telaAtual: "home",
		products: [],
		selectProduct: undefined
	};

	updateProducts = (product) => {
		let newProducts = this.state.products;
		newProducts.push(product)
		this.setState({products: newProducts})
	}

	removeProducts = (product) => {
		let newProducts = this.state.products;
		newProducts.filter((item) => item.id !== product.id)
		this.setState({products: newProducts})
	}

	changeScene = (scene) => {
		this.setState({
			telaAtual: scene
		})
	}

	showProduct = (product) => {
		this.setState({
			selectProduct: product
		})
	}

	escolheTela = () => {
		switch (this.state.telaAtual) {
			case "cadastro":
				return <CadastroPrestador />;

			case "contratar":
				return <ContratarServico showProduct={this.showProduct} changeScene={this.changeScene} updateProducts={this.updateProducts}/>;

			case "home":
				return <Home irParaCadastroPrestador={this.irParaCadastroPrestador}
				irParaContratarServico={this.irParaContratarServico}
				/>;
			
			case "carrinho":
				return <Carrinho products={this.state.products} />;

			case "detalhe":
				return <DetalheServico servico={this.state.selectProduct} />
			case "lixeira":
				return <Carrinho products={this.state.products} />;

			default:
				return <div>Página não encontrada</div>;
		}
	}

	irParaCadastroPrestador = () => {
		this.setState({ telaAtual: "cadastro" })
	}
	irParaContratarServico = () => {
		this.setState({ telaAtual: "contratar" })
	}

	irParaHome = () => {
		this.setState({ telaAtual: "home"  })
		};

	irParaCarrinho= () => {
		this.setState({ telaAtual: "carrinho" })
		};

	render() {
		return (
			
			<ThemeProvider theme={theme}>
				<MainContainer>
				<Header irParaHome={this.irParaHome} irParaCarrinho={this.irParaCarrinho}/>
				{this.escolheTela()}
				</MainContainer>
			</ThemeProvider>
		)
	}
}

