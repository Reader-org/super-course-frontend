import React from 'react';
import {BrowserRouter as Router , Route,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './components/main/home';
import Category from './components/main/cateory';


function App() {
  return (
    <div className="container">
     <Router>
     <Navbar/>
     <br/>
       <Route exact path="/" component={Home}>Home</Route>
       <Route path="/category" component={Category}>category</Route>
     </Router>
    </div>
  );
}

export default App;
