import React from 'react'
import { NavLink } from 'react-router-dom'


export class Header extends React.Component {

    render() {
        return (
            <header className="app-header">
                <h2>Artour Marketplace</h2>
                <nav>
                    <NavLink to="/" className="nav-link">Home</NavLink> |
                    <NavLink to="/art" className="nav-link">Explore</NavLink> |
                    <NavLink to="/about" className="nav-link">About</NavLink>
                </nav>
            </header>
        )
    }
}

