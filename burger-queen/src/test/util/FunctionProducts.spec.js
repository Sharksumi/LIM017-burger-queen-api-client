import axios, { AxiosError } from "axios";
import {
  createNewProduct,
  getProductsData,
  editProduct,
  getOrders,
  deleteProduct,
} from "../../util/FunctionProducts.js";

jest.mock("axios");

// const urlApiProducts = "http://localhost:8081/products";

const objProduct = {
  config: {
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1",
    },
  },
  data: [
    {
      id: 1,
      image: "https://i.imgur.com/kqnYsST.jpg",
      name: "Sandwich de jamon y queso",
      price: 10,
      type: "Breakfast",
      dataEntry: "2022-06-21 17:52:10",
    },
  ],
};

const data = [
  {
    id: 1,
    image: "https://i.imgur.com/kqnYsST.jpg",
    name: "Sandwich de jamon y queso",
    price: 10,
    type: "Breakfast",
    dataEntry: "2022-06-21 17:52:10",
  },
];

const product = {
  id: 1,
  image: "https://i.imgur.com/kqnYsST.jpg",
  name: "Sandwich de jamon y queso",
  price: 15,
  type: "Breakfast",
  dataEntry: "2022-06-22 17:52:10",
};

//Función getProducts

describe("getProductsData", () => {
  test("should get products from API ", () => {
    axios.get.mockResolvedValue(objProduct);
    return getProductsData().then((res) => {
      expect(res).toStrictEqual(data);
    });
  });
  test("should not  get products from API ", () => {
    axios.get.mockRejectedValue(AxiosError);
    return getProductsData().catch((err) => {
      expect(err).toBe(AxiosError);
    });
  });
});

// Función getOrders
describe("getOrders", () => {
  test("should get products from menu ", () => {
    axios.get.mockResolvedValue(objProduct);
    return getOrders().then((res) => {
      expect(res).toStrictEqual(data);
    });
  });
  test("should not get product ", () => {
    axios.get.mockRejectedValue(AxiosError);
    return getOrders(product).catch((err) => {
      expect(err).toStrictEqual(AxiosError);
    });
  });
});

//Función Crear productos

describe("createNewProduct", () => {
  test("should Create New products ", () => {
    axios.post.mockResolvedValue(objProduct);
    return createNewProduct().then((res) => {
      expect(res).toStrictEqual(data);
    });
  });
  test("should show error because the product is not created ", () => {
    axios.post.mockRejectedValue(AxiosError);
    return createNewProduct(product).catch((err) => {
      expect(err).toStrictEqual(AxiosError);
    });
  });
});

//Función Editar/actualizar productos

describe("editProduct", () => {
  test("should edit and update products ", () => {
    const objProductId = {
      id: 1,
      image: "https://i.imgur.com/kqnYsST.jpg",
      name: "Sandwich de jamon y queso",
      price: 10,
      type: "Breakfast",
      dataEntry: "2022-06-21 17:52:10",
    };

    axios.patch.mockResolvedValue({ data: objProductId });
    return editProduct(objProductId).then((res) => {
      expect(res).toStrictEqual(objProductId);
    });
  });
  test("should show error when the product is edited ", () => {
    axios.patch.mockRejectedValue(product);
    return editProduct(product).catch((err) => {
      expect(err).toStrictEqual(product);
    });
  });
});

//Función delete
describe("deleteProduct", () => {
  test("should delete products ", () => {
    axios.delete.mockResolvedValue([]);
    return deleteProduct(data).then((res) => {
      expect(res).toStrictEqual([]);
    });
  });
  test("should show error when the product is deleted ", () => {
    axios.delete.mockRejectedValue([]);
    return deleteProduct(data).catch((res) => {
      expect(res).toStrictEqual([]);
    });
  });
});

// productId => `http://localhost:8081/products/${productId}`
// http://localhost:8081/products/13

// {name: 'pizza', price: '3', image: '', type: 'Dinner', dataEntry: '2022-07-11T04:17:25.115Z', …}

// {name: 'pollito', price: '15', image: '', type: 'Dinner', dataEntry: '2022-07-11T03:00:53.460Z', …}
// {name: 'pollito', price: '15', image: '', type: 'Dinner', dataEntry: '2022-07-11T03:00:53.460Z', …}
