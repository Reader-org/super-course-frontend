import React from 'react';
import './main.css'
import { Link } from 'react-router-dom';


const FewCategory = ()=>{
    return(
        <div className="category-cards-home">
            <div className="cards-home">
                <h1>
                     <i className="devicon-react-original colored"></i>  React
                     <br/>
                </h1>
                <p>
                         Learn React and shine your career with the hottest framework of the web
                </p>
                <div className="btn btn-danger text-white">
                    <Link to="/category/React"><i className="text-white">Learn React</i></Link>
                </div>
            </div>
            <div className="cards-home">
                <h1>
                     <i className="devicon-android-plain colored"></i>  Android
                </h1>
                <p>
                         Learn Android and Make cool apps and push them to play store
                </p>
                <div className="btn btn-danger text-white">
                    <Link to="/category/android"><i className="text-white">Learn Android</i></Link>
                </div>
            </div>
            <div className="cards-home">
                <h1>
                     <i className="devicon-nodejs-plain colored"></i> Node Js
                </h1>
                <p>
                      Want to learn node js ? Get Started here
                </p>
                <div className="btn btn-danger text-white">
                    <Link to="/category/node"><i className="text-white">Learn Node</i></Link>
                </div>
            </div>
            <div className="cards-home">
                <h1>
                    <i className="devicon-python-plain colored"></i> Python
                </h1>
                <p>
                    Wanna learn Python the hottest language in the world.
                </p>
                <div className="btn btn-danger text-white">
                    <Link to="/category/python"><i className="text-white">Learn Python</i></Link>
                </div>
            </div>
            <div className="cards-home">
                <h1>
                     <i className="devicon-mongodb-plain colored"></i> MongoDB
                </h1>
                <p>
                    Don't know sql no problem master no sql db then. 
                </p>
                <div className="btn btn-danger text-white">
                    <Link to="/category/Mongo%20Db"><i className="text-white">Learn MongoDB</i></Link>
                </div>
            </div>
            <div className="cards-home">
                <h1>
                     <i className="devicon-sass-original colored"></i> Sass
                </h1>
                <p>
                      Power up your css with sass
                </p>
                <div className="btn btn-danger text-white">
                    <Link to="/category/sass"><i className="text-white">Learn sass</i></Link>
                </div>
            </div>
        </div>
    )
}

export default FewCategory;