import React, { useEffect, useState } from "react";
import {
  getProductsData,
  deleteProduct,
  editProduct,
} from "../../util/FunctionProducts.js";
import ReactModal from "react-modal";

export const ProductsList = () => {
  const [showModal, setShowModal] = useState(false);

  const [productsList, setProductsList] = useState([]);
  const [activeProduct, setActiveProduct] = useState({});

  const [editedProductName, setEditedProductName] = useState("");
  const [editedProductPrice, setEditedProductPrice] = useState("");
  const [editedProductImg, setEditedProductImg] = useState("");
  const [editedProductType, setEditedProductType] = useState("");

  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    const showProductsList = () => {
      getProductsData()
        .then((response) => setProductsList(response))
        .catch((error) => console.log(error));
    };
    showProductsList();
  }, []);

  // show modal

  const handleOpenModal = (product) => {
    setActiveProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  // show Edit Modal

  const handleEditOpenModal = (product) => {
    setActiveProduct(product);
    setShowEditModal(true);
  };

  const handleEditCloseModal = () => {
    setShowEditModal(false);
  };

  // edit Product

  return (
    <>
      <ReactModal
        isOpen={showEditModal}
        ariaHideApp={false}
        contentLabel="Edit Modal"
        onRequestClose={handleCloseModal}
        className="Modal"
        overlayClassName="OverlayDlt"
      >
        <h2>Editar producto</h2>
        Editar el producto:
        {activeProduct ? (
          <p>
            {activeProduct.id} {activeProduct.name}
          </p>
        ) : null}
        <div className="divModalEdit">
          <label id="editProductName">Nombre de Producto:</label>
          <input
            type="text"
            placeholder={activeProduct.name}
            name="editedProductName"
            value={editedProductName}
            onChange={(e) => setEditedProductName(e.target.value)}
          />
          <label id="editProductName">Precio de Producto:</label>
          <input
            type="text"
            placeholder={activeProduct.price}
            name="editedProductPrice"
            value={editedProductPrice}
            onChange={(e) => setEditedProductPrice(e.target.value)}
          />
          <label id="editProductName">Imagen de Producto:</label>
          <input
            type="text"
            placeholder={activeProduct.img}
            name="editedProductImg"
            value={editedProductImg}
            onChange={(e) => setEditedProductImg(e.target.value)}
          />
          <label id="editProductName">Tipo de Producto:</label>
          <select
            placeholder={activeProduct.type}
            name="editedProductType"
            value={editedProductType}
            onChange={(e) => setEditedProductType(e.target.value)}
          >
            <option value="null"> -- </option>
            <option value="Breakfast"> Desayuno </option>
            <option value="Dinner"> Alm/Cena </option>
          </select>
        </div>
        <div className="editModalBtns">
          <button
            className="btnGoEdit"
            onClick={(e) => {
              e.preventDefault();
              const editRequest = {
                id: activeProduct.id,
                name: editedProductName,
                price: editedProductPrice,
                image: editedProductImg,
                type: editedProductType,
              };
              editProduct(editRequest)
                .then((response) => {
                  console.log(response);
                  alert(" Producto Editado con éxito");
                  window.location.reload(false);
                })
                .catch((error) => console.log(error));
            }}
          >
            Editar producto
          </button>
          <button onClick={handleEditCloseModal}> Cerrar edicion</button>
        </div>
      </ReactModal>

      <ReactModal
        isOpen={showModal}
        ariaHideApp={false}
        contentLabel="Delete Modal"
        onRequestClose={handleCloseModal}
        className="ModalDlt"
        overlayClassName="OverlayDlt"
      >
        {activeProduct ? (
          <>
            <p className="textModal">
              Estás seguro que quieres borrar el producto
              <b>
                {activeProduct.id},{activeProduct.name}
              </b>
              ?
            </p>
          </>
        ) : null}
        <div className="btnModalDlt">
          <button
            id="btnDltDanger"
            className="btn btn-danger"
            onClick={() =>
              deleteProduct(activeProduct.id)
                .then((resolve) => {
                  alert("Borrado con exito");
                  window.location.reload(false);
                })
                .catch((error) => console.log(error))
            }
          >
            Borrar
          </button>
          <button
            onClick={handleCloseModal}
            id="btnDltLight"
            className="btn btn-light border border-secondary"
          >
            Cancelar
          </button>
        </div>
      </ReactModal>

      <section id="sectionTableProducts">
        <table className="table table-warning table-striped table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">P. ID</th>
              <th scope="col">Nombre de Producto</th>
              <th scope="col">Precio</th>
              <th scope="col">Imagen</th>
              <th scope="col">Tipo</th>
              <th scope="col" colSpan="2">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {productsList.map((product) => {
              return (
                <tr key={product.id}>
                  <th scope="row">{product.id}</th>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.image}</td>
                  <td>{product.type}</td>
                  <td>
                    <button
                      className="btnActions"
                      onClick={() => handleEditOpenModal(product)}
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                  </td>
                  <td id="buttonDelete">
                    <button
                      className="btnActions"
                      onClick={() => handleOpenModal(product)}
                    >
                      <i className="fa-solid fa-trash-can" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
};
