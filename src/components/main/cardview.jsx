import React from 'react';
import svg1 from './lap.svg'
import { Link } from 'react-router-dom';

const CardView = ()=>{
    return(
        <div data-aos="fade-up" data-aos-duratio="1500" className="card-sec my-5 py-5">
            <div className="cardsview">
                <img src={svg1} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">Sudo Courses is a collection of the internet's Best courses for Programming.These Courses are found useful and provided by the developers around the world. All the hazels of finding a good course online to learn is now solved and are provided on one place by our large group of peers and open source contributors </p>
                </div>
                <div className="card-body">
                    <div className="btn btn-danger text-white">
                    <Link to="/all-course"><h5 className="text-white mx-auto">View Courses</h5></Link>
                    </div>
                </div>
            </div>
            <div className="cardsview">
                <img src={svg1} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">Want to help the community of developers like you??
                        If you know a course which is helpful to you and you think it will help others please consider adding it to our list.
                        <br/>
                        <strong>
                            Please add courses which are available for free or not too expensive so that every body can afford those courses
                        </strong>
                    </p>
                </div>
                <div className="card-body">
                    <div className="btn btn-danger text-white">
                    <Link to="/add/course"><h5 className="text-white mx-auto">Add Course</h5></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardView;