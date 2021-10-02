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
  function createTask(task){
    tasks = [...tasks,task]
  }

  function getOnlyPending(){
    return [...tasks].filter(task=> task.completed===false )
  }

  return {  
    setUserData,
    getUserData,
    setTasks,
    getTasks,
    getTask,
    createTask,
    getOnlyPending
  }
})();

export default STORE;