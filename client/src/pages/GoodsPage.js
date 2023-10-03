import React, { useEffect, useState } from "react";

import Star from "../img/icons/star.svg";
import Favourite from '../img/icons/favorite-pink.svg'
import Comparison from '../img/icons/сomparison-gray.svg'

import CommentList from "../components/CommentList";
import { useParams } from 'react-router-dom'
import { fetchOneGoods } from "../http/goodsApi";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import rightArrow from "../img/icons/rightArrow.png";
import leftArrow from "../img/icons/leftArrow.png";
import ReviewedBlock from "../blocks/ReviewedBlock";

const GoodsPage = () => {
  //const[product, setProduct] = useState({info: [], description: [], color: [], gender: []})
  const product = { id: 10, name: 'Москитная сетка Anex Air-Z для коляски', quontity: 4, kod: 'Az-Acm01.1', rating: 0, img: 'https://static.ma.com.ua/images/1000xAUTO/c6270fe16f3dd2ad3c3f433c856edb13.jpg', price: 689, discount: 20, typeId: 1, brandId: 1, categoryId: 1 };
  const color = [
    { id: 1, name: 'blue' },
    { id: 2, name: 'red' },
    { id: 3, name: 'green' },
  ]

  const gender = [
    { id: 1, name: 'Хлопчик' },
    { id: 2, name: 'Дівчинка' },
  ]

  const info = [
    { id: 1, title: 'Виробник', description: 'Anex' },
    { id: 2, title: 'Країна', description: 'Польща' },
    { id: 3, title: 'Колір', description: 'Сірий' },
    { id: 4, title: 'Стать', description: 'Хлопчик/дівчинка' },
    { id: 5, title: 'Вага', description: '14' },
    { id: 6, title: '14 кг', description: '108.5х60х124.5 см' },
  ]

  const description = [
    { id: 1, img: 'https://static.ma.com.ua/images/1000xAUTO/c6270fe16f3dd2ad3c3f433c856edb13.jpg', description: 'Ключові особливості колекції m/type PRO зосереджені на зручність для батьків і комфорт для дітей. Ця модель дозволяє однаково насолоджуватися прогулянками міськими вуличками і лісовими стежками.' },
    { id: 2, img: 'https://static.ma.com.ua/images/1000xAUTO/c6270fe16f3dd2ad3c3f433c856edb13.jpg', description: 'Легке зняття люльки. Для цього досить і однієї руки. Адже система памяті адаптерів буде утримувати кнопки натиснутими, поки люльку не знімуть.' },
  ]

  const GoodsImages = [
    { id: 1, img: 'https://static.ma.com.ua/images/1000xAUTO/c6270fe16f3dd2ad3c3f433c856edb13.jpg' },
    { id: 2, img: 'https://static.ma.com.ua/images/1000xAUTO/c6270fe16f3dd2ad3c3f433c856edb13.jpg' },
    { id: 3, img: 'https://static.ma.com.ua/images/1000xAUTO/c6270fe16f3dd2ad3c3f433c856edb13.jpg' },
    { id: 4, img: 'https://static.ma.com.ua/images/1000xAUTO/c6270fe16f3dd2ad3c3f433c856edb13.jpg' },
    { id: 5, img: 'https://static.ma.com.ua/images/1000xAUTO/c6270fe16f3dd2ad3c3f433c856edb13.jpg' },
    { id: 6, img: 'https://static.ma.com.ua/images/1000xAUTO/c6270fe16f3dd2ad3c3f433c856edb13.jpg' },
    { id: 7, img: 'https://static.ma.com.ua/images/1000xAUTO/c6270fe16f3dd2ad3c3f433c856edb13.jpg' },
  ]

  const { id } = useParams()
  let discount = product.price - ((product.discount / 100) * product.price);

  function NextArrow({ onClick }) {
    return (
      <div className="arrow next" onClick={onClick}>
        <img src={rightArrow} alt='' />
      </div>
    );
  }

  function PrevArrow({ onClick }) {
    return (
      <div className="arrow prev" onClick={onClick}>
        <img src={leftArrow} alt='' />
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

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
          {!product.quontity >= 1 ? <div className='not-available'>Немає в наявності</div> : <div className="in-stock">В наявності</div>}
          <div className="code">{product.kod}</div>
          <div className="rating">
            <span>4.5</span>
            <img src={Star} alt="star" />
          </div>
          <div className="comments">(9)</div>
        </div>
        <div className="product-card">
          <div className="slider-items">
            <Slider className='slick-items' {...settings}>
              {GoodsImages.map(element =>
                <img src={element.img} alt="slide" />
              )}
            </Slider>
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
                  <div className="checkboxes-item" key={gender.id}>
                    <input type="radio" checked />
                    <label>{gender.name}</label>
                  </div>
                )}
              </div>
            </div>
            <div className='price'>
              {product.discount ? <div className='discount-price'><span>{product.price}</span>грн</div> : <div className='standart-price black'><span>{product.price}</span>грн</div>}
              {product.discount ? <div className='standart-price'><span>{discount}</span>грн</div> : null}
              {product.discount ? <span className='discount'>-{product.discount}%</span> : null}
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
        <ReviewedBlock title='З цим також купують'/>
        <div className="description-block">
          <div className="description">
            <div className="description-header">Опис</div>
            <div className="description-content">
              {description.map(description =>
                <div className="content-info" key={description.id}>
                  <div className="text">{description.description}</div>
                  <img src={description.img} />
                </div>
              )}
              <div className="more-info">Докладніше</div>
            </div>
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
              <div className="pink">+ Написати відгук</div>
            </div>
            <div className="comment-items">
              <CommentList />
            </div>
            <div className="look-more">Показати більше</div>
          </div>
        </div>
        <ReviewedBlock title='Ви переглядали'/>
      </div>
    </div>
  );
}

export default GoodsPage;