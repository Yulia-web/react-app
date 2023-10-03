import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Favorite from '../img/icons/favorite-pink.svg'
import Comparison from '../img/icons/сomparison-pink.svg'
import { createBasket } from '../http/basketAPI';
import { Context } from '../index';

import { useTranslation } from 'react-i18next';

const GoodsItemt = ({ goods }) => {
  const history = useNavigate();
  const { user } = useContext(Context)

  const { t, i18n } = useTranslation();

  const handleClick = (id) => {
    history('/goods/' + id);
  };

  let discount = goods.price - ((goods.discount / 100) * goods.price);
  return (
    <div className='goods-item' onClick={() => handleClick(goods.id)}>
      {goods.discount ? <span className='discount'>-{goods.discount}%</span> : null}
      <img src={goods.img} alt='product image' />
      <div className='title'>{goods.name}</div>
      <div className='price'>
        {goods.discount ? <div className='discount-price'><span>{goods.price}</span>грн</div> : <div className='simple-price black'><span>{goods.price}</span>грн</div>}
        {goods.discount ? <div className='standart-price'><span>{discount}</span>грн</div> : null}
      </div>
      <div className='action-block'>
        {goods.quontity === 0 ?
          <div className='not-available'>Немає в наявності</div>
          :
          <div className='action'>
            <button className='buy'>{t('Купити')}</button>
            <a href='#' className='favourite'>
              <img src={Favorite} />
            </a>
            <a href='#' className='comprison'>
              <img src={Comparison} />
            </a>
          </div>
        }
      </div>
    </div>
  )
}

export default GoodsItemt