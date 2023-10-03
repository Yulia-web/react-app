import React from 'react';

import { Link } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';

import img from '../img/category/bath.png';
import mines from '../img/icons/mines.svg';
import plus from '../img/icons/plus.png';

const Basket = () => {
  return (
    <div className="cart-page cart">
      <div className='cart-content'>
        <div className='goods-block'>
          <div className='cart-header'>
            <h2 className='title'>Кошик</h2>
            <span className='sale'>Переглянуті товари</span>
          </div>
          <table>
            <thead>
              <tr>
                <th>Товар</th>
                <th>Кількість</th>
                <th>Сума</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  <img src={img} alt='img' />
                </th>
                <th>
                  <div className='title'>Коляска 2в1 Anex M/Type Dune mt-01Q</div>
                </th>
                <th>
                  <div className='counter-block'>
                    <div>
                      <img src={mines} />
                    </div>
                    <div className='counter'>1</div>
                    <div>
                      <img src={plus} />
                    </div>
                  </div>
                </th>
                <th>
                  <div className='discount-price'>
                    <span>6000</span>грн
                  </div>
                </th>
              </tr>
              <tr>
                <th>
                  <img src={img} alt='img' />
                </th>
                <th>
                  <div className='title'>Коляска 2в1 Anex M/Type Dune mt-01Q</div>
                </th>
                <th>
                  <div className='counter-block'>
                    <div>
                      <img src={mines} />
                    </div>
                    <div className='counter'>1</div>
                    <div>
                      <img src={plus} />
                    </div>
                  </div>
                </th>
                <th>
                  <div className='discount-price'>
                    <span>6000</span>грн
                  </div>
                </th>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='summ-box'>
          <div className='info'>
            <div className='title'>Сума:</div>
            <div className='summ'><span>6000</span>грн</div>
          </div>
          <div className='pink-button'>Оформити замовлення</div>
          <Link to={SHOP_ROUTE} className='white-button'>Продовжити покупки</Link>
        </div>
      </div>

    </div>
  );
};

export default Basket;