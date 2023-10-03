import React from "react";
import PopularCategory from '../blocks/PopularCategory'
import Brands from '../blocks/Brands'
import Baner from '../components/Baner'
import ReviewedBlock from '../blocks/ReviewedBlock'
import DiscountGoods from "../blocks/DiscountGoods";

const Home = () => {
  return(
    <div className="home-page">
      <Baner/>
       <DiscountGoods title="Акція!"/>
      <PopularCategory/>
      <Brands/>
      <ReviewedBlock title="Ви переглядали"/>
    </div>
  );
};

export default Home;