import React from 'react';
import Slider from 'infinite-react-carousel';

// import imgs
import banner1 from '../../assets/img/banner1.jpg'

const SimpleSlider = () => (
  <Slider>
    <div>
      <img src={banner1} alt='imagem ilustrativa' />
    </div>
    <div>
      <img src={banner1} alt='imagem ilustrativa'/>
    </div>

  </Slider>
);

export default SimpleSlider;