export class contratarServico extends Component {
  
  
    render() {
      return (
        <div>
        
        <h1>Escolha um serviço</h1>
        
        <input
         placeholder="Valor Mínimo"
        />
        <input
         placeholder="Valor Máximo"
        />
        <input
         placeholder="Buscar por Serviço"
        />

<select>
         <option text="Ordenar por"> Ordenar Por: </option>
            <option text="Título"> Título </option>
            <option value="Menor Preço">Menor Preço </option>
            <option value="Maior Preço"> Maior preço </option>
            <option value="Prazo"> Prazo </option>
        </select>

        
        </div>
      )
    }
  }
  