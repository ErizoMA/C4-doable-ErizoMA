import DOMHandler from "./dom_handler.js";
import Login from "./pages/login.js";
import Main from "./pages/main.js";
import { TaskFetcher } from "./services/tasks_fetcher.js";
import STORE from "./store.js";

(async () => {
  if (sessionStorage.getItem("token")) {
    try {
      const allTask = await TaskFetcher.index()
      STORE.setTasks(allTask);
      return DOMHandler.render(Main);
    } catch (e) {
      console.log(e);
      sessionStorage.removeItem("token");
    }
  }
  DOMHandler.render(Login);
})();