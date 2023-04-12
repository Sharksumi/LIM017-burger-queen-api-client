import axios, { AxiosError } from "axios";
import {sendToKitchen, updateOrderStatus} from "../../util/FunctionOrder"

jest.mock('axios');

const productOrder = [
    {
      client: "JOEL",
      dateEntry: "2022-07-13T22:14:46.857Z",
      id: 9,
      products: [{
                productId: 2,
                name: "Hamburguesa c/ queso",
                qty: 1,
                 }],

      status: "pending",
      tableNum: "3",
      userId: "1"
    }
]

describe('sendToKitchen ',() =>{
    test('should send the products to kitchen ',() =>{
        axios.post.mockResolvedValue({data: productOrder})
          return sendToKitchen()
            .then((res) => {
                expect(res).toStrictEqual(productOrder)
            })
    })
    test('should show error and does not send the products to kitchen ',() =>{
        axios.post.mockRejectedValue(AxiosError)
          return sendToKitchen()
            .catch((err) => {
                expect(err).toStrictEqual(AxiosError)
            })
    })
})

describe('updateOrderStatus ',() =>{
    test('should change order status',() =>{
        axios.patch.mockResolvedValue({ data: productOrder})
          return updateOrderStatus(productOrder)
          .then((res) => {
            expect(res).toStrictEqual(productOrder)
        })
    })
    test('should not change status',() =>{
        axios.patch.mockRejectedValue(AxiosError)
          return updateOrderStatus(productOrder)
            .catch((err) => {
                expect(err).toStrictEqual(AxiosError)
            })
    })
})

// []. axioserror