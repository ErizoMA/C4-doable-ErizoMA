import { apiFetch } from "./api_fetch.js";

export const TaskFetcher = (function(){
  return {
    create:(title,dueDate)=>
      apiFetch(
        "tasks",
        "POST",
        {
          "Content-Type": "application/json",
          Authorization: `Token token=${sessionStorage.getItem("token")}`
        },
        {title,due_date:dueDate}
      )
    ,
    show:(id)=>
      apiFetch(
        `tasks/${id}`,
        "GET",
        {
          Authorization: `Token token=${sessionStorage.getItem("token")}`
        },
      )
    ,
    edit:(id,options)=>
      apiFetch(
        `tasks/${id}`,
        "PATCH",
        { 
          "Content-Type": "application/json",
          Authorization: `Token token=${sessionStorage.getItem("token")}`
        },
        options
        // {title,due_date:dueDate,important,completed}
      )
    ,
    index:()=>
      apiFetch(
        "tasks",
        "GET",
        {
          Authorization: `Token token=${sessionStorage.getItem("token")}`
        },
      )
    ,
    delete:(id)=>
      apiFetch(
        `tasks/${id}`,
        "DELETE",
        {
          Authorization: `Token token=${sessionStorage.getItem("token")}`
        },
      )
    ,

  }
})();