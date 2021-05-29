import React from 'react'
import { NavLink } from 'react-router-dom'


export class Header extends React.Component {

    render() {
        return (
            <header className="app-header">
                <h2>Logo</h2>
                <nav>
                    <NavLink to="/">Home</NavLink> |
                    <NavLink to="/art">Explore</NavLink> |
                    <NavLink to="/about">About</NavLink>
                </nav>
            </header>
        )
    }
}

