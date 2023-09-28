import React, { useState } from "react";
import {Button, Container} from "react-bootstrap"
import CreateGoods from "../modals/CreateGoods";
import CreateBrand from "../modals/CreateBrand";
import CreateCategory from "../modals/CreateCategory";
import CreateType from "../modals/CreateType";

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false)
  const [typeVisible, setTypeVisible] = useState(false)
  const [categoryVisible, setCategoryVisible] = useState(false)
  const [goodsVisible, setGoodsVisible] = useState(false)

  return(
    <Container className="d-flex flex-column">
      <Button variable={"outline-dark"} className="mt-4" onClick={() => setTypeVisible(true)}> Добавити тип </Button>
      <Button variable={"outline-dark"} className="mt-4" onClick={() => setBrandVisible(true)}> Добавити бренд </Button>
      <Button variable={"outline-dark"} className="mt-4" onClick={() => setCategoryVisible(true)}> Добавити категорію </Button>
      <Button variable={"outline-dark"} className="mt-4" onClick={() => setGoodsVisible(true)}> Добавити товар </Button>
      <CreateGoods show={goodsVisible} onHide={() => setGoodsVisible(false)}/>
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
      <CreateCategory show={categoryVisible} onHide={() => setCategoryVisible(false)}/>
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
    </Container>
  );
}

export default Admin;