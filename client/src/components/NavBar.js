import React, { useContext, useState } from "react";
import { Context } from "../index";
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, BASKET_ROUTE, HOME_ROUTE, LOGIN_ROUTE } from "../utils/consts";

import Logo from "../img/logo.png";
import Login from "../img/icons/user.svg";

import Facebook from "../img/social_media/facebook.svg";
import Instagra from "../img/social_media/instagram.svg";
import Youtube from "../img/social_media/youtube.svg";

import Compration from "../img/icons/сomparison.svg";
import Cart from "../img/icons/cart.svg";
import Favorite from "../img/icons/favorite.svg";
import { observer } from "mobx-react";

import { useTranslation } from 'react-i18next';

const lngs = {
  uk: { nativeName: 'UK' },
  en: { nativeName: 'EN' }
};

const NavBar = observer(() => {
  let types = [
    {id: 1, img: 'carriage.svg', name: 'Дитячі коляски'},
    {id: 2, img: 'room.svg', name: 'Дитяча кімната'},
    {id: 3, img: 'chair.svg', name: 'Стільці і шезлонги'},
    {id: 4, img: 'feeding.svg', name: 'Для годування'},
    {id: 5, img: 'soap.svg', name: 'Гігієна і догляд'},
    {id: 6, img: 'autochair.svg', name: 'Автокрісла'},
    {id: 7, img: 'car.svg', name: 'Дитячий транспорт'},
    {id: 8, img: 'toy.svg', name: 'Іграшки'},
    {id: 9, img: 'clothes.svg', name: 'Одяг'},
    {id: 10, img: 'new.svg', name: 'Новий товар'},
  ]

  const { user } = useContext(Context);
  const { goods } = useContext(Context);

  const { t, i18n } = useTranslation();

  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
  }

  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="header-menu">
          <NavLink to={HOME_ROUTE} className="logo">
            <img src={Logo} alt="logo" />
          </NavLink>
          <div className="menu-burger">
            <span></span>
          </div>
          <nav className="menu nav">
            <ul className="menu-items">
              <li className="menu-item">
                <a className="menu-item__link">{t('Про нас')}</a>
              </li>
              <li className="menu-item">
                <a className="menu-item__link">{t('Контакти')}</a>
              </li>
              <li className="menu-item">
                <a className="menu-item__link">{t('Доставка і оплата')}</a>
              </li>
              <li className="menu-item">
                <a className="menu-item__link">{t('Повернення і обмін')}</a>
              </li>
              {/*{user.isAuth ?
                <li className="menu-item">
                  <NavLink to={ADMIN_ROUTE} className="menu-item__link">Адмін панель</NavLink>
                </li>
              : null
              }*/}
            </ul>
          </nav>
          <div className="contacts">
            <div className="contacts-number">(063) 128-46-09</div>
            <div className="social-media">
              <img src={Instagra} />
              <img src={Youtube} />
              <img src={Facebook} />
            </div>
            <div className="language-switcher">
              {Object.keys(lngs).map((lng) => (
                <div className="language-switcher__language" key={lng} style={{ color: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                  {lngs[lng].nativeName}
                </div>
              ))}
            </div>
            <div className="log-in">
              <img src={Login} alt="" className="log-in__img" />
              {user.isAuth ? <div className="log-in__text" onClick={() => logOut()}>{t('Вийти')}</div> : <NavLink to={LOGIN_ROUTE} className="log-in__text">{t('Увійти')}</NavLink>}
            </div>
          </div>
        </div>
        <div className="header-navigation">
          <div className="catalog">
            <div className="catalog-navigation">
              <div className="catalog-burger">
                <span></span>
              </div>
              <h2 className="title">{t('КАТАЛОГ')}</h2>
            </div>
            <div className="catalog-menu">
              <ul className="catalog-menu">
                {types.map(type =>
                  <li className="catalog-menu__item" key={type.id}>
                    <a className="catalog-menu__link">
                      <img src={'./images/category-icons/' + type.img} width='20px' height='20px' />
                      <div className="text">{t(type.name)}</div>
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className="search-block">
            <form className="search-form">
              <input type="text" placeholder="Я шукаю..." aria-label="Пошук" value="" className="search-form-field"></input>
            </form>
          </div>
          <div className="actions">
            <a href="#">
              <img src={Compration} className="compration-icon" alt="compration icon" />
              <span className="counter">0</span>
            </a>
            <a href="#">
              <img src={Favorite} className="liked-icon" alt="liked icon" />
              <span className="counter">0</span>
            </a>
            <NavLink to={BASKET_ROUTE}>
              <img src={Cart} className="cart-icon" alt="cart icon" />
              <span className="counter cart">0</span>
            </NavLink>

          </div>
        </div>
      </div>
    </header>
  );
})

export default NavBar;