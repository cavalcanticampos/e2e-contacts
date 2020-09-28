import React, { useEffect, useState } from "react";
import { Card, Header, ImgContainer, Items, ActionUser } from "./styles";
import { FiUser } from "react-icons/fi";
import { MdAdd, MdClose } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { GrEdit } from "react-icons/gr";
import { AddContact } from "../../molecules";
import { BASE_URL } from "../../assets/baseUrl";

const Contacts = (props) => {
  const [users, setUsers] = useState([]);
  const [editThisUser, setEditUser] = useState("");
  const [modalIsOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    setModalOpen(!modalIsOpen);
    setEditUser("");
  };

  const fetchUsers = async () => {
    fetch(BASE_URL + "users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUser = (id) => {
    fetch(BASE_URL + "/user/" + id)
      .then(() => {
        alert("Usuário Deletado com sucesso!");
        window.location.reload();
      })
      .catch(() => {
        alert("Erro ao Deletar usuário. Caso retorne o erro chame um técnico");
      });
  };

  const editUser = (user) => {
    console.log("k -> ", user);
    setEditUser(user);
    setModalOpen(!modalIsOpen);
  };

  return (
    <>
      <AddContact
        editThisUser={editThisUser}
        history={props.history}
        active={modalIsOpen}
      />
      <div style={{ display: "flex" }}>
        <div style={{ diplay: "flex", margin: "auto" }}>
          <Header>
            <h1>Lista de Contatos</h1>
            <div onClick={handleModal}>
              {modalIsOpen ? <MdClose /> : <MdAdd />}
            </div>
          </Header>
          {users !== [] &&
            users.map((user) => (
              <Card key={user.id}>
                <ImgContainer>
                  <FiUser />
                </ImgContainer>
                <Items>
                  <div>{user.name}</div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>{user.gender}</div>
                    <div>{user.phone}</div>
                  </div>
                  <div>{user.email}</div>
                </Items>
                <ActionUser onClick={() => editUser(user)}>
                  <GrEdit />
                </ActionUser>
                <ActionUser onClick={() => deleteUser(user.id)}>
                  <AiOutlineDelete />
                </ActionUser>
              </Card>
            ))}
        </div>
      </div>
    </>
  );
};

export default Contacts;
