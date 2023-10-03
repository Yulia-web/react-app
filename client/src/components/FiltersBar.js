import React, { useContext, useState } from 'react';
import ReactSlider from 'react-slider';

import { observer } from "mobx-react";
import { Context } from '..';

import pinkArrow from '../img/icons/pinkCirclArrow.svg';
import close from '../img/icons/close-pink.svg';
import { Breadcrumb } from 'react-bootstrap';

const FiltersBar = observer(() => {
  const { goods } = useContext(Context);

  let [minprice, setMinPrice] = useState(0);
  let [maxprice, setMaxPrice] = useState(0);

  const minPrice = (e) => {
    setMinPrice(e.target.value);
  }

  const maxPrice = (e) => {
    setMaxPrice(e.target.value);
  }

  const activeBaseFilters = () => {
    let title = document.getElementsByClassName('base-filters-title')[0];
    let item = document.getElementsByClassName('base-filters-items')[0];
    title.classList.toggle("active");
    item.classList.toggle("active");
  }

  const activePrice = () => {
    let title = document.getElementsByClassName('filters-price-title')[0];
    let item = document.getElementsByClassName('filters-content')[0];
    title.classList.toggle("active");
    item.classList.toggle("active");
  }

  const activeFilters = () => {
    let button = document.getElementsByClassName('filter-block')[0];
    button.classList.toggle("active");
  }

  return (
    <div className="filter-list-wrapper">
      <nav class="breadcrumbs">
        <ul class="breadcrumbs__list">
          <li class="breadcrumbs__item"><a href="#" class="breadcrumbs__link">Головна</a></li>
        </ul>
      </nav>
      <div className='filter-header'>
        <h2 className='title'>Дитячі коляски</h2>
        <div className='base-filters' onClick={activeBaseFilters}>
          <div className='base-filters-title' >За замовчуванням</div>
          <div className='base-filters-items'>
            <div className='base-filters-item'>По популярності</div>
            <div className='base-filters-item'>Дешевші</div>
            <div className='base-filters-item'>Дорожчі</div>
          </div>
        </div>
      </div>
      <div className='filter-block-mobile'>
        <div className='button-filter' onClick={activeFilters}>Фільтр</div>
        <div className='filter-item'>
          <div className='title'>В наявності</div>
          <img src={close} alt='close' />
        </div>
        <div className='filter-item'>
          <div className='title'>Виробник: Anex</div>
          <img src={close} alt='close' />
        </div>
      </div>
      <div className='filter-block'>
      <div className='close' onClick={activeFilters}>
          <img src={close}/>
        </div>
        <div className="category-filters">
          <div className='filters-title'>Категорія</div>
          <div className='filters-list'>
            <ul>
              {goods.categories.map(category =>
                <li class="filter-list__item" key={category.id} onClick={() => goods.setSelectedCategory(category)}>
                  <div class="text"> {category.name} </div>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="filters">
          <div className='filters-list'>
            <input type="checkbox" />
            <div class="checkbox-text"> В наявності </div>
          </div>
        </div>
        <div className="filters">
          <div className='filters-list'>
            <input type="checkbox" />
            <div class="checkbox-text"> Зі знижкою </div>
          </div>
        </div>
        <div className="filters-price">
          <div class="filters-price-title" onClick={activePrice}>Ціна</div>
          <div className='filters-content'>
            <ReactSlider
            className="horizontal-slider"
            thumbClassName="example-thumb"
            trackClassName="example-track"
            defaultValue={[0, 100]}
            ariaLabel={['Lower thumb', 'Upper thumb']}
            ariaValuetext={state => `Thumb value ${state.valueNow}`}
            renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
            pearling
            minDistance={10}
          />
          <div className='price-range-wrapper'>
            <input type='text' value={minprice} className='price-item' />
            <input type='text' value={maxprice} className='price-item' />
            <img src={pinkArrow} alt='arrow' />
          </div>
        </div>
          </div>
        <div className="filters-producer">
          <div className='filters-title'>Виробник</div>
          <div className='filters-list'>
            <ul>
              {goods.brands.map(brands =>
                <li class="filter-list__item" key={brands.id} onClick={() => goods.setSelectedBrand(brands)}>
                  <input type="checkbox" />
                  <div class="checkbox-text"> {brands.name} </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
});

export default FiltersBar