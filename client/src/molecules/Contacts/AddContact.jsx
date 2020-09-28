import React, { useState } from "react";
import { Button, Input, Dropdown } from "../../atoms";
import { Modal, Container, Label, Header } from "./styles";
import { genderValues } from "../../assets/genderValues";
import { BASE_URL } from "../../assets/baseUrl";

const AddContact = (props) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const saveClick = () => {
    if (name && phone && email && gender) {
      const data = {
        name: name,
        gender: gender,
        phone: phone,
        email: email,
      };
      fetch(BASE_URL + "user", {
        method: "POST",
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          alert("Usuário adicionado com sucesso");
          window.location.reload();
        })
        .catch((error) => console.error(error));
    } else {
      alert("Preencha corretamente os dados");
    }
  };

  const editClick = () => {
    if (name && phone && email && gender) {
      const data = {
        name: name,
        gender: gender,
        phone: phone,
        email: email,
      };
      fetch(BASE_URL + "user/" + props.editThisUser.id, {
        method: "PUT",
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then(() => {
          alert("Usuário editado com sucesso");
          window.location.reload();
        })
        .catch((error) => console.error(error));
    } else {
      alert("Preencha corretamente os dados");
    }
  };

  const handleGenderClick = (id) => {
    gender === id ? setGender(null) : setGender(id);
  };

  return (
    <Modal isOpen={props.active}>
      <Header>
        <h2 style={{ display: "flex", margin: "32px auto" }}>
          {props.editThisUser
            ? "Editar " + props.editThisUser.name
            : "Adicionar Usuário"}
        </h2>
      </Header>
      <Container>
        <Label>Nome:</Label>
        <Input
          onChange={(event) => setName(event.target.value)}
          placeholder="Nome Completo"
        />
      </Container>
      <Container>
        <Label>Sexo:</Label>
        <Dropdown
          onClick={(event) => handleGenderClick(event.target.id)}
          selectedItem={gender}
          placeholder="Escolha"
          data={genderValues}
        />
      </Container>
      <Container>
        <Label>Telefone:</Label>
        <Input
          onChange={(event) => setPhone(event.target.value)}
          mask="(99)99999-9999"
          placeholder="(99)99999-9999"
        />
      </Container>
      <Container>
        <Label>E-mail:</Label>
        <Input
          onChange={(event) => setEmail(event.target.value)}
          placeholder="email@provedor.com"
        />
      </Container>
      <Container>
        {props.editThisUser ? (
          <Button onClick={editClick}>Salvar</Button>
        ) : (
          <Button onClick={saveClick}>Salvar</Button>
        )}
      </Container>
    </Modal>
  );
};

export default AddContact;
