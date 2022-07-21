import React from "react";
import { ProductsList } from "./Admin/ProductsList";
import { useNavigate } from "react-router";
import { CreateProducts } from "./Admin/CreateProducts";
import { NavBar } from "./NavBar";



export const Products = () => {
  const navigate = useNavigate("");

  return (
    <>
      
      <section id="sectionProductManagement">
        <header id="loginHeader">
          <NavBar/>
        </header>
        <h2 id="titleProductManagement">GESTIÓN DE PRODUCTOS</h2>
        <section id="sectionProductCreate">
          <CreateProducts />
        </section>
        <section>
          <ProductsList />
        </section>
      </section>
    </>
  );
};
