import React, { Component } from 'react'

export default class Display extends Component {
   
    
    render() {
        return (
                <div className="wrapper mx-auto mt-5">
                    <div className="col-lg-5 col-sm-5">
                    <div className="card">
                        <img src={this.props.image} style={{borderRadius:"10px"}} className="card-img-top" alt="This"  style={{height:"200px"}} />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.name}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>

                    </div> 
                    </div>
                </div>
        )
    }
}
