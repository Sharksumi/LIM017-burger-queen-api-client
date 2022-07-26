import axios from "axios";
import { config } from "./FunctionProducts";

const urlAxiosUsers= 'http://localhost:8081/users'
// const urlAxiosUsers= 'http://localhost:8080/users'


export const createNewUsers = (payload) =>{
  return new Promise ((resolve, reject) => {
    axios.post(urlAxiosUsers, payload,  config)
    .then((response) =>{
      resolve(response.data)
      // alert('hola')
      // console.log(response.data)
      })
      .catch((error) =>{
        reject(error)
      })
  })
}


export const getUsers = () =>{
    return new Promise ((resolve, reject) =>{
        axios.get(urlAxiosUsers, config)
        .then((res)=>{
            resolve(res.data)
            console.log(res.data)
        })
        .catch((error)=>{
            reject(error)
        })
    })
}

// FUNCION DE PETICION PARA ACTUALIZACION USUARIOS

const urlAxiosUsersId= (uid) => `http://localhost:8081/users/${uid}`
// const urlAxiosUsersId= (uid) => `http://localhost:8080/users/${uid}`


export const updateUser = (payload) => {
  return new Promise ((resolve, reject) =>{
    axios.patch(urlAxiosUsersId(payload.id), payload, config)
      .then((response) => {

          resolve(response.data);
          //  console.log(res.data)
      })
      .catch((error) => {
        reject (error)
      })
  })
};

export const deleteUser = (userId) =>{
  return new Promise ((resolve, reject) => {
    axios.delete(urlAxiosUsersId(userId), config)
      .then((res) =>{
        resolve(res)
        // console.log(res)
      })
      .catch((err) => reject (err))
  })
}