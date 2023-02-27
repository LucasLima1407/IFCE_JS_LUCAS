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
  handleSubmit = (e) => {
    e.preventDefault()
    const { tarefas } = this.state
    let { novaTarefa } = this.state
    novaTarefa = novaTarefa.trim()
    if(tarefas.indexOf(novaTarefa) !== -1) return

    const novasTarefas = [... tarefas]

    this.setState({
      tarefas: [... novasTarefas, novaTarefa]
    })
  }
  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas, index   } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();
    if(tarefas.indexOf(novaTarefa) !== -1) return;

    const novasTarefas = [...tarefas];

    if(index === -1){
      this.setState({
        tarefas: [... novasTarefas, novaTarefa],
        novaTarefa: ''
      })
    }else{
      const novasTarefas = [...tarefas]
      novasTarefas[index] = novaTarefa

      this.setState({
        tarefas:[...novasTarefas],
        index: -1
      })
    }
  }
  handleEdit = (e, index) =>{
    const { tarefas } = this.state
    this.setState({
      index,
      novaTarefa: tarefas[index]
    })
  }
  handleDelete = (e, index) =>{
    const { tarefas } = this.state
    const novasTarefas = [...tarefas]
    novasTarefas.splice(index, 1)

    this.setState({
      tarefas: [...novasTarefas]
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
      {tarefas.map((tarefa, index) => (
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
