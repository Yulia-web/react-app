import React, { useContext, useEffect } from 'react'
import { Context } from '../index'
import GoodsItem from '../components/GoodsItem'
import { fetchGoods } from "../http/goodsApi";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import rightArrow from "../img/icons/rightArrow.png";

const DiscountGoods = (props) => {
  const { goods } = useContext(Context)

  let length = Object.keys(goods.goods).length;

  useEffect(() => {
    fetchGoods().then(data => goods.setGoods(data.rows))
  }, []);

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
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  return (
    <div className='goods-block'>
      <h2 className='title'>{props.title} <span>sale</span></h2>
      <div className='goods-items'>
        {length >= 6 ?
          <Slider className='slick-items' {...settings}>
            {goods.goods.map(goods => {
              if (goods.discount) {
                return <GoodsItem key={goods.id} goods={goods} />;
              }
            }
            )}
          </Slider>
          :
          <div>
            {goods.goods.map(goods => {
              if (goods.discount) {
                return <GoodsItem key={goods.id} goods={goods} />;
              }
            }
            )}
          </div>
        }

      </div>
    </div>
  )
}

export default DiscountGoods
