import logoBurguer from './../Assets/logoBurguer.png'
import React from "react";
import { ProductItem } from './Shop/ProductItem';
import { useNavigate } from "react-router-dom";


const Home = () => {

  const navigate = useNavigate ('')

  return (
    <>
    <header id="loginHeader">
      <nav id="loginNav">
        <img src={logoBurguer} id="logoBurguerNav" alt="logoBurguer" />
        <ul id="optionNav">
        <li onClick={() => navigate('/home')}>Home</li>
          <li onClick={() => navigate('/orders')}>Orders</li>
          <li>Table</li>
        </ul>
      </nav>
    </header>
    <main id="menuContainer">
          <ProductItem/>
    </main>

  </>
);
};

export default Home;
