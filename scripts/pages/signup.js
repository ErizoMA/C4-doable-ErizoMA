import DOMHandler from "../dom_handler.js";
import { UserFetcher } from "../services/users_fetcher.js";
import STORE from "../store.js";
import Login from "./login.js";
import Main from "./main.js";

const Signup = (()=>{
  async function createUser(e){
    e.preventDefault();
    const {email,password} = e.target;
    try{
      const userData = await UserFetcher.create(email.value,password.value)
      STORE.setUserData(userData);
      sessionStorage.setItem("token",userData.token);
      // const allTasks = await TaskFetcher.index();
      // STORE.setTasks(allTasks)
      DOMHandler.render(Main)
    }catch(e){
      console.log(e);
      alert(e);
    }
  }

  function redirectLogin(e){
    DOMHandler.render(Login)
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

      <button class="text-base" type="submit">Create account</button>
      <a href="#" class="js-anchor">Login</a>
    </form>
  </main>
    `,    initListeners:()=>{
      const form = document.querySelector(".js-form");
      form.addEventListener("submit",createUser)

      const anchor = document.querySelector(".js-anchor")
      anchor.addEventListener("click",redirectLogin)
    }
  }
})();

export default Signup;