
import DOMHandler from "../dom_handler.js"
import Main from "../pages/main.js"
import { TaskFetcher } from "../services/tasks_fetcher.js"
import STORE from "../store.js"

const Task = function(task){
  this.toString = ()=> {
    return `
    <div class="task">
      <input id="${task.id}" type="checkbox" />
      <label for="${task.id}">${task.title}</label>
      <img data-id="${task.id}" class="js-task-${task.id}" src="./assets/icons/${task.important ? "important" : "not-important"}.svg" alt="importance" />
    </div>
    `
  },
  this.initListeners = () =>{
    const importance = document.querySelector(`.js-task-${task.id}`)
    importance.addEventListener("click",this.switchImportance)
  }

  this.switchImportance = async (e) =>{
    const img = e.target.closest(".js-task")
    const bool = !task.important
    const options = {important:bool}
    const taskToChange = STORE.getTask(task.id,options);
    taskToChange.important=bool;
    try{
      await TaskFetcher.edit(task.id,options);
      DOMHandler.render(Main)
    }catch(e){
      console.log(e)
    }
    
  }
}

export default Task;