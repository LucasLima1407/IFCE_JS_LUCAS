import React, {Component} from "react";
import './Main.css';
import { FaPlus, FaEdit, FaWindowClose  } from 'react-icons/fa'

class Main extends Component{
  state = {
    novaTarefa: '',
    tarefas: [
      'Fazer Café',
      'Tomar Água',
      'Estudar'
    ]
  }
  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    })
  }
  render(){
    const { novaTarefa, tarefas } = this.state;

  return(
    <div className="main">
      <h1>Lista de Tarefas</h1>

      <form className="form" action="#">
        <input onChange={this.handleChange} type={"text"} />
        <button type="submit"><FaPlus /></button>
      </form>
      <ul className="tarefas">
      {tarefas.map(tarefa => (
        <li key={tarefa}>{tarefa}
          <div>
            <FaEdit className="edit"/>
            <FaWindowClose className="delete"/>
          </div>
        </li>
      ))}
      </ul>
    </div>
  )
  }
}
export default Main
