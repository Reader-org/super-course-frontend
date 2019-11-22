import React, { Component } from 'react'
import './display.css'

export default class Display extends Component {
   
    courseRedirect =(e)=>{
        window.location=e;
        console.log(e);
    }
    render() {
        return (
                <div className="cont mt-5 mb-3 mx-auto">
                    <div className="course-cards">
                        <div className="card-body">
                            <h3 className="title text-primary">
                                {
                                    this.props.name
                                }
                            </h3>
                            <div className="mt-4">
                                <p>
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
                            <div className="">
                                <button className="btn btn-primary" onClick={()=>this.courseRedirect(this.props.link)}>
                                    Check It
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
