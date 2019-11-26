import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';
import hero from './hero.svg'


class HeroSection extends React.Component{

    componentDidMount(){
        Aos.init();
    }


    render(){
        return(
            <div className="title-brand" data-aos="fade" data-aos-duration="2500">
                <div className="branding">
                    <div className="main-page-text">
                        <h1>
                           The best courses on the<br/> internet are here
                        </h1>
                        <h3>
                            The Courses which keeps you going
                        </h3>
                    </div>
                </div>
                <div className="col col-lg-8 col-md-8 col-sm-10 mx-auto hero-img">
                    <img src={hero} alt="Hero-section-display"/>
                </div>
           </div>
        )
    }
}

export default HeroSection;