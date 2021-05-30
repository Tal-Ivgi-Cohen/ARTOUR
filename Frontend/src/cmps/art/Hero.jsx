//const Slide = require('./Slide');
import React from 'react'
import { Slide, AutoRotatingCarousel } from 'material-auto-rotating-carousel'
const { Button } = require('@material-ui/core');


export class Hero extends React.Component {

    state={
        open:false
    }


    render() {
    return (
        <div style={{ position: 'relative', width: '100%', height: 500 }}>
            <Button onClick={() => this.setState({ open: true })}>Open carousel</Button>
            <AutoRotatingCarousel
                label='Get started'
                open={this.state.open}
                onClose={() => this.setState({ open: false })}
                onStart={() => this.setState({ open: false })}
                style={{ position: 'absolute' }}
            >
                <Slide
                    media={<img src='https://cdn.pixabay.com/photo/2017/07/03/20/17/abstract-2468874__340.jpg' />}
                /*title='This is a very cool feature'
                subtitle='Just using this will blow your mind.'*/
                />
                <Slide
                    media={<img src='https://cdn.pixabay.com/photo/2019/04/26/17/47/color-4158152__340.jpg' />}
                /* title='Ever wanted to be popular?'
                 subtitle='Well just mix two colors and your are good to go!'*/
                />
                <Slide
                    media={<img src='https://cdn.pixabay.com/photo/2018/02/06/22/43/painting-3135875__340.jpg' />}
                /*title='May the force be with you'
                subtitle='The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe.'*/
                />
            </AutoRotatingCarousel>
        </div>
    )
    }
}