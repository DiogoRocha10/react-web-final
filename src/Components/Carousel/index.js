import React from 'react';
import Slider from 'infinite-react-carousel';

// import imgs
import banner1 from '../../assets/img/banner1.jpg'
import banner2 from '../../assets/img/banner2.jpg'
import banner3 from '../../assets/img/banner3.jpg'
import banner4 from '../../assets/img/banner4.jpg'


const SimpleSlider = () => (
  <Slider>
    <div>
      <img src={banner1} alt='imagem ilustrativa' />
    </div>
    <div>
      <img src={banner2} alt='imagem ilustrativa'/>
    </div>
    <div>
      <img src={banner3} alt='imagem ilustrativa'/>
    </div>
    <div>
      <img src={banner4} alt='imagem ilustrativa'/>
    </div>

  </Slider>
);

export default SimpleSlider;