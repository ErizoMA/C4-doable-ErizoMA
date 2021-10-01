const Main = (()=>{
  return {
    render:()=>`
    <header class="header center">
    <img src="./assets/icons/doable.svg" alt="doable" />
    <img class="logout" src="./assets/icons/logout.svg" alt="logout" />
  </header>
  <main class="main-list">
    <section class="section">
      <div class="manage text-sm f-medium">
        <div class="sort">
          <p>Sort</p>
          <select name="" id="">
            <option value="">A-Z</option>
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
        <div class="task">
          <input id="1" type="checkbox" />
          <label for="1">Help my mom</label>
          <img src="./assets/icons/important.svg" alt="" />
        </div>
        <div class="task">
          <input id="2" type="checkbox" />
          <label for="2">Write LinkedIn</label>
          <img src="./assets/icons/not-important.svg" alt="" />
        </div>
        <div class="task">
          <input id="3" type="checkbox" />
          <label for="3">Do exercise</label>
          <img src="./assets/icons/important.svg" alt="" />
        </div>
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
  }
})();

export default Main;