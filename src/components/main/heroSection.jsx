import React from 'react'
import Heading from '../reusable/heading'
import Aos from 'aos'
import 'aos/dist/aos.css';



class HeroSection extends React.Component{

    componentDidMount(){
        Aos.init();
    }


    render(){
        return(
            <div className="title" data-aos="fade" data-aos-duration="1500">
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
           </div>
        )
    }
}

export default HeroSection;