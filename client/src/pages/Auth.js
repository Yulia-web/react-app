import React, { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

import Logo from "../img/logo.png";
import Google from "../img/social_media/google.png"
import Facebook from "../img/social_media/facebook-registration.svg"
import { registration, login } from "../http/userAPI";
import { observer } from "mobx-react";
import { Context } from "../index";

const Auth = observer(() => {
  const {user} = useContext(Context)
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useNavigate();

const click = async() => {
  try {
    let data;
    if (isLogin) {
      data = await login(email, password)
    }
    else {
      data = await registration(name, phone, email, password)
    }
    user.setUser(user)
    user.setIsAuth(true)
    history(HOME_ROUTE)
  } catch(e) {
    alert(e.response.data.message)
  }
}

  return (
    <div className="admission">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="title">
        <h2> {isLogin ? 'Вхід' : 'Реєстрація'} </h2>
      </div>
      {isLogin ?
        <form className="form">
          <input className="email-input" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} type="email"></input>
          <input className="password-input" placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)} type="password"></input>
          <div className="actions">
            <NavLink to={HOME_ROUTE} className="admission-button" onClick={() => click()}>Увійти</NavLink>
            <NavLink to={REGISTRATION_ROUTE} className="another-admission-button">У мене немає акаунта</NavLink>
          </div>
        </form>
        :
        <form className="form">
          <input className="text-input" placeholder="Ім’я" value={name} onChange={e => setName(e.target.value)} type="text"></input>
          <input className="phone-input" placeholder="Телефон " value={phone} onChange={e => setPhone(e.target.value)} type="tel"></input>
          <input className="email-input" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} type="email"></input>
          <input className="password-input" placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)} type="password"></input>
          <div className="actions">
            <NavLink to={HOME_ROUTE} className="admission-button" onClick={() => click()}>Зареєструватись</NavLink>
            <NavLink to={LOGIN_ROUTE} className="another-admission-button">У мене є акаунт</NavLink>
          </div>
        </form>
      }
      <p className="text">Або</p>
      <div className="alternative-admission">
        <div className="title">Увійти за допомогою:</div>
        <div className="actions">
          <a href="#">
            <img src={Google} alt="" className="google"></img>
          </a>
          <a href="#">
            <img src={Facebook} alt="" className="facebook"></img>
          </a>
        </div>
      </div>
    </div>
  );
});

export default Auth;