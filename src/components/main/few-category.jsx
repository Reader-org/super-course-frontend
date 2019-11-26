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
            </div>
            <div className="cards-home">
                <h1>
                     <i className="devicon-nodejs-plain colored"></i> Node Js
                </h1>
            </div>
            <div className="cards-home">
                <h1>
                    <i className="devicon-python-plain colored"></i> Python
                </h1>
            </div>
            <div className="cards-home">
                <h1>
                     <i className="devicon-mongodb-plain colored"></i> MongoDB
                </h1>
            </div>
            <div className="cards-home">
                <h1>
                     <i className="devicon-sass-original colored"></i> Sass
                </h1>
            </div>
        </div>
    )
}

export default FewCategory;