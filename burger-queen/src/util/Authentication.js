import axios from "axios";

const urlAxios = "http://localhost:8081/login";

  // const urlAxios = "http://localhost:8080/login";

export const authentication = (email, password) => {

  return new Promise((resolve, reject) => {
    axios.post(urlAxios, { email, password })
    .then((response) => {
      const  { status  }  = response;


      if (status === 200) {
        const responseUserData = response.data.user;
        console.log(responseUserData)

        localStorage.setItem("userRole",  responseUserData.roles.admin);
        localStorage.setItem("userId", responseUserData.id);
        sessionStorage.setItem("userRole",  responseUserData.roles.admin);
        sessionStorage.setItem("userId", responseUserData.id);
        const  {accessToken }  = response.data;
        resolve(accessToken);
      }else{
        reject(response.data);
      }
    })
    .catch((error) => {
      reject(error);
    })
  });
}


