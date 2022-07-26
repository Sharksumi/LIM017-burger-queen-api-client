import axios from "axios";
import { accessToken } from "./FunctionProducts.js";
import { config } from "./FunctionProducts";


const urlAxiosKitchen = "http://localhost:8081/orders"
const urlAxiosUpdateStatus = (orderId) => `http://localhost:8081/orders/${orderId}`

// const urlAxiosKitchen = "http://localhost:8080/orders"
// const urlAxiosUpdateStatus = (orderId) => `http://localhost:8080/orders/${orderId}`

// const urlAxiosUpdateStatus = (orderId) => `http://localhost:8080/orders/${orderId}`


export const sendToKitchen = (payload) => {
  return new Promise((resolve, reject) => {
    axios.post(urlAxiosKitchen, payload,  config)
    .then((response) =>{
        resolve(response.data)
        console.log
    })
    .catch((error) =>{
      reject(error)
    })
})
}

export const updateOrderStatus = (payload) => {
  return new Promise((resolve, reject) => {
    axios.patch(urlAxiosUpdateStatus(payload.id), payload,  config)
    .then((response) =>{
        resolve(response.data)
        console.log(resolve.data)
    })
    .catch((error) =>{
      reject(error)
    })
})
}