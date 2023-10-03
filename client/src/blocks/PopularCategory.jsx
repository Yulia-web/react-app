import React from 'react'

import Bath from '../img/category/bath.png';
import Bed from '../img/category/bed.png';
import Carriage from '../img/category/carriage.png';
import Pot from '../img/category/pot.png';
import Room from '../img/category/room.png';
import Puzzles from '../img/category/puzzles.png';


export class PopularsCategory extends React.Component {
    render() {
                return (
            <div class="popular-category-block">
                <div className='block-header'>
                    <h2 className='title'>Популярні Категорії</h2>
                </div>
                <div className='popular-category-block--container'>
                    <div className='popular-category-block-items'>
                        <div className='popular-category-block-item big-item green'>
                            <img src={Carriage} alt='img'/>
                            <div className='title'>Коляски 2в1</div>
                        </div>
                        <div className='list'>
                            <div className='popular-category-block-item yellow'>
                                <img src={Room} alt='img'/>
                                <div className='title'>Ліжечка</div>
                            </div>
                            <div className='popular-category-block-item aqua'>
                                <img src={Pot} alt='img'/>
                                <div className='title'>Горщики</div>
                            </div>
                        </div>
                    </div>
                    <div className='popular-category-block-items'>
                        <div className='popular-category-block-item  big-item blue'>
                            <img src={Bed} alt='img'/>
                            <div className='title'>Постільна білизна</div>
                        </div>
                        <div className='list'>
                            <div className='popular-category-block-item red'>
                                <img src={Puzzles} alt='img'/>
                                <div className='title'>Пазли</div>
                            </div>
                            <div className='popular-category-block-item purple'>
                                <img src={Bath} alt='img'/>
                                <div className='title'>Ванночки</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default PopularsCategory;
