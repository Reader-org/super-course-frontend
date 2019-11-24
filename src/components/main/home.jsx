import React from 'react'
import HeroSection from './heroSection';
import './main.css'

class Home extends React.Component{
    render(){
        return(
            <div className="main-page">
                <HeroSection/>
           </div>
        )
    }
}

export default Home;