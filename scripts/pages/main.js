
import Task from "../components/tasks.js";
import STORE from "../store.js";

const Main = (()=>{
  let tasks;
  function generateTasks(){
    const tasks = STORE.getTasks()
    return tasks.map((task) => new Task(task));
  }

  return {
    render:function(){
      tasks = generateTasks();

      return `<header class="header center">
      <img src="./assets/icons/doable.svg" alt="doable" />
      <img class="logout" src="./assets/icons/logout.svg" alt="logout" />
    </header>
    <main class="main-list">
      <section class="section">
        <div class="manage text-sm f-medium">
          <div class="sort">
            <p>Sort</p>
            <select name="" id="">
              <option value="">Alphabetic (a-z)</option>
              <option value="">Due-date</option>
              <option value="">Importance</option>
            </select>
          </div>
          <div class="show">
            <p>Show</p>
            <input id="pending" type="checkbox" />
            <label for="pending">Only pending</label>
            <input id="important" type="checkbox" />
            <label for="important">Only important</label>
          </div>
        </div>
        <div class="task-list">
          ${tasks.join("")}
        </div>
      </section>
      <form class="form">
        <div class="form-field">
          <input type="text" name="email" placeholder="do the dishes..." />
        </div>
        <div class="form-field">
          <input type="date" name="date" />
        </div>
  
        <button class="text-base" type="submit">Add Task</button>
      </form>
    </main>
      `
    },    
    initListeners:()=>{
      tasks.forEach((task) => task.initListeners());
    }
  }
})();

export default Main;