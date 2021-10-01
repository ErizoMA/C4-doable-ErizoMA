import { apiFetch } from "./api_fetch.js";

export const UserFetcher =(function(){
  return {
    create: (email,password) =>{
      apiFetch(
        "signup",
        "POST",
        {
          "Content-Type": "application/json",
        },
        {email,password}
      )

    },
    delete: () =>{
      "profile",
      "DELETE",
      {
        Authorization: `Token token=${sessionStorage.getItem("token")}`
      }

    }
  }
  
})();