import React from 'react';
import './heading.css';


const Heading = (props)=>{
    return(
        <div className="heading mb-5">
            <div className="main-heading">
                <h1 className="heading-text">
                    {
                        props.Heading
                    }
                </h1>
                <p className={props.c}>
                    {
                        props.subheading
                    }
                </p>
            </div>
        </div>
    )
}


export default Heading;