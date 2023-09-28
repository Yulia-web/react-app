import React, { useContext, useEffect } from 'react'
import { Context } from '../index'
import GoodsItem from '../components/GoodsItem'
import { fetchGoods } from "../http/goodsApi";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import leftArrow from "../img/icons/leftArrow.png";
import rightArrow from "../img/icons/rightArrow.png";

const DiscountGoods = (props) => {
  const { goods } = useContext(Context)

  useEffect(() => {
    fetchGoods().then(data => goods.setGoods(data.rows))
  }, []);

  let count = 0;

  function PrevArrow({ onClick }) {
    return (
      <div className="arrow prev" onClick={onClick}>
        <img src={leftArrow} alt='' />
      </div>
    );
  }

  function NextArrow({ onClick }) {
    return (
      <div className="arrow next" onClick={onClick}>
        <img src={rightArrow} alt='' />
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 0,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <NextArrow />,
  };

  return (
    <div className='goods-block'>
      <h2 className='title'>{props.title} <span>sale</span></h2>
      <div className='goods-items'>
        <Slider className='slick-items' {...settings}>
          {goods.goods.map(goods => {
            if (goods.discount) {
              count++;
              return <GoodsItem key={goods.id} goods={goods} />;
            }
          }
          )}
        </Slider>
      </div>
    </div>
  )
}

export default DiscountGoods
