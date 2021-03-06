import React from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './components/main/home';
import Category from './components/Category/category';
import CategoryData from './components/Category/category-data';
import Add from './components/reusable/add-course';
import AllCourses from './components/reusable/allCourses';


function App() {
  return (
    <div className="">
     <Router>
     <Navbar/>
       <Route exact path="/" component={Home} />
        
        <Route exact path="/category" component={Category} />
        
        
        <Route path="/category/:category" component={CategoryData} />

        <Route path="/all-course" component={AllCourses} />

        <Route path="/add/course" component={Add} />

     </Router>
    
    </div>
  );
}

export default App;
