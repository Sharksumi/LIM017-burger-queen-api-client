import React from "react";
import { ProductItem } from "./Shop/ProductItem";
import { useNavigate } from "react-router-dom";
import { NavBar } from './NavBar';

const Menu = () => {
  const navigate = useNavigate("");

  return (
    <>
    <header id="loginHeader">
      <NavBar/>      
    </header>
    <main data-testid= "menu" id="menuContainer">
          <ProductItem/>
    </main>

  </>
);
};

export default Menu;
