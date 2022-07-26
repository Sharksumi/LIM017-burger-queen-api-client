import React, { useState } from "react";
import { ListUsers } from "./ListUsers";
import { useNavigate } from "react-router";
import logoBurguer from "./../../Assets/logoBurguer.png";
import { createNewUsers } from "../../util/FunctionUsers";
import ReactModal from "react-modal";


export const UserManagement = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rolUser, setRolUser] = useState({});

  const navigate = useNavigate("");

  //Function create User


  const addToNewUser = (e) => {
    e.preventDefault();

    const createNewUser = {
      email: email,
      roles: { admin: rolUser === "true" },
      password: password,
    };
    createNewUsers(createNewUser)
      .then((res) => {
        console.log(res)
        alert('hola')
        window.location.reload(false)
      })
      .catch((error) => console.log(error));
  };

  // Hooks para el modal

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <section id="sectionUserManagement">
      <header id="loginHeader" >
        <nav id="loginNav">
          <img src={logoBurguer} id="logoBurguerNav" alt="logoBurguer" onClick={ () => navigate("/home")} />
          <ul id="optionNav">
            <li onClick={() => navigate("/menu")}>MENÚ</li>
            <li onClick={() => navigate("/orders")}>PEDIDOS</li>
            <li onClick={() => navigate("/products")}>PRODUCTOS</li>
            <li onClick={() => navigate("/userManagement")}>
              GESTIÓN DE USUARIOS
            </li>
          </ul>
        </nav>
      </header>
      <h2 id="titleUserManagement">GESTIÓN DE USUARIOS</h2>
      <button className="btnAddP" onClick={handleOpenModal}>
        <i className="fa-solid fa-plus" />
        AGREGAR USUARIO
      </button>
      <ReactModal
        isOpen={showModal}
        contentLabel="Modal Add Users"
        ariaHideApp={false}
        onRequestClose={handleCloseModal}
        className="Modal"
        overlayClassName="Overlay"
      >

        <h3 id="titleUserCreate">Creación de usuarios</h3>
        <section className="containerCreateUser">
          <div className="rowInputs">
            <label to="emailUser" className="titleLabel">
              Correo Electrónico:
            </label>
            <input
              type="email"
              placeholder="Email de Usuario"
              id="emailUser"
              className="inputCreate"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label to="passwordUser" className="titleLabel">
              Contraseña
            </label>
            <input
              type="password"
              placeholder="Contraseña"
              id="passwordUser"
              className="inputCreate"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="rowRolUser">
            <label to="rolUsers" className="titleLabelUser">
              Administrador:
            </label>
            <select
              type="text"
              placeholder="Rol de Usuario"
              id="rolUsers"
              onChange={(e) => setRolUser(e.target.value)}
            >
              <option value="null"> -- </option>
              <option value="true"> SI </option>
              <option value="false"> NO </option>
            </select>
          </div>
          <hr />
          <div className="modalBtns">
            <button
              id="buttonCreateUser"
              className="btn btn-success"
              onClick={addToNewUser}
            >
              CREAR USUARIO
            </button>
            <button
              id="btnCancelUser"
              className="btn btn-secondary"
              onClick={handleCloseModal}
            >
              Cancelar
            </button>
          </div>
        </section>
      </ReactModal>
      <ListUsers />
    </section>
  );
};
