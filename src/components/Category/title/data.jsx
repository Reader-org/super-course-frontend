import React from 'react'
import axios from 'axios';
import './title.css'
import { Link } from 'react-router-dom';

const Cards = ({name,icon})=>{

    return(
        <div className="wrapper mx-3 my-5">

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title text-center"><i className={icon}></i><br/>&nbsp;{name}</h5>
                    <Link  to={"category/"+name} >View Courses</Link>
                </div>
            </div>

        </div>
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
                <div className="my-5 container-fluid mx-auto">
                   <div className="row ml-auto center">
                    {
                        this.state.categories.map(category=>{
                            return(
                               <Cards  key={category.name} name={category.name} icon={category.icon} /> 
                            )
                        })
                    }
                    </div>
                </div>
            </>
        )
    }
}

export default Data;