import React from 'react'
import axios from 'axios';

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
                <div className="mx-auto">
                    {
                        this.state.categories.map(category=>{
                            return(
                                <div className="cards" key={category.name}>
                                    
                                    <h1>
                                    <i className={category.icon}></i>&nbsp;
                                        {
                                        category.name
                                        }
                                    </h1>
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}

export default Data;