const STORE = (function(){
  let userData = {};
  let tasks = [];
  function setUserData(data){
    userData = data;
  }

  function getUserData(){
    return {...userData}
  }

  function setTasks(listoftasks){
    tasks = listoftasks;
  }

  function getTask(id){
    return tasks.find((task) => task.id === id)
  }

  function getTasks(){
    return [...tasks]
  }

  return {  
    setUserData,
    getUserData,
    setTasks,
    getTasks,
    getTask
  }
})();

export default STORE;