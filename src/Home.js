import React from 'react';
import { Model } from './Model';
import * as Scroll from 'react-scroll';

import tesla from './assets/modelY.jfif'
import m3 from './assets/m3.jfif'
import ms from './assets/ms.jfif'
import mx from './assets/mx.jfif'
import solar from './assets/solar.jfif'

var scroller = Scroll.scroller;
var Element  = Scroll.Element;

export const Home = () => {
    return (
        <div>
            <section onClick={() => scroller.scrollTo('model3', {duration: 1000, delay: 200, smooth: true})}>
                <Model models={'Model Y'} image={tesla} />
            </section>
            <Element name="model3" onClick={() => scroller.scrollTo('models', {duration: 1000, delay: 200, smooth: true})}>
                <Model models={'Model 3'} image={m3} />
            </Element>
            <Element name="models" onClick={() => scroller.scrollTo('modelx', {duration: 1000, delay: 200, smooth: true})}>
                <Model models={'Model S'} image={ms} />
            </Element>
            <Element name="modelx" onClick={() => scroller.scrollTo('power', {duration: 1000, delay: 200, smooth: true})}>
                <Model models={'Model X'} image={mx} />
            </Element>
            <Element name="power">
                <Model models={'Systèmes d\'énergie solaire et Powerwalls'} image={solar} />
            </Element>
        </div>
    )
};
