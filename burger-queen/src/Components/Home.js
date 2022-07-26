import React from "react";
import { useNavigate } from "react-router";
import logoBurguer from "./../Assets/logoBurguer.png";
import menu from "./../Assets/iconsHome/newmenu.png";
import orders from "./../Assets/iconsHome/ordenes.png";
import userManagement from "./../Assets/iconsHome/user.png";
import productos from "./../Assets/iconsHome/masproductos.png";

export const Home = () => {
  const navigate = useNavigate("");

  return (
    <section>
      <header>
        <img src={logoBurguer} id="logoBurguer" alt="logoBurguer" />
      </header>
      <main className="containerIconHome">
        <div className="imgHome">
          <img
            src={userManagement}
            id="imgUserManagement"
            alt="Gestión de Usuarios"
            
            onClick={() => navigate("/userManagement")}
          />
          <h3> Usuarios </h3>
        </div>

				<div className="imgHome">
        <img
          src={menu}
          id="imgMenu"
          alt="Menú"
          onClick={() => navigate("/menu")}
        />
	       <h3> Menú </h3>
        </div>

				<div className="imgHome">
        <img
          src={orders}
          id="imgOrders"
          alt="Pedidos"
          onClick={() => navigate("/orders")}
        />
				<h3>Pedidos </h3>
				</div>
        
				<div className="imgHome">
				<img
          src={productos}
          id="imgCreateProducts"
          alt="productos"
          onClick={() => navigate("/products")}
        />
				<h3>Productos</h3>
				</div>
      </main>
    </section>
  );
};
