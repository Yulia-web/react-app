import React from 'react'

import arrowLeft from '../img/icons/leftArrowSimple.svg'
import close_pink from '../img/icons/close-pink.svg'

const CategoryMenu = (props) => {
  return (
    <div className="category-menu">
                    <div className="close" onClick={props.closeMenu}>
                <img src={close_pink}/>
              </div>
      <div className="mobile-category-link" onClick={() => props.returnToPrevious('catalog-active')}>
        <img src={arrowLeft} />
        <span>Каталог</span>
      </div>
      <div className='category-items'>
        <div className='category-item'>Коляски 2 в 1</div>
        <div className='category-item'>Зимові конверти</div>
        <div className='category-item'>Аксесуари та комплектуючі</div>
        <div className='category-item'>Муфти</div>
      </div>
    </div>
  )
}

export default CategoryMenu
