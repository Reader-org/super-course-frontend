import React from 'react';
import {Link } from 'react-router-dom'

class Navbar extends React.Component{
    render(){
        return(
           
            <nav className="navbar navbar-expand-lg navbar-light bg-dark text-white">
                <Link className="navbar-brand text-white" href="/">SuperCourses</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse text-white" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto text-white">
                    <li className="nav-item active text-white">
                        <Link className="nav-link text-white" to="/">Home <span class="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/category">Category</Link>
                    </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
                </nav>
            
        )
    }
}

export default Navbar;