import { getProductsData } from "../../util/FunctionProducts.js";
import React, { useEffect, useState } from "react";
import { sendToKitchen } from "../../util/FunctionOrder.js";
import { useNavigate } from "react-router";

export const ProductItem = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [products, setProducts] = useState([]);
  const [productsSelected, setProductsSelected] = useState([]);
  const [totalSum, setTotalSum] = useState(0);
  const [indexesProductsSelected, setIndexesProductsSelected] = useState([]);

  const [clientName, setClientName] = useState("");
  const [tableNum, setTableNum] = useState("");
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();

  //Función añadir al carrito de compras
  const addToCart = (id) => {
    const filteredProduct = filteredData.filter((item) => item.id === id);
    const filteredProductValidation = productsSelected.filter(
      (item) => item.id === id
    );
    // console.log(filteredProductValidation)
    setIndexesProductsSelected([...indexesProductsSelected, id]);
    if (filteredProductValidation.length > 0) {
      return;
    }
    filteredProduct[0].counter = 1;
    setTotalSum(totalSum + filteredProduct[0].price);
    setProductsSelected([...productsSelected, ...filteredProduct]);
  };


  useEffect(() => {
    const getBreakfastProducts = () => {
      getProductsData()
        .then((response) => {
          setFilteredData(response);
          setProducts(response);
        })
        .catch((error) => console.log(error));
    };

    getBreakfastProducts();
  }, []);

  //función contador

  const handlePlusCounter = (index) => {
    const newTicketProducts = [...productsSelected];
    newTicketProducts[index].counter++;
    setTotalSum(totalSum + newTicketProducts[index].price);
    setProductsSelected(newTicketProducts);
  };

  const handleMinusCounter = (index) => {
    const newTicketProducts = [...productsSelected];
    if (newTicketProducts[index].counter >= 1) {
      newTicketProducts[index].counter--;
      setTotalSum(totalSum - newTicketProducts[index].price);
    } else {
      newTicketProducts[index].counter = 0;
    }
    setProductsSelected(newTicketProducts);
  };

  //función Eliminar

  const removeToCart = (id) => {
    const removeProduct = productsSelected.filter((item) => item.id !== id);
    const removeProductPrice = productsSelected.find((item) => item.id === id);
    setTotalSum(
      totalSum - removeProductPrice.counter * removeProductPrice.price
    );
    setProductsSelected([...removeProduct]);
  };

  //funcion boton enviar a cocina




  return (
    <>
      {/* filtro por tipo de item (desayuno/cena) */}
      <section id="menu">
        <div className="buttonsType">
          <button
            className="buttonMeal"
            id="btnBreakfast"
            onClick={(e) => {
              let breakfastProducts = products.filter(
                (product) => product.type === "Breakfast"
              );
              setFilteredData(breakfastProducts);
            }}
          >
            Desayuno
          </button>
          <button
            className="buttonMeal"
            id="btnMenu"
            onClick={(e) => {
              let dinnerProducts = products.filter(
                (product) => product.type === "Dinner"
              );
              setFilteredData(dinnerProducts);
            }}
          >
            {" "}
            Almuerzo/Cena
          </button>
        </div>

        <section className="mealContainer">
          <div className="productContainer" >
            {filteredData.map((item) => {
              return (
                <div className="productCard" key={item.id} onClick= { () => addToCart (item.id)}>
                  <img className="productImg cardP" src={item.image} />
                  <div className="textCard">
                    <span className="productName cardP">{item.name}</span>
                    <br />
                    <span className="productprice carP"> S/{item.price}</span>
                    {/* <button
                      disabled={indexesProductsSelected.includes(item.id)}
                      onClick={() => addToCart(item.id)}
                    >
                      Agregar
                    </button> */}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </section>

      {/* // Ticket */}

      <section id="section-ticket">
        <h3> PEDIDOS </h3>
        <section>
          <div className="customerInformation">
            <div>
              <h3>Información de Pedido</h3>
              <label> Cliente: </label>
              <input
                type="text"
                placeholder="Nombre de cliente"
                id="clientName"
                name="clientName"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
              ></input>
              <label>N de mesa</label>
              <select
                className="tableNum"
                name="tableNum"
                onChange={(e) => setTableNum(e.target.value)}
              >

                <option value="null"> -- </option>
                <option value="1"> 1 </option>
                <option value="2"> 2 </option>
                <option value="3"> 3 </option>
                <option value="4"> 4 </option>

              </select>
              {/* Nombre de mesero: <input/> */}
            </div>
          </div>
          <section className="cartContainer">
            <div className="ordersTitle">
              <span id="itemTitle" className="column1">
                Items
              </span>
              <span id="itemTitle" className="column2">
                Cantidad
              </span>
              <span id="itemTitle" className="column3">
                Precio
              </span>
            </div>
            {/* Nombre de item */}
            <section className="orderProductContainer">
              {productsSelected.map((item, index) => {
                return (
                  <div className="orderProduct" key={index}>
                    <div className="order column1">
                      <p>{item.name}</p>
                    </div>
                    {/* Cantidad de Item */}

                    <div className="order column2">
                      <button
                        className="quantity"
                        onClick={() => handleMinusCounter(index)}
                      >
                        -
                      </button>
                      <span className="quantity">{item.counter}</span>
                      <button
                        className="quantity"
                        onClick={() => handlePlusCounter(index)}
                      >
                        +
                      </button>
                    </div>

                    {/* Precio  */}
                    <div className="order column3">
                      <span>{item.price * item.counter}</span>
                      <div id="trashCan">
                        <span onClick={() => removeToCart(item.id)}>
                          <i className="fa-solid fa-trash-can"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </section>
            <div className="orderTotal">
              <div>
                <span> TOTAL</span>
                <span className="orderTotal"> {totalSum} </span>
              </div>
            </div>
          </section>
          <button
            id="sendOrderButton"
            onClick={(e) => {
              e.preventDefault();
              const orderToKitchen = {
                userId: userId,
                client: clientName,
                tableNum: tableNum,
                dateEntry: new Date().toISOString(),
                status: 'pending',
                products: productsSelected.map((x) => ({
                  productId: x.id,
                  name:x.name,
                  qty: x.counter,
                })),
              };
              console.log(orderToKitchen);
              sendToKitchen(orderToKitchen)
                .then((response) => {
                  // alert("Enviado a cocina");
                  localStorage.setItem("accessToken", response);
                  navigate("/orders");
                })
                .catch((error) => console.log(error));
            }}
          >
            Mandar a cocina
          </button>
        </section>
      </section>
    </>
  );
};
