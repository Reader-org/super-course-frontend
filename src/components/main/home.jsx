import React from 'react'
import HeroSection from './heroSection';
import './main.css';
import  CardView from './cardview';
import FewCategory from './few-category';
import Heading from '../reusable/heading';
import Contribution from './contri';
import Footer from '../reusable/footer';

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
                <Heading Heading="Getting Started" subheading="Here are some categories to get started with"/>
                <div className="few-category">
                    
                    <div className="col-lg-10 col-md-10 col-sm-12" data-aos="fade-up" data-aos-duration="1500">
                        <FewCategory/>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1500">
                    <Heading Heading="Want to Contribute" subheading="Here is how you can contribute"/>
                    <Contribution />
                </div>
                
                <Footer/>
           </section>
        )
    }
}

export default Home;
