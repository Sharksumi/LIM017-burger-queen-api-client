import axios from "axios";
import { config } from "./FunctionProducts";

const urlAxiosUsers= 'http://localhost:8081/users'

export const createNewUsers = (payload) =>{
  return new Promise ((resolve, reject) => {
    axios.post(urlAxiosUsers, payload,  config)
    .then((response) =>{
      resolve(response.data)
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
        })
        .catch((error)=>{
            reject(error)
        })
    })
}

// FUNCION DE PETICION PARA ACTUALIZACION USUARIOS

const urlAxiosUsersUpdate= (uid) => `http://localhost:8081/users/${uid}`

export const updateUser = (payload) => {
  return new Promise ((resolve, reject) =>{
    axios.patch(urlAxiosUsersUpdate(payload.id), payload, config)
      .then((response) => {
        // if (!response.ok) {
        //   throw Error('Error al actualizar usuario');
        // }
        resolve(response.data);
      })
      .catch((error) => {
        reject (error)
      })
  })
};