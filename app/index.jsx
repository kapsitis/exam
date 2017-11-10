import React from 'react';
import ReactDOM from 'react-dom';
import BasicExample from './BasicExample.jsx';
import Carousel1 from './carousel1.jsx'
import Carousel2 from './carousel2.jsx'
import CarouselNT2EXAM2 from './carouselNT2EXAM2.jsx'
import Examlist from './examlist.jsx'
import Login from './login.jsx'

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

if (document.getElementById('examlist') != null) {
    ReactDOM.render(<Examlist />, document.getElementById('examlist'));
}

if (document.getElementById('login') != null) {
    ReactDOM.render(<Login />, document.getElementById('login'));
}
