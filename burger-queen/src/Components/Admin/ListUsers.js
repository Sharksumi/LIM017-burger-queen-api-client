
import React, { useEffect, useState } from "react";
import { deleteUser, getUsers, updateUser } from "../../util/FunctionUsers";
import ReactModal from "react-modal";


export const ListUsers = () => {
  //hooks para traer al usuario creado
  const [createUser, setCreateUser] = useState([]);

  useEffect(() => {
    const showUserList = () => {
      getUsers()
        .then((res) => setCreateUser(res))
        .catch((err) => console.log(err));
    };
    showUserList();
  }, []);

  /* EDITAR  USUARIOS CREADOS */
  //hook que permite mostrar el modal
  const [showModal, setShowModal] = useState(false);
  // hook que permite editar el modal
  const [showEditModal, setShowEditModal] = useState(false);
  //hook que activa el producto
  const [activeUser, setActiveUser] = useState({});

  //hook que captura los valores del usuario creado
  const [editedUserEmail, setEditedUserEmail] = useState("");
  const [editedUserPassword, setEditedUserPassword] = useState("");
  const [editedUserRol, setEditedUserRol] = useState("");

 
  // Función que abre y cierra el modal

  const handleOpenModal = (user) => {
    setActiveUser(user);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Función que muestra el edit modal

  const handleEditOpenModal = (user) => {
    setActiveUser(user);
    setShowEditModal(true);
  };

  const handleEditCloseModal = () => {
    setShowEditModal(false);
  };

  // Función de botón que actualiza la información
  const editUpdate = (e) => {
    e.preventDefault();
    const editRequest = {
      id: activeUser.id,
      email: editedUserEmail,
      password: editedUserPassword,
      roles: { admin: editedUserRol === "true" },
    };
    updateUser(editRequest)
      .then((response) => {
        console.log(response);
        alert(" usuario Editado con éxito");
        window.location.reload(false);
      })
      .catch((error) => console.log(error));
  };
  //Función borrar usuario

  const buttonDeleteUser = () => {
    deleteUser(activeUser.id)
      .then(() => {
        alert("Borrado con exito");
        window.location.reload(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <ReactModal
        isOpen={showEditModal}
        ariaHideApp={false}
        contentLabel="Modal Edit"
        onRequestClose={handleCloseModal}
        className="Modal"
        overlayClassName="OverlayDlt"
      >
        <div className=" divModalEdit rowInputs">
          <label to="emailUserEdit" className="titleLabel">
            Correo Electrónico:
          </label>
          <input
            type="email"
            placeholder={activeUser.email}
            id="emailUserEdit"
            name="editedUserEmail"
            className="inputCreate"
            value={editedUserEmail}
            onChange={(e) => setEditedUserEmail(e.target.value)}
          />
          <label to="passwordUserEdit" className="titleLabel">
            Contraseña
          </label>
          <input
            type="password"
            placeholder={activeUser.password}
            id="passwordUserEdit"
            name="editedUserPassword"
            className="inputCreate"
            value={editedUserPassword}
            onChange={(e) => setEditedUserPassword(e.target.value)}
          />
        </div>
        <div className="rowRolUser">
          <label to="rolUsersEdit" className="titleLabelUser">
            ¿Es admin?:
          </label>
          <select
            type="text"
            placeholder={activeUser.roles?.admin?.toString()}
            id="rolUsersEdit"
            name="editedUserRol"
            value={editedUserRol}
            onChange={(e) => setEditedUserRol(e.target.value)}
          >
            <option value="true"> Sí </option>
            <option value="false"> No </option>
          </select>
        </div>
        <div>
          <button className="btnGoEdit" onClick={editUpdate}>
            EDITAR USUARIO
          </button>
          <button onClick={handleEditCloseModal}>CANCELAR</button>
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
        {activeUser ? (
          <>
            <p className="textModal">
              ¿Estás seguro que quieres eliminar este usuario?
              <b>
                {activeUser.id},{activeUser.email}
              </b>
              ?
            </p>
          </>
        ) : null}
        <div className="btnModalDlt">
          <button
            // id="btnDltDanger"
            className="btn btn-danger"
            onClick={buttonDeleteUser}
          >
            ELIMINAR
          </button>
          <button
            onClick={handleCloseModal}
            // id="btnDltLight"
            className="btn btn-light border border-secondary"
          >
            CANCELAR
          </button>
        </div>
      </ReactModal>

      <section id="sectionTableUsers">
        <table className="table table-warning table-striped table-hover showList">
          <thead>
            <tr>
              <th scope="col">UserID</th>
              <th scope="col">Roles</th>
              <th scope="col">Correo</th>
              {/* <th scope="col">Contraseña</th> */}
              <th scope="col" colSpan="2">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {createUser.map((user) => {
              return (
                <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.roles.admin?.toString()}</td>
                  <td>{user.email}</td>
                  {/* <td>{user.password}</td> */}
                  <td>
                    <i
                      className="fa-solid fa-pen-to-square"
                      onClick={() => handleEditOpenModal(user)}
                    ></i>
                  </td>
                  <td>
                    <i
                      className="fa-regular fa-trash-can"
                      onClick={() => handleOpenModal(user)}
                    ></i>
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
