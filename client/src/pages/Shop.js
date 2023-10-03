import React, { useContext, useEffect } from "react";
import FiltersBar from "../components/FiltersBar";
import GoodsList from "../components/GoodsList";
import { observer } from "mobx-react";
import { Context } from "../index"
import { fetchBrand, fetchCategory, fetchGoods, fetchType } from "../http/goodsApi";

const Shop = observer(() => {
  const {goods} = useContext(Context)

  useEffect(() => {
    fetchType().then(data => goods.setType(data))
    fetchBrand().then(data => goods.setBrand(data))
    fetchCategory().then(data => goods.setCategogies(data))
    fetchGoods().then(data => goods.setGoods(data.rows))
  }, []);

  return(
    <div className="shop-page">
      <FiltersBar/>
      <GoodsList/>
    </div>
  );
});

export default Shop;