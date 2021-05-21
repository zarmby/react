import React from "react";
import './style.css'

class TaskManager extends React.Component {
  render(){
    return(
      <div className = "container">
        <div class="input-group ">
          <span class="input-group-text" id="basic-addon1">Nueva Tarea</span>
          <input type="text" class="form-control" placeholder="Descripcion" aria-label="Username" aria-describedby="basic-addon1"></input>
          <button type="button" class="btn btn-outline-primary" id = "TM-add">Agregar</button>
        </div>
      </div>
    );
  }
}

export default TaskManager;
