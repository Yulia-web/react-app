import React, { useContext, useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { Context } from "../index";
import { Dropdown } from "react-bootstrap";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { observer } from "mobx-react";
import { createGoods, fetchBrand, fetchCategory, fetchType } from "../http/goodsApi";

const CreateGoods = observer(({ show, onHide }) => {
  const { goods } = useContext(Context)
  const [info, setInfo] = useState([])
  const [description, setDescription] = useState([])
  const [color, setColor] = useState([])
  const [gender, setGender] = useState([])

  const [name, setName] = useState('')
  const [quontity, setQuontity] = useState(0)
  const [kod, setKod] = useState('')
  const [file, setFile] = useState(null)
  const [price, setPrice] = useState(0)
  const [discount, setDiscount] = useState(0)

  useEffect(() => {
    fetchType().then(data => goods.setType(data))
    fetchBrand().then(data => goods.setBrand(data))
    fetchCategory().then(data => goods.setCategogies(data))
  }, []);

  const selectFile = e => {
    setFile(e.target.files[0])
  }

  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }])
  }

  const addDescription = () => {
    setDescription([...description, { description: '', img: '', number: Date.now() }])
  }

  const addColor = () => {
    setColor([...color, { name: '', number: Date.now() }])
  }

  const addGender = () => {
    setGender([...gender, { name: '', number: Date.now() }])
  }

  const removeDescription = (number) => {
    setDescription(info.filter(i => i.number !== number))
  }

  const removeColor = (number) => {
    setColor(info.filter(i => i.number !== number))
  }

  const removeGender = (number) => {
    setGender(info.filter(i => i.number !== number))
  }

  const removeInfo = (number) => {
    setInfo(info.filter(i => i.number !== number))
  }

  const cangeInfo = (key, value, number) => {
    setInfo(info.map(i => i.number === number ? { ...i, [key]: value } : i))
  }

  const cangeDescription = (key, value, number) => {
    setDescription(description.map(i => i.number === number ? { ...i, [key]: value } : i))
  }

  const cangeColor = (key, value, number) => {
    setColor(color.map(i => i.number === number ? { ...i, [key]: value } : i))
  }

  const cangeGender = (key, value, number) => {
    setGender(gender.map(i => i.number === number ? { ...i, [key]: value } : i))
  }

  const addGoods = () => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('quontity', `${quontity}`)
    formData.append('kod', kod)
    formData.append('img', file)
    formData.append('price', `${price}`)
    formData.append('discount', `${discount}`)
    formData.append('typeId', goods.selectedType.id)
    formData.append('brandId', goods.selectedBrand.id )
    formData.append('categoryId', goods.selectedCategory.id)
    formData.append('info', JSON.stringify(info))
    formData.append('description', JSON.stringify(description))
    formData.append('gender', JSON.stringify(gender))
    formData.append('color', JSON.stringify(color))
    createGoods(formData).then(data => onHide())
  }

  return (
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
          <Dropdown className="mt-2 mb-2">
            <DropdownToggle>{goods.selectedType.name || 'Виберіть тип'}</DropdownToggle>
            <DropdownMenu>
              {goods.types.map(type =>
                <DropdownItem onClick={() => goods.setSelectedType(type)} key={type.id}>
                  {type.name}
                </DropdownItem>
              )}
            </DropdownMenu>
          </Dropdown>
          <Dropdown className="mt-2 mb-2">
            <DropdownToggle>{goods.selectedBrand.name || 'Виберіть бренд'}</DropdownToggle>
            <DropdownMenu>
              {goods.brands.map(brand =>
                <DropdownItem onClick={() => goods.setSelectedBrand(brand)} key={brand.id}>
                  {brand.name}
                </DropdownItem>
              )}
            </DropdownMenu>
          </Dropdown>
          <Dropdown className="mt-2 mb-2">
            <DropdownToggle>{goods.selectedCategory.name || 'Виберіть категорію'}</DropdownToggle>
            <DropdownMenu>
              {goods.categories.map(category =>
                <DropdownItem onClick={() => goods.setSelectedCategory(category)} key={category.id}>
                  {category.name}
                </DropdownItem>
              )}
            </DropdownMenu>
          </Dropdown>
          <Form.Control
            className="mt-3"
            placeholder="Введіть назву товару"
            value={name} onChange={e => setName(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            placeholder="Введіть кількість наявного товару"
            type="number" value={quontity}
            onChange={e => setQuontity(Number(e.target.value))}
          />
          <Form.Control
            className="mt-3"
            placeholder="Введіть код товару"
            value={kod} onChange={e => setKod(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            placeholder="Введіть ціну товару"
            type="number"
            value={price} onChange={e => setPrice(Number(e.target.value))}
          />
          <Form.Control
            className="mt-3"
            placeholder="Введіть відсоток знижки на товар"
            type="number"
            value={discount} onChange={e => setDiscount(Number(e.target.value))}
          />
          <Form.Control
            className="mt-3"
            placeholder="Виберіть зображення товару"
            type="file" onChange={selectFile}
          />
          <hr />
          <Button variant="outline-dark" onClick={addInfo}>Добавити характеристики товару</Button>
          {info.map(info =>
            <Row className="mt-2" key={info.number}>
              <Col className="md-4">
                <Form.Control
                  value={info.title}
                  onChange={(e) => cangeInfo('title', e.target.value, info.number)}
                  placeholder="Введіть назву характеристики"
                />
              </Col>
              <Col className="md-4">
                <Form.Control
                  value={info.description}
                  onChange={(e) => cangeInfo('description', e.target.value, info.number)}
                  placeholder="Введіть опис характеристики"
                />
              </Col>
              <Col md={4}>
                <Button variant="outline-dark" onClick={() => removeInfo(info.number)}> Видалити </Button>
              </Col>
            </Row>
          )}
          <Button variant="outline-dark" onClick={addDescription}>Добавити опис товару</Button>
          {description.map(description =>
            <Row className="mt-2" key={description.number}>
              <Col className="md-4">
                <Form.Control
                  value={description.description}
                  onChange={(e) => cangeDescription('description', e.target.value, info.number)}
                  placeholder="Введіть опис товару"
                />
              </Col>
              <Col className="md-4">
                <Form.Control
                  value={description.img}
                  onChange={(e) => cangeDescription('img', e.target.value, info.number)}
                  placeholder="Введіть фото" 
                  type="file"
                />
              </Col>
              <Col md={4}>
                <Button variant="outline-dark" onClick={() => removeDescription(description.number)}> Видалити </Button>
              </Col>
            </Row>
          )}
          <Button variant="outline-dark" onClick={addColor}>Добавити колір товару</Button>
          {color.map(color =>
            <Row className="mt-2" key={color.number}>
              <Col className="md-4">
                <Form.Control
                  value={color.name}
                  onChange={(e) => cangeColor('name', e.target.value, color.number)}
                  placeholder="Введіть колір"
                />
              </Col>
              <Col md={4}>
                <Button variant="outline-dark" onClick={() => removeColor(color.number)}> Видалити </Button>
              </Col>
            </Row>
          )}
          <Button variant="outline-dark" onClick={addGender}>Добавити стать для товару</Button>
          {gender.map(gender =>
            <Row className="mt-2" key={gender.number}>
              <Col className="md-4">
                <Form.Control
                  value={gender.name}
                  onChange={(e) => cangeGender('name', e.target.value, gender.number)}
                  placeholder="Введіть стать"
                />
              </Col>
              <Col md={4}>
                <Button variant="outline-dark" onClick={() => removeGender(color.gender)}> Видалити </Button>
              </Col>
            </Row>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрити</Button>
        <Button variant="outline-success" onClick={addGoods}>Добавити</Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateGoods