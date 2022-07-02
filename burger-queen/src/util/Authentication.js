import axios from "axios";
 
const urlAxios = "http://localhost:8081/login";
 
// export const authentication = (email, password) => {
//   return new Promise((resolve, reject) => {
//     axios
//       .post(urlAxios, { email, password })
//       .then((response) => {
//         const { status, data } = response;
//         if (status === 200) {
//           resolve(data);
//         }
//         reject(status);
//       })
//       .catch((error) => {
//         reject(error);
//       }); 
//   });
// };

// const urlAxios = "http://localhost:3001/auth";
// const urlAxios = "http://localhost:8080/login";


export const authentication = (email, password) => {

  return new Promise((resolve, reject) => {
    axios.post(urlAxios, { email, password })
    .then((response) => {
      const  { status  }  = response;
      // console.log(response)

      if (status === 200) {
        const responseUserData = response.data.user;
        localStorage.setItem("userRole",  responseUserData.roles.admin);
        localStorage.setItem("userId", responseUserData.id);
        const  {accessToken }  = response.data;
        resolve(accessToken);
      }else{
        reject(response.data);
      }
    })
    .catch((error) => {
      // console.log(error)
      reject(error);
      // console.log(error)
    })
  });
}

