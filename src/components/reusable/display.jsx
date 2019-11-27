import React, { Component } from 'react'
import './display.css';
import pro from './pro.svg';

export default class Display extends Component {
   
    courseRedirect =(e)=>{
        window.location=e;
        // console.log(e);
    }
    render() {
        return (
                <div className="cont mt-5 mb-3 mx-auto">
                    <div className="course-cards">
                        <div className="card-body">
                            <img src={pro} alt="computes mobiles" />
                            <h3 className="title text-primary">
                                {
                                    this.props.name
                                }
                            </h3>
                            <div className="mt-4">
                                <p className="text-muted">
                                   {
                                       this.props.description
                                   }
                                </p>
                            </div>
                            <div className="mt-2 mb-3">
                                <p className="text-muted">
                                  Instructor: <span className="des-data">{
                                       this.props.instructor
                                   }
                                   </span>
                                   &nbsp;
                                   &nbsp;
                                   &nbsp;
                                   <br/>
                                   Level: <span className="des-data"> {
                                       this.props.level
                                   }
                                   </span>
                                   &nbsp;
                                   &nbsp;
                                   &nbsp;
                                   <br/>
                                    Language: <span className="des-data">{
                                       this.props.language
                                   }
                                   </span>
                                </p>
                            </div>
                            <div className="btn btn-danger">
                                <a href={this.props.link} rel="noopener noreferrer" className="text-white" target="_blank">
                                     Check It
                                </a>
                                
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
