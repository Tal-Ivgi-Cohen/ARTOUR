import React from 'react'
import { ArtApp } from './ArtApp.jsx'
import { Hero } from '../cmps/Hero.jsx'


export class Home extends React.Component {

    render() {
        return (
            <section>
                <div className="home-section">
                   {/* <Hero />*/}
               {/*    <img src="//cdn.shopify.com/s/files/1/0941/7736/files/FiroozehNeman-Banner02_2048x.jpg?v=1622084011"/>*/}
                   <div className="hero-content">
                       <h2>New works</h2>
                       <h1>TAIR BITAN</h1>
                   </div>
                </div>
                <ArtApp />
            </section>


        )
    }
}
