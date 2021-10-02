import Task from "../components/tasks.js";
import DOMHandler from "../dom_handler.js";
import { SessionsFetcher } from "../services/sessions_fetcher.js";
import { TaskFetcher } from "../services/tasks_fetcher.js";
import STORE from "../store.js";
import Login from "./login.js";

const Main = (() => {
  let tasks;
  function generateTasks() {
    const tasks = STORE.getTasks();
    return tasks.map((task) => new Task(task));
  }

  async function logOut() {
    try {
      await SessionsFetcher.logout();
      DOMHandler.render(Login);
    } catch (e) {
      console.log(e);
    }
  }

  async function createTask(e) {
    if (e.target.closest(".js-form")) {
      e.preventDefault();
      const { title, taskDate } = e.target;
      try {
        const newTask = await TaskFetcher.create(title.value, taskDate.value);
        STORE.createTask(newTask);
        DOMHandler.render(Main)
      } catch (e) {
        console.log(e);
      }
      // const taskData =
      // console.log(taskData)
      // e.preventDefault()
    }
  }

  return {
    render: function () {
      tasks = generateTasks();

      return `<header class="header center">
      <img src="./assets/icons/doable.svg" alt="doable" />
      <img class="logout js-logout" src="./assets/icons/logout.svg" alt="logout" />
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
      <form class="form js-form">
        <div class="form-field">
          <input type="text" name="title" placeholder="do the dishes..." />
        </div>
        <div class="form-field">
          <input type="date" name="taskDate" />
        </div>
  
        <button class="text-base" type="submit">Add Task</button>
      </form>
    </main>
      `;
    },
    initListeners: () => {
      tasks.forEach((task) => task.initListeners());

      const logout = document.querySelector(".js-logout");
      logout.addEventListener("click", logOut);

      const form = document.querySelector(".js-form");
      form.addEventListener("submit", createTask);
    },
  };
})();

export default Main;
