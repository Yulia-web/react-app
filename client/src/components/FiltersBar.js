import React, { useContext } from 'react';

import { observer } from "mobx-react";
import { Context } from '..';

const FiltersBar = observer(() => {
  const { goods } = useContext(Context);

  return (
    <div className="filter-list-wrapper">
      <div className="filters">
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
      <div className="filters">
        <input type="text" id="price-slider" class="price-slider"></input>
      </div>
      <div className="filters">
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
  );
});

export default FiltersBar