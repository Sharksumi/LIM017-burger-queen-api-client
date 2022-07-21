import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { OrderStatus }  from "./orders/Status.js"
import { NavBar } from "./NavBar";


const Orders = () => {
  // const navigate = useNavigate("");
  
  return (
    <>
     <header id="loginHeader">
      <NavBar/>
      </header>
      <main>
        <OrderStatus/>
      </main>
    </>
  );
};

export default Orders;
