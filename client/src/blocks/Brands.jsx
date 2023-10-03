import React from 'react'


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import rightArrow from "../img/icons/rightArrow.png";

function NextArrow({ onClick }) {
  return (
    <div className="arrow next" onClick={onClick}>
      <img src={rightArrow} alt=''/>
    </div>
  );
}

const settings = {
  dots: false,
  infinite: true,
  speed: 0,
  slidesToShow: 7,
  slidesToScroll: 7,
  nextArrow: <NextArrow />,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }
  ]
};


class Brands  extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            brands: [
                {
                    key: 'playdoh',
                    image: 'playdoh.png'
                },
                {
                    key: 'huggies',
                    image: 'huggies.png'
                },
                {
                    key: 'hipp',
                    image: 'hipp.png'
                },                
                {
                    key: 'pampers',
                    image: 'pampers.png'
                },
                {
                    key: 'anex',
                    image: 'anex.png'
                },
                {
                    key: 'lego',
                    image: 'lego.png'
                },   
                {
                    key: 'belivita',
                    image: 'belivita.png'
                },    
                {
                    key: '1',
                    image: '1.png'
                },    
                {
                    key: '3',
                    image: '3.png'
                },      
                {
                    key: '4',
                    image: '4.png'
                },        
            ]
        }
    }
    render() {
        return (
            <div className='brands-blok'>
                <div className='block-header'>
                    <h2 className='title'>Популярні бренди</h2>
                </div>
                <div className='brands-blok-gallary'>
                    <Slider className='slick-items' {...settings}> 
                        {this.state.brands.map(el => (
                        <img src={"./images/brands/" + el.image} alt={el.key} key={el.key}/>   
                        ))}   
                    </Slider>
                </div>
                <div className='brands-blok-description'>
                    <div className='description'>
                        <p className='text'> Інтернет-магазин дитячих товарів Бу-Бу - зона комфорту малюків
                            і їх батьків. Наш асортимент розроблений в діапазоні "від народження до школи",
                            завдяки чому кожен етап розвитку вашої дитини буде максимально правильним, а головне,
                            цікавим і радісним.
                        </p>
                        <p>
                            Товари для дітей - особлива категорія продукції, тому ми довіряємо тільки перевіреним 
                            виробникам та брендам, які давно і успішно представлені на світовому ринку. Магазин Бу-Бу
                            є дистриб'ютором таких брендів: Anex, X-lander, Leonardo, Bebe Confort, Welldon, Huffy,
                            Fun Time, Lexus Trike, Nino, Maltex, Ceba baby, X-rider, Play WOW, Miniland, Casato, Klups,
                            Radir, Keenway, Adamex, Roan, Tako.
                        </p>
                        <p>
                            На сайті інтернет магазину Бу-Бу ви можете купити товари для дітей абсолютно різних категорій,
                            в залежності від потреб:
                            дитячі коляски, дитяча кімната, стільці і шезлонги, все для годування, гігієна та догляд, автокрісла, 
                            дитячий транспорт, іграшки, дитячий одяг.
                        </p>
                    </div>
 
                    <button className='look-more'>Докладніше</button>
                </div>
            </div>
        )
    }
}

export default Brands;