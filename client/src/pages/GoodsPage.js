import React, { useEffect, useState } from "react";

import Star from "../img/icons/star.svg";
import Favourite from '../img/icons/favorite.svg'
import Comparison from '../img/icons/сomparison.svg'

import CommentList from "../components/CommentList";
import {useParams} from 'react-router-dom'
import { fetchOneGoods } from "../http/goodsApi";

const GoodsPage = () => {
  //const[product, setProduct] = useState({info: [], description: [], color: [], gender: []})
  const product = {id: 10, name: 'Москитная сетка Anex Air-Z для коляски', quontity: 4, kod: 'Az-Acm01.1', rating: 0, img: 'https://static.ma.com.ua/images/1000xAUTO/c6270fe16f3dd2ad3c3f433c856edb13.jpg',price: 689, discount: 0, typeId: 1, brandId: 1, categoryId: 1};
  const color = [
    {id: 1, name: ''},
    {id: 2, name: ''},
    {id: 3, name: ''},
  ]

  const gender = [
    {id: 1, name: 'Хлопчик'},
    {id: 2, name: 'Дівчинка'},
  ]

  const info = [
    {id: 1, title: '', description: ''}
  ]

  const description = [
    {id: 1, img: '', description: ''}
  ]
 
  const {id} = useParams()
  //useEffect(() => {
  //  fetchOneGoods(id).then(data => setProduct(data))
  //})
  return (
    <div className="product-page">
        <div>
          <nav class="breadcrumbs">
            <ul class="breadcrumbs__list">
              <li class="breadcrumbs__item"><a href="#" class="breadcrumbs__link">Головна</a></li>
              <li class="breadcrumbs__item"><a href="#" class="breadcrumbs__link">Дитячі коляски</a></li>
            </ul>
          </nav>
          <div className="tovar-card">
            <div className="title">{product.name}</div>
            <div className='actions'>
              <div className='action-item'>
                <img src={Favourite} alt='favorite' />
                <p>У вибране</p>
              </div>

              <div className='action-item'>
                <img src={Comparison} alt='сomparison' />
                <p>Порівняти</p>
              </div>
            </div>
          </div>
          <div className="short-info">
            {!product.quantity >= 1 ? <div className='not-available'>Немає в наявності</div> : <div className="in-stock">В наявності</div>}
            <div className="code">{product.code}</div>
            <div className="rating">
              <span>4.5</span>
              <img src={Star} alt="star" />
            </div>
            <div className="comments">9 відгуків</div>
          </div>
          <div className="product-card">
            <div className="slider-items">
                <img src={product.img} alt="slide" />
            </div>
            <div className="product-card--info">
              <div className="product-color">
                <div className="product-color--header">Колір:</div>
                <div className="product-color-checkboxes">
                  {color.map(color =>
                    <input type="radio" key={color.id} className={color.name} name="scales" />
                  )}
                </div>
              </div>
              <div className="product-gender">
                <div className="product-gender--header">Стать:</div>
                <div className="product-color-checkboxes">
                  {gender.map(gender =>
                    <div key={gender.id}>
                      <input type="radio" />
                      <label>{gender.name}</label>
                  </div>
                  )}
                </div>
              </div>
              <div className="buy">
                <button className="buy-now pink">КУПИТИ</button>
                <button className="buy-in-one-click white">Купити в 1 клік</button>
              </div>
              <div className="location-info">
                <div className="title">Ви з Одеси? Заберіть товар у магазині</div>
                <div className="addres">Одеса, вул. Михайлівська, 8(10:00-19:00 щодня)</div>
                <a href="#">Забрати сьогодні</a>
              </div>
              <div className="additional-information">
                <a href="#" >Оплата і доставка</a>
                <a href="#" >Повернення і обмін</a>
                <a href="#" >Контакти</a>
              </div>
            </div>
          </div>
          <div className="description-block">
            <div className="description">
              <div className="description-header">Опис</div>
              <div className="description-content">
                {description.map(description =>
                <div className="content-info" key={description.id}>
                  <div>{description.description}</div>
                  <img src={description.img}/>
                </div>
                )}
              </div>
              <button>Докладніше</button>
            </div>
            <div className="characteristics">
              <div className="characteristics-header">Характеристики</div>
              <div className="characteristics-list">
                {info.map(info =>
                  <div className="list-item">
                    <div className="key">{info.title}</div>
                    <div className="value">{info.description}</div>
                </div>
               )}
              </div>
            </div>
          </div>
          <div className="comments-block">
            <div className="comments-block--header">
              <div className="raiting">
                <div className="comments-count">Відгуки (9)</div>
                <div className="raiting-count">Рейтинг:
                  <span>
                    4.5
                    <img src={Star} alt="start" />
                  </span>
                </div>
              </div>
              <button className="pink">+ Написати відгук</button>
            </div>
            {/*<div className="comment-items">
              <CommentList />
            </div>*/}
            <button className="look-more">Показати більше</button>
          </div>
        </div>
    </div>
  );
}

export default GoodsPage;