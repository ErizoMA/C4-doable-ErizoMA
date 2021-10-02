import DOMHandler from "../dom_handler.js";
import Main from "../pages/main.js";
import { TaskFetcher } from "../services/tasks_fetcher.js";
import STORE from "../store.js";

const Task = function (task) {
  (this.toString = () => {
    return `
    <div class="task">
      <img class="js-completed-${task.id}" src="./assets/icons/${
      task.completed ? "check" : "uncheck"
    }.svg" alt="completed" />
      <label for="${task.id}">${task.title}</label>
      <img data-id="${task.id}" class="js-task-${
      task.id
    }" src="./assets/icons/${
      task.important ? "important" : "not-important"
    }.svg" alt="importance" />
    </div>
    `;
  }),
    (this.initListeners = () => {
      const importance = document.querySelector(`.js-task-${task.id}`);
      importance.addEventListener("click", this.switchImportance);
      const completed = document.querySelector(`.js-completed-${task.id}`);
      completed.addEventListener("click", this.switchCompleted);
    });

  this.switchImportance = async (e) => {
    const bool = !task.important;
    const options = { important: bool };
    const taskToChange = STORE.getTask(task.id);
    taskToChange.important = bool;

    try {
      await TaskFetcher.edit(task.id, options);
      DOMHandler.render(Main);
    } catch (e) {
      console.log(e);
    }
  };

  this.switchCompleted = async (e) => {
    const bool = !task.completed;
    const option = { completed: bool };
    const taskToChange = STORE.getTask(task.id);
    taskToChange.completed = bool;

    try {
      await TaskFetcher.edit(task.id, option);
      DOMHandler.render(Main);
    } catch (e) {
      console.log(e);
    }
  };
};

export default Task;
