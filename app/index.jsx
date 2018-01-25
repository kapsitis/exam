import React from 'react';
import ReactDOM from 'react-dom';
import BasicExample from './BasicExample.jsx';
import Carousel1 from './carousel1.jsx'
import Carousel2 from './carousel2.jsx'
import CarouselNT2EXAM2 from './carouselNT2EXAM2.jsx'
import Examlist from './examlist.jsx'
import Login from './login.jsx'

import Carousel4 from './carousel4.jsx'
import Carousel5 from './carousel5.jsx'
import Carousel6 from './carousel6.jsx'
import Carousel7 from './carousel7.jsx'
import Carousel7Solutions from './carousel7solutions.jsx'


if (document.getElementById("index")) {
    ReactDOM.render(<BasicExample />, document.getElementById('index'));
}

if (document.getElementById('carousel1') != null) {
    ReactDOM.render(<Carousel1 />, document.getElementById('carousel1'));
}

if (document.getElementById('carousel2') != null) {
    ReactDOM.render(<Carousel2 />, document.getElementById('carousel2'));
}

if (document.getElementById('carouselNT2EXAM2') != null) {
    ReactDOM.render(<CarouselNT2EXAM2 />, document.getElementById('carouselNT2EXAM2'));
}

if (document.getElementById('carousel4') != null) {
    ReactDOM.render(<Carousel4 />, document.getElementById('carousel4'));
}

if (document.getElementById('carousel5') != null) {
    ReactDOM.render(<Carousel5 />, document.getElementById('carousel5'));
}

if (document.getElementById('carousel6') != null) {
    ReactDOM.render(<Carousel6 />, document.getElementById('carousel6'));
}

if (document.getElementById('carousel7') != null) {
    ReactDOM.render(<Carousel7 />, document.getElementById('carousel7'));
}

if (document.getElementById('carousel7Solutions') != null) {
    ReactDOM.render(<Carousel7Solutions />, document.getElementById('carousel7Solutions'));
}



if (document.getElementById('examlist') != null) {
    ReactDOM.render(<Examlist />, document.getElementById('examlist'));
}

if (document.getElementById('login') != null) {
    ReactDOM.render(<Login />, document.getElementById('login'));
}
