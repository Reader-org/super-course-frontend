import React from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './components/main/home';
import Category from './components/Category/category';
import CategoryData from './components/Category/category-data'


function App() {
  return (
    <div className="col-lg-12 col-sm-12 col-md-12">
     <Router>
     <Navbar/>
       <Route exact path="/" component={Home} />
        
        <Route exact path="/category" component={Category} />
        
        
        <Route path="/category/:category" component={CategoryData} />

     </Router>
    </div>
  );
}

export default App;
