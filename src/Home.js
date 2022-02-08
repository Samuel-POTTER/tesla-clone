import React from 'react';
import { Model } from './Model';
import tesla from './assets/modelY.jfif'
import m3 from './assets/m3.jfif'
import ms from './assets/ms.jfif'
import mx from './assets/mx.jfif'
import solar from './assets/solar.jfif'

export const Home = () => {
    return (
        <div>
            <section>
                <Model models={'Model Y'} image={tesla} />
            </section>
            <section>
                <Model models={'Model 3'} image={m3} />
            </section>
            <section>
                <Model models={'Model S'} image={ms} />
            </section>
            <section>
                <Model models={'Model X'} image={mx} />
            </section>
            <section>
                <Model models={'Systèmes d\'énergie solaire et Powerwalls'} image={solar} />
            </section>
        </div>
    )
};
