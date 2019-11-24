import React, { Component } from 'react'
import Axios from 'axios';
import Display from './display';
import Heading from './heading';
import pwa from '../Category/title/pwa.svg'

export default class AllCourses extends Component {
    constructor(props){
        super(props)
        this.state={
            courses:[]
        }
    }

    componentDidMount(){
        // console.log(this.props)
        Axios.get('https://sudocourses.herokuapp.com/courses/get/')
        .then((response)=>{
            console.log(response.data);
            this.setState({
                courses: response.data.courses
            })
        })
    }
    render() {
        return (
            <>
            <div className="heading">
                <Heading Heading="All Courses" subheading={`Pick From Our Long List Of Courses What you want to Learn Today`}/>
            </div>
            <img src={pwa} className="all-course" alt="thinking with laptop" />
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
            </>
        )
    }
}
