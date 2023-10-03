import React, { useContext, useState } from "react";
import { Context } from "../index";
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, BASKET_ROUTE, HOME_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";

import Logo from "../img/logo.png";
import Login from "../img/icons/user.svg";

import Facebook from "../img/social_media/facebook.svg";
import Instagra from "../img/social_media/instagram.svg";
import Youtube from "../img/social_media/youtube.svg";

import Compration from "../img/icons/сomparison.svg";
import Cart from "../img/icons/cart.svg";
import Favorite from "../img/icons/favorite.svg";
import menu from '../img/icons/menu.svg'
import search from '../img/icons/search-mobile.svg'
import arrowLeft from '../img/icons/leftArrowSimple.svg'
import close from '../img/icons/close.svg'
import close_pink from '../img/icons/close-pink.svg'
import { observer } from "mobx-react";

import { useTranslation } from 'react-i18next';
import CategoryMenu from "../blocks/CategoryMenu";

const lngs = {
  uk: { nativeName: 'Укр' },
  en: { nativeName: 'Анг' }
};

const NavBar = observer(() => {
  let types = [
    { id: 1, img: 'carriage.svg', name: 'Дитячі коляски' },
    { id: 2, img: 'room.svg', name: 'Дитяча кімната' },
    { id: 3, img: 'chair.svg', name: 'Стільці і шезлонги' },
    { id: 4, img: 'feeding.svg', name: 'Для годування' },
    { id: 5, img: 'soap.svg', name: 'Гігієна і догляд' },
    { id: 6, img: 'autochair.svg', name: 'Автокрісла' },
    { id: 7, img: 'car.svg', name: 'Дитячий транспорт' },
    { id: 8, img: 'toy.svg', name: 'Іграшки' },
    { id: 9, img: 'clothes.svg', name: 'Одяг' },
    { id: 10, img: 'new.svg', name: 'Новий товар' },
  ]

  let element = document.getElementsByClassName("header")[0];

  const returnToPrevious = (name) => {
    if (window.innerWidth <= 1440) {
      element.className = '';
      element.classList.add(name);
      element.classList.add('header');
    }
  }

  const closeMenu = () => {
    if (window.innerWidth <= 1440) {
      element.className = '';
      element.classList.add('header');
    }
  }

  const activateMenu = (name) => {
    if (window.innerWidth <= 1440) {
      element.classList.add('menu-active');
    }
  }

  const activateCatalogMenu = (name) => {
    if (window.innerWidth <= 1440) {
      element.classList.remove('menu-active');
      element.classList.toggle('catalog-active');
    }
  }

  const activateCategoryMenu = (name) => {
    if (window.innerWidth <= 1440) {
      element.classList.remove('catalog-active');
      element.classList.toggle('category-active');
    }
  }

  const { user } = useContext(Context);
  const { goods } = useContext(Context);

  const { t, i18n } = useTranslation();

  let basket_item_count = Object.keys(goods.basket).length;

  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
  }

  return (
    // menu-active catalog-active category-active
    <header className="header">
      <div className="header-wrapper">
        <div className="header-menu">
          <div className="menu-burger" onClick={activateMenu}>
            <img src={menu} />
          </div>
          <NavLink to={HOME_ROUTE} className="logo">
            <img src={Logo} alt="logo" />
          </NavLink>
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
                <div key={lng} className={i18n.resolvedLanguage === lng ? 'language-switcher__language active' : 'language-switcher__language'} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                  {t(lngs[lng].nativeName)}
                </div>
              ))}
            </div>
            <div className="log-in">
              <img src={Login} alt="" className="log-in__img" />
              {user.isAuth ? <div className="log-in__text" onClick={() => logOut()}>{t('Вийти')}</div> : <NavLink to={LOGIN_ROUTE} className="log-in__text">{t('Увійти')}</NavLink>}
            </div>
          </div>
        </div>
        <div className="header-navigation clothed">
          {/*clothed*/}
          <div className="catalog">
            <div className="close" onClick={closeMenu}>
              <img src={close} />
            </div>
            <div className="catalog-navigation" onClick={activateCatalogMenu}>
              <div className="catalog-burger">
                <span></span>
              </div>
              <h2 className="title">{t('КАТАЛОГ')}</h2>
            </div>
            <div className="catalog-menu">
              <div className="close" onClick={closeMenu}>
                <img src={close_pink} />
              </div>
              <div className="mobile-menu-link" onClick={() => returnToPrevious('menu-active')}>
                <img src={arrowLeft} />
                <span>Меню</span>
              </div>
              <ul className="catalog-menu">
                {types.map(type =>
                  <li className="catalog-menu__item" key={type.id} onClick={activateCategoryMenu}>
                    <NavLink to={SHOP_ROUTE} className="catalog-menu__link">
                      <img src={'./images/category-icons/' + type.img} width='20px' height='20px' />
                      <div className="text">{t(type.name)}</div>
                    </NavLink>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <CategoryMenu returnToPrevious={returnToPrevious} closeMenu={closeMenu} />
          <div className="search-block">
            <form className="search-form">
              <input type="text" placeholder="Я шукаю..." aria-label="Пошук" value="" className="search-form-field"></input>
              <img className="search" src={search} />
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
            <NavLink to={BASKET_ROUTE} className="cart-link">
              <img src={Cart} className="cart-icon" alt="cart icon" />
              <span className="counter cart">{basket_item_count}</span>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
})

export default NavBar;