import React from 'react'
import HeroSection from './heroSection';
import './main.css';
import  CardView from './cardview';
import FewCategory from './few-category';

class Home extends React.Component{
    render(){
        return(
            <section className="main">
                <div className="main-page">
                    <HeroSection/>
                </div>
                <div className="info-cards">
                    <div className="container">
                    
                        <div className="col-lg-12 mx-auto col-sm-10 col-md-5 ">
                            <CardView/>
                        </div>
                    </div>
                </div>
                <div className="few-category">
                    <div className="col-lg-7 col-md-7 col-sm-10">
                        <FewCategory/>
                    </div>
                </div>
                
                
           </section>
        )
    }
}

export default Home;
