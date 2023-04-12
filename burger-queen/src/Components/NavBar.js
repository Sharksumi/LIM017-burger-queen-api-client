import React from "react";
import logoBurguer from "./../Assets/logoBurguer.png";
import { useNavigate } from "react-router";

export const NavBar = () => {
  const navigate = useNavigate("");

  return (
    <nav id="loginNav">
      <img
        src={logoBurguer}
        id="logoBurguerNav"
        data-testid="burgerHome"
        alt="logoBurguer"
        onClick={() => navigate("/home")}
      />
      <ul id="optionNav">
        <li data-testid="menu" onClick={() => navigate("/menu")}>MENÚ</li>
        <li data-testid="orders" onClick={() => navigate("/orders")}>PEDIDOS</li>
        <li data-testid="products" onClick={() => navigate("/products")}>PRODUCTOS</li>
        <li data-testid="userManagement" onClick={() => navigate("/userManagement")}>GESTIÓN DE USUARIOS</li>
      </ul>
    </nav>
  );
};
