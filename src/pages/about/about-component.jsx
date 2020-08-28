import React from 'react';
import './about.styles.scss'
import Social from '../../components/social/social-component';
import ScrollList from '../../components/scroll-list/scroll-list-component';

class About extends React.Component {
    render() {
       return (
          <div className="about">
               <h1>About...</h1>
               <div className="text">
                     My name is Umair Khan. I am experienced Software Engineer with a demonstrated history of working in the information technology and services industry.
                     <br/>
                     Skilled in Java, Delphi, Python, NodeJS, React and Mobile Applications, and C++. Strong engineering professional with a Master’s Degree focused in Software Engineering from Federation University Australia. 
                    <ScrollList/> 
               </div>


               <div className="social">
                  <Social addColor={true}/>
               </div>  
          </div>
       )
    }
  }
  
  export default About;