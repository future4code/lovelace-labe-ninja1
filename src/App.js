import { render } from '@testing-library/react'
import React from 'react'
import Home from './components/Home';
import { ContratarServico } from './components/ContratarServico';
import { CadastroPrestador } from './components/CadastroPrestador';
import Header from './components/Header';
import { Carrinho } from './components/Carrinho';


export default class App extends React.Component {
	state = {
		telaAtual: "home",
	};

	escolheTela = () => {
		switch (this.state.telaAtual) {
			case "cadastro":
				return <CadastroPrestador />;

			case "contratar":
				return <ContratarServico />;

			case "home":
				return <Home irParaCadastroPrestador={this.irParaCadastroPrestador}
				irParaContratarServico={this.irParaContratarServico}
				/>;
			
			case "carrinho":
				return <Carrinho/>;

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
			<div>
				<Header irParaHome={this.irParaHome} irParaCarrinho={this.irParaCarrinho}/>
				{this.escolheTela()}
			</div>
		)
	}
}

