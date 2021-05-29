import React from 'react'
import { ArtApp } from './ArtApp.jsx'
import { Hero } from '../cmps/Hero.jsx'


export class Home extends React.Component {

    render() {
        return (
            <section>
                <div className="home-section">
                   {/* <Hero />*/}
                   <img src="https://choosekeswick.org/wp-content/uploads/2021/01/david_09-2-1024x681.jpg" />
                </div>
                <ArtApp />
            </section>


        )
    }
}