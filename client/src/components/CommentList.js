import React, { useEffect, useState } from 'react';
import Star from "../img/icons/star.svg"; 
import grayStar from "../img/icons/grayStar.svg";

function CommentList() {
  const comments = [
    {id: 1, date: '20.09.22', name: 'Олег', rating: 5, body: 'Оказалась, очень удобной для малыша со скрытым копюшоном батискафом, для родителей лёгкой и маневренной. Ещё  немаловажными плюсами являются маленькими габаритами в сложенном состоянии и легко снять весь текстиль для стирки. Из минусов только то что в комплектации нет маскитки, дождивика и чехла на ножки.',img: ['https://static.ma.com.ua/images/1000xAUTO/83009ec9b80a07889eb093a9518f3ea1.jpg', 'https://static.ma.com.ua/images/1000xAUTO/83009ec9b80a07889eb093a9518f3ea1.jpg', 'https://static.ma.com.ua/images/1000xAUTO/83009ec9b80a07889eb093a9518f3ea1.jpg', 'https://static.ma.com.ua/images/1000xAUTO/83009ec9b80a07889eb093a9518f3ea1.jpg']},
    {id: 2, date: '20.09.22', name: 'Олена', rating: 5, body: 'Купили эту модель коляски в июне месяце, когда сыну было 9 месяцев. ю Оказалась, очень удобной для малыша со скрытым копюшоном батискафом, для родителей лёгкой и маневренной. Ещё  немаловажными плюсами являются маленькими габаритами в сложенном состоянии и легко снять весь текстиль для стирки. Из минусов только то что в комплектации нет маскитки, дождивика и чехла на ножки.',img: []},
    {id: 3, date: '20.09.22', name: 'Татяна', rating: 5, body: 'Оказалась, очень удобной для малыша со скрытым копюшоном батискафом, для родителей лёгкой и маневренной.',img: []},
    {id: 4, date: '20.09.22', name: 'Наташа', rating: 4, body: 'Купили эту модель коляски в июне месяце, когда сыну было 9 месяцев. Оказалась, очень удобной для малыша со скрытым копюшоном батискафом, для родителей лёгкой и маневренной.',img: ['https://static.ma.com.ua/images/1000xAUTO/83009ec9b80a07889eb093a9518f3ea1.jpg']},
    {id: 5, date: '20.09.22', name: 'Оля', rating: 5, body: 'Купили эту модель коляски в июне месяце, когда сыну было 9 месяцев. ',img: ['https://static.ma.com.ua/images/1000xAUTO/83009ec9b80a07889eb093a9518f3ea1.jpg', 'https://static.ma.com.ua/images/1000xAUTO/83009ec9b80a07889eb093a9518f3ea1.jpg']},
  ]
  
  return (
    <div>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            <div className="comment-item">
              <p className="date-publication">20.05.2023</p>
              <div className="comment-item-header">
                <div className="title">{comment.name}</div>
                <div className="starts">                  
                  {[...Array(comment.rating)].map((x, i) =>
                     <img src={Star} alt="star" key={i}/>
                  )}
                 {[...Array(5 - comment.rating)].map((x, i) =>
                     <img src={grayStar} alt="star" key={i}/>
                  )}
                </div>
              </div>
              <div className="description">
                  {comment.body}
              </div>
              <div className="gallary-images"> 
                {comment.img.map(item =>
                  <img src={item}/>  
                )}             
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentList