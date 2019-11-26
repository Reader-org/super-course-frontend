import React from 'react';
import { Link } from 'react-router-dom';

const Contribution = ()=>{
    return(
        <div className="contributions">
            <div className="foot-set">
                <div className="here-we-go">
                    <h1>
                        Want to contribute??
                    </h1>
                    <p>
                        Here are two ways you can contribute to this project
                    </p>
                </div>
                <div className="buttons-suc">
                    <div className="btn btn-success text-white mt-2">
                    <Link to="/add/coures">
                        <em className="text-white">Add Course</em>
                    </Link>
                    </div>
                    <div className="btn btn-success text-white mt-2">
                        <em >
                            <a className="text-white" href="https://github.com/Reader-org/super-course-frontend">
                                Github-repo
                            </a>
                        </em>
                    </div>
                    
                </div>
                <div className="text-center text-white mt-3">
                    If you have any idea that can make this project more helpful feel free to add it to the github repo
                </div>
            </div>
        </div>
    )
}

export default Contribution;