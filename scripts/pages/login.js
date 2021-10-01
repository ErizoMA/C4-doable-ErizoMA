import DOMHandler from "../dom_handler.js";
import { SessionsFetcher } from "../services/sessions_fetcher.js";
import { TaskFetcher } from "../services/tasks_fetcher.js";
import STORE from "../store.js";
import Main from "./main.js";
import Signup from "./signup.js";

const Login = (()=>{
  async function loginUser(e){
    e.preventDefault();
    const {email,password} = e.target;
    console.log(email.value,password.value);
    try{
      const userData = await SessionsFetcher.login(email.value,password.value);
      STORE.setUserData(userData);
      sessionStorage.setItem("token",userData.token);
      const allTasks = await TaskFetcher.index();
      STORE.setTasks(allTasks)
      DOMHandler.render(Main)
    }catch(e){
      console.log(e);
      alert(e);
    }
  }
  function createAccount(e){
    DOMHandler.render(Signup)
  }
  return {
    render:()=>`
  <header class="header center">
    <img src="./assets/icons/doable.svg" alt="doable" />
  </header>
  <main class="main center">
    <form class="form js-form">
      <div class="form-field">
        <label for="">Email</label>
        <input type="text" name="email" placeholder="you@example.com" />
      </div>
      <div class="form-field">
        <label for="">Password</label>
        <input type="password" name="password" placeholder="******" />
      </div>

      <button class="text-base" type="submit">Login</button>
      <a href="#" class="js-anchor">Create account</a>
    </form>
  </main>
    `,
    initListeners:()=>{
      const form =document.querySelector(".js-form")
      form.addEventListener("submit",loginUser)

      const anchor = document.querySelector(".js-anchor")
      anchor.addEventListener("click",createAccount)
    }
  }
})();

export default Login;