import React, { Component } from 'react'
import Axios from 'axios';

export default class CategoryData extends Component {
    constructor(props){
        super(props)
        this.state={
            courses:[]
        }
    }

    componentDidMount(){
        console.log(this.props)
        console.log(this.props.match.params.category);
        Axios.get('http://localhost:5000/courses/get/category/'+this.props.match.params.category)
        .then((response)=>{
            console.log(response.data);
            this.setState({
                courses: response.data.courses
            })
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.courses.map(eachcourse=>{
                        return(
                            <h1 key={eachcourse.id}>
                                {
                                    eachcourse.title
                                }
                            </h1>
                        )
                    })
                }
            </div>
        )
    }
}
