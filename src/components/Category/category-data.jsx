import React, { Component } from 'react'
import Axios from 'axios';
import Display from '../reusable/display';


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
        Axios.get('https://sudocourses.herokuapp.com/courses/get/category/'+this.props.match.params.category)
        .then((response)=>{
            console.log(response.data);
            this.setState({
                courses: response.data.courses
            })
        })
    }
    render() {
        return (
            <div className="text-center col-lg-12 center">
                {
                    this.state.courses.map(eachcourse=>{
                        return(
                            <div key={eachcourse.id} className="mt-5">
                                <Display className="mt-5" name={eachcourse.title} link={eachcourse.link} description={eachcourse.Description} instructor={eachcourse.Instructor} id={eachcourse.id} url={eachcourse.request.Url} level={eachcourse.Level} language={eachcourse.Language}/>
                           </div>
                        )
                    })
                }
            </div>
        )
    }
}
