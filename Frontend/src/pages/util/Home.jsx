import React from 'react'
import { ArtApp } from '../art/ArtApp.jsx'
import { Hero } from '../../cmps/art/Hero.jsx'


export class Home extends React.Component {

    render() {
        return (
            <section>
                <div className="home-section">
                    <Hero/>
                </div>
               <ArtApp />
                <div className="btn">
                </div>
                </section>
        )
    }
}
