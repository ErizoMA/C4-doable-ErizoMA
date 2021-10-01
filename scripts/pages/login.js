const Login = (()=>{
  return {
    render:()=>`
  <header class="header center">
    <img src="./assets/icons/doable.svg" alt="doable" />
  </header>
  <main class="main center">
    <form class="form">
      <div class="form-field">
        <label for="">Email</label>
        <input type="text" name="email" placeholder="you@example.com" />
      </div>
      <div class="form-field">
        <label for="">Password</label>
        <input type="password" name="password" placeholder="******" />
      </div>

      <button class="text-base" type="submit">Login</button>
      <a href="#" class="">Create account</a>
    </form>
  </main>
    `
  }
})();

export default Login;