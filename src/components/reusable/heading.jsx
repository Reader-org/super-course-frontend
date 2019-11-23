import React from 'react';
import './heading.css';


const Heading = (props)=>{
    return(
        <div className="heading-title my-5 py-5">
            <div className="main-heading">
                <h1 className="heading-text">
                    {
                        props.Heading
                    }
                </h1>
                <p>
                    {
                        props.subheading
                    }
                </p>
            </div>
        </div>
    )
}


export default Heading;