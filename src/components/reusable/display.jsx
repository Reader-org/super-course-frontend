import React, { Component } from 'react'

export default class Display extends Component {
   
    courseRedirect =(e)=>{
        window.location=e;
        console.log(e);
    }
    render() {
        return (
                <div className="wrapper mx-5">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="title text-primary">
                                {
                                    this.props.name
                                }
                            </h3>
                            <div className="card-body">
                                <p>
                                   {
                                       this.props.description
                                   }
                                </p>
                            </div>
                            <div className="card-body">
                                <p className="text-muted">
                                  Instructor: {
                                       this.props.instructor
                                   }
                                   &nbsp;
                                   &nbsp;
                                   &nbsp;
                                   Level: {
                                       this.props.level
                                   }
                                   &nbsp;
                                   &nbsp;
                                   &nbsp;
                                    Language: {
                                       this.props.language
                                   }
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
