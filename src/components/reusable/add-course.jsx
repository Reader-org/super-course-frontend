import React from 'react'
import './add.css';
import Axios from 'axios';
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import Heading from './heading';

class Add extends React.Component{
    
    constructor(props){
        super(props)
         this.state={
             options:[],

         }
         this.handleChanges = this.handleChanges.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidMount(){
        
        setTimeout(
            Axios.get('https://sudocourses.herokuapp.com/category/get')
            .then(response=>{
                this.setState({
                    options:response.data.Category,
                    title:"",
                    Instructor:"",
                    Description:"",
                    Url:"",
                    Language:"",
                    Level:"",
                    Category:"",
                    message:"",

                })
                // console.log(this.state.options);
            })
            .catch(err=>{
                alert(err);
            }),20000);
    }

    handleChanges(e){
        this.setState({
            title:this.refs.title.value,
            Instructor:this.refs.Instructor.value,
            Description:this.refs.Description.value,
            Url:this.refs.Url.value,
            Language:this.refs.Language.value,
            Level:this.refs.Level.value,
            Category:this.refs.Category.value,
        
        });

        // console.log(this.state);
    }

    
  

    handleSubmit(e){
        Axios.post('https://sudocourses.herokuapp.com/courses/post',this.state)
        .then(()=>{
            this.setState({
                title:"",
                Instructor:"",
                Description:"",
                Url:"",
                Language:"",
                Level:"",
                Category:"",
                message:"Course Added Successfully"
            });

           this.disapper();
        }).catch(err=>{
            alert(err);
        });

        e.preventDefault();
    }

     disapper = ()=> {
        setTimeout(() => {
            this.setState({
                message:""
            })
            console.log('I am working');
        }, 5000);
    }





    render(){
        return(
            <>
               {this.state.message?<div className="alert alert-success" role="alert">
                   {this.state.message}
                 </div>
                 :""
                 }

                 <Heading Heading="Add A Course" subheading="If you know a super course feel free to add it."/>
               
                <div className="form col-lg-8 mx-auto my-5">
                    <form method="POST" onSubmit={this.handleSubmit.bind(this)} >
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label htmlFor="inputtitle4">Course Title</label>
                        <input required type="text" className="form-control" ref="title" onPaste={this.handleChanges.bind(this)} onChange={this.handleChanges.bind(this)} id="inputtitle4" placeholder="Enter Course title here" />
                        </div>
                        <div className="form-group col-md-6">
                        <label htmlFor="inputinstructor4">Instructor</label>
                        <input required type="text" className="form-control" ref="Instructor" onChange={this.handleChanges.bind(this)} onPaste={this.handleChanges.bind(this)} id="inputinstructor4" placeholder="Course Instructor" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress">Description</label><br/>
                       <textarea required name="Description"  ref="Description" onChange={this.handleChanges}  onPaste={this.handleChanges} className="col col-lg-8 center">

                       </textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputUrl2">Url</label>
                        <input required type="text" className="form-control"  ref="Url" onChange={this.handleChanges}  onPaste={this.handleChanges} id="inputUrl2" placeholder="Link to Url" name="Url" />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label htmlFor="inputLanguage">Language</label>
                        <input required type="text" className="form-control"  ref="Language" onChange={this.handleChanges}  onPaste={this.handleChanges} id="inputLanguage" placeholder="Language of the instructor"/>
                        </div>
                        <div className="form-group col-md-4">
                        <label htmlFor="inputState">Category</label>
                        <select required id="inputState" name="Category" onChange={this.handleChanges}   onPaste={this.handleChanges} ref="Category"  className="form-control">
                          {
                              this.state.options.map(data=>{
                                  return(
                                      <option key={data.id} value={data.name}>
                                            {data.name}
                                      </option>
                                  )
                              })
                          }
                        </select>
                        </div>
                        <div className="form-group col-md-2">
                        <label htmlFor="inputZip">Level</label>
                        <input required type="text" name="Level"  ref="Level"  onPaste={this.handleChanges} onChange={this.handleChanges} className="form-control" id="inputZip" />
                        </div>
                    </div>

                    <button type="submit"  className="btn btn-primary">Add Course</button>
                    </form>
                </div>
            </>
        )
    }
}

export default Add;