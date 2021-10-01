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

  function getTasks(){
    return [...tasks]
  }

  return {  
    setUserData,
    getUserData,
    setTasks,
    getTasks
  }
})();

export default STORE;