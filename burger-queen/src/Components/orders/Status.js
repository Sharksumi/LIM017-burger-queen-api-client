import React, { useEffect, useState } from "react";
import  { getOrders }  from "../../util/getProducts"
import  { updateOrderStatus } from "../../util/sendOrder"

export const OrderStatus = () => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const showOrders = () => {
      getOrders()
        .then((response) => {
          setOrders(response);
        })
        .catch((error) => console.log(error));
    };
    showOrders();
  }, []);

  // display button per status
  
  const displayNextStatusButton = (currentStatus, orderId) => {
    console.log('test')
    switch (currentStatus){
      case 'pending':
        return (<button onClick={() => setOrderStatus('al siguiente estado',orderId)}> Pendiente</button>)
      case 'delivering':
        return (<button> Preparando</button>)
      case 'delivered':
        return (<button> Listo </button>)
  }}

  const setOrderStatus = (newStatus, orderId) => {
    //aqui va el patch axios :D
    console.log(orderId);
    console.log(newStatus)
    const patchRequest = {
      id: orderId,
      status: newStatus,
    }
    console.log(patchRequest)
    updateOrderStatus(patchRequest)
  }
 if(orders.length === 0){
  return null;
 }
return(
<>
<main>
        <h2> Aqui van las ordenes </h2>
        <div className="btnOrderFilter">
          <button className="buttonTypeOrder">Todo</button>
          <button className="buttonTypeOrder"> Pending </button>
          <button className="buttonTypeOrder"> Listos </button>
          <button className="buttonTypeOrder"> Entregados</button>
        </div>
        <section id="orders">
          <div className ="orderContainer">
            {orders.map((item) => {
              return (
                <div className="cardOrder" key={item.id}>
                  <p id="orderId">Orden N°: 00{item.id} </p>
                  <p id="waiterId"> Mesero: {item.userId}</p>
                  <p id="orderClient">Cliente: {item.client}</p>
                  <p id="orderTime">{item.dateEntry}</p>
                  <p>Mesa: {item.tableNum}</p>
                  <div id="orderProducts">
                      <table>
                        <thead>
                          <tr>
                            <td>PRODUCTOS</td>
                            <td>CANTIDAD</td>
                          </tr>
                        </thead>
                        <tbody>
                        {item.products.map((prod)=>{
                          return (
                            <tr key={prod.id}>
                              <td>{prod.name}</td>
                              <td>{prod.qty}</td>
                            </tr>
                          )}
                        )}
                        </tbody>
                      </table>
                  </div>
                  <p id="status">Status: {item.status}</p>
                  {/* <button className="btnState"> Preparando </button> */}
                  {displayNextStatusButton(item.status, item.id)}
                </div>
              );
            })}
          </div>
        </section>
      </main>
</>
)
}