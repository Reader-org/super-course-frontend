import React, { Component } from 'react'
import Axios from 'axios';
import Display from '../reusable/display'


export default class CategoryData extends Component {
    constructor(props){
        super(props)
        this.state={
            courses:[]
        }
    }

    componentDidMount(){
        // console.log(this.props)
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
            <div className="container my-5 py-5">
            <div className="row">
                {
                    this.state.courses.map(eachcourse=>{
                        return(
                           <Display key={eachcourse.id} name={eachcourse.title} link={eachcourse.link} description={eachcourse.Description} instructor={eachcourse.Instructor} id={eachcourse.id} url={eachcourse.request.Url} level={eachcourse.Level} language={eachcourse.Language}/>
                        )
                    })
                }
            </div>
            </div>
        )
    }
}
