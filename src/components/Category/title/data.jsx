import React from 'react'
import axios from 'axios';
import './title.css'
import { Link } from 'react-router-dom';

const Cards = ({name,icon})=>{

    return(
        <div className="wrapper">

        
            <div class="card">
                <div class="card-body">
                    <h5 className="card-title text-center"><i className={icon}></i><br/>&nbsp;{name}</h5>
                    <Link  to={"category/"+name} >View Courses</Link>
                </div>
            </div>

        </div>

        // <div className="cards">
                                        
        // <h1>
        // <i className={icon}></i>&nbsp;
        //     {
        //         name
        //     }
        // </h1>
        // </div>
    )
}

class Data extends React.Component{
    constructor(props){
        super(props)
        this.state={
            categories:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:5000/category/get')
        .then(response=>{
            console.log(response.data.Category);
            this.setState({
                categories:response.data.Category
            });
        })
        .catch(err=>{
            alert(err)
        });
    }
    render(){
        return(
            <>
                <div className="ml-5 my-5">
                    {
                        this.state.categories.map(category=>{
                            return(
                               <Cards key={category.name} name={category.name} icon={category.icon} /> 
                            )
                        })
                    }
                </div>
            </>
        )
    }
}

export default Data;