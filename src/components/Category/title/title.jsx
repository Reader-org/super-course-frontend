import React from 'react';
import './title.css'
import learn from './learn.svg';

class Title extends React.Component{
    render(){
        return(
            <div className="category">
                <div className="Heading text-center  text-dark my-3 mt-0">
                    <h1>
                        Categories
                    </h1>
                    <p className="my-5">
                       What you want to learn today
                    </p>
                </div>
                <div className="image mx-auto">
                    <div className="images">
                        <img src={learn} alt="student with the laptop"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Title;