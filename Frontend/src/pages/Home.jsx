import React from 'react'
import { ArtApp } from './ArtApp.jsx'
import { Hero } from '../cmps/Hero.jsx'


export class Home extends React.Component {

    render() {
        return (
            <section>
                <div className="home-section">
                   {/* <Hero />*/}
                   <img src="https://cdn.pixabay.com/photo/2019/04/26/17/47/color-4158152__340.jpg" />
                   <img src="https://cdn.pixabay.com/photo/2018/02/06/22/43/painting-3135875__340.jpg"/>
                   <img src="https://cdn.pixabay.com/photo/2017/07/03/20/17/abstract-2468874__340.jpg" />
                </div>
                <ArtApp />
            </section>


        )
    }
}