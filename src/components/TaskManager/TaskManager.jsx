import React, {useState} from "react";
import './style.css';

const TaskManager = () => {

  const [task, settask] = useState("");

  const AddTask = (event) => {
    settask(event.target.value);
    console.log(task);
  }
  
    return(
      <div className = "container">
        <div class="input-group ">
          <span class="input-group-text" id="basic-addon1">Nueva Tarea</span>
          <input type="text" value={task} onChange={AddTask} class="form-control" placeholder="Descripcion" aria-label="Username" aria-describedby="basic-addon1"></input>
          <button type="button" class="btn btn-outline-primary" id = "TM-add">Agregar</button>
        </div>
      </div>
    );
}

export default TaskManager;
