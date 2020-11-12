import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    // TODO: update the active nav classes on certain pages
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-smokey">
            <span className="navbar-brand border-bottom ml-5 mr-auto">
                Jacob Cowan
            </span>
            <button className="navbar-toggler mr-5" type="button" data-toggle="collapse" data-target="#navlinks" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse flex-row-reverse" id="navlinks">
                <ul className="navbar-nav ml-auto mr-5 text-right">
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/portfolio" className="nav-link">Portfolio</Link>
                    </li>
                    <li className="nav-item active border-bottom">
                        <Link to="/" className="nav-link">About <span className="sr-only">(current)</span></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
