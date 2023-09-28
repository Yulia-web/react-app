import React, { useState } from "react";
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { createType } from "../http/goodsApi";

const CreateType = ({show, onHide}) => {
  const [img, setImg] = useState(null)
  const [name, setName] = useState('')

  const selectImg = e => {
    setImg(e.target.files[0])
  }

  const addType = () => {
    const formData = new FormData()
    formData.append('img', img)
    formData.append('name', name)
    createType(formData).then(data => onHide())
  }

  return(
    <Modal
    show={show}
    onHide={onHide}
    size="lg"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Добавити новий товар
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
      <Form.Control
         className="mt-3"
         placeholder="Виберіть зображення товару"
         type="file" onChange={selectImg}
      />        

        <Form.Control placeholder={"Введіть назву типу"} value={name}  onChange={e => setName(e.target.value)}/>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="outline-danger"  onClick={onHide}>Закрити</Button>
      <Button variant="outline-success" onClick={addType}>Добавити</Button>
    </Modal.Footer>
  </Modal>
  );
}

export default CreateType