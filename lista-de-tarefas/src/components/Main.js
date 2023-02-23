import React, {Component} from "react";
import './Main.css';
import { FaPlus } from 'react-icons/fa'

class Main extends Component{
  state = {
    novaTarefa: '',
  }
  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    })
  }
  render(){
    const { novaTarefa } = this.state;

  return(
    <div className="main">
      <h1>Lista de Tarefas</h1>

      <form className="form" action="#">
        <input onChange={this.handleChange} type={"text"} />
        <button type="submit"><FaPlus /></button>
      </form>
    </div>
  )
  }
}
export default Main
