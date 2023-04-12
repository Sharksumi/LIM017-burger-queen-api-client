import React, { useState } from "react";
import { createNewProduct, editProduct } from "../../util/FunctionProducts";
import ReactModal from "react-modal";
import { PrivateRoute } from "../router/RolesRouter";

export const CreateProducts = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImg, setProductImg] = useState("");
  const [productType, setProductType] = useState("");

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <div>
        <button className="btnAddP" onClick={handleOpenModal}>
          <i className="fa-solid fa-plus" />
            Agregar Producto
        </button>

        <ReactModal
          isOpen={showModal}
          contentLabel="Modal Add Products"
          ariaHideApp={false}
          onRequestClose={handleCloseModal}
          className="Modal"
          overlayClassName="Overlay"
        >
          <h3 id="titleProductCreate">Creación de productos</h3>
          <section className="containerCreateProduct">
            <div className="rowInputs" id="nameNewProduct">
              <label
                to="nameProductNew"
                className="titleLabel"
                id="createProductName"
              >
                Nombre de Producto:
              </label>
              <input
                type="text"
                placeholder="Nombre de Producto"
                id="nameProductNew"
                className="inputCreate"
                name="productName"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>
            <div className="rowInputs">
              <label to="productPrice" className="titleLabel">
                Precio:
              </label>
              <input
                type="text"
                placeholder="Precio"
                id="productPrice"
                className="inputCreate"
                name="productPrice"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
              />
              <label to="productImg" className="titleLabel">
                Imagen
              </label>
              <input
                type="text"
                placeholder="URLimagen/jpg"
                id="productImg"
                className="inputCreate"
                name="productImg"
                value={productImg}
                onChange={(e) => setProductImg(e.target.value)}
              />
            </div>
            <div className="rollProductType">
              <label to="productType" className="titleLabelProduct">
                Tipo de producto:
              </label>
              <select
                placeholder="Tipo de producto"
                id="productType"
                name="productType"
                onChange={(e) => setProductType(e.target.value)}
              >
                <option value="null"> -- </option>
                <option value="Breakfast"> Desayuno </option>
                <option value="Dinner"> Alm/Cena </option>
              </select>
            </div>
            <hr></hr>
            <div className="modalBtns">
            <button
              id="buttonCreatProduct"
              className ="btn btn-success"
              onClick={(e) => {
                e.preventDefault();
                const postNewProduct = {
                  name: productName,
                  price: productPrice,
                  image: productImg,
                  type: productType,
                  dataEntry: new Date().toISOString(),
                };
                createNewProduct(postNewProduct)
                  .then((response) => {
                    // alert("Producto creado con éxito");
                    window.location.reload(false);
                  })
                  .catch((error) => console.log(error));
              }}
            >
              Agregar producto
            </button>
            <button
            id= "btnCancelDlt"
            className="btn btn-secondary"
            onClick={handleCloseModal}>Cancelar </button>
            </div>
          </section>
        </ReactModal>
      </div>
    </>
  );
};
