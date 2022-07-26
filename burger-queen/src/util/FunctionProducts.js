import axios from "axios";

const urlApiProducts = "http://localhost:8081/products";
const urlApiOrders = "http://localhost:8081/orders";

// const urlApiProducts = "http://localhost:8080/products";
// const urlApiOrders = "http://localhost:8080/orders";


export const accessToken = localStorage.getItem("accessToken");


export const config = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
};

export const getProductsData = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(urlApiProducts, config)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getOrders = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(urlApiOrders, config)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

// Creación de productos

export const createNewProduct = (payload) => {
  return new Promise((resolve, reject) =>{
    axios.post(urlApiProducts, payload, config)
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => reject(error))
  })
}

// Borrar productos

//  const urlAxiosProductId = (productId) => `http://localhost:8080/products/${productId}`
const urlAxiosProductId = (productId) => `http://localhost:8081/products/${productId}`


export const deleteProduct = (productId) => {
  return new Promise((resolve, reject) => {
    axios.delete(urlAxiosProductId(productId), config)

      .then((response) => {
        resolve(response)
        // console.log(response)
      })
      .catch((error) => reject(error))
  })
}

export const editProduct = (payload) => {
  return new Promise((resolve, reject) => {
    axios.patch(urlAxiosProductId(payload.id), payload, config)
      .then((response) => {
        // console.log(response)
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}