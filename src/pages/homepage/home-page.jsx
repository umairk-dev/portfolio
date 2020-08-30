import React from 'react';
import Typing from 'react-typing-animation';

import './home.styles.scss';
import Social from '../../components/social/social-component';

class Home extends React.Component {
    render() {
       return (
          <div className="home">

            <div className="title">G'day, my name is Umair Khan</div>
            <div className="intro">
               <span>I am&nbsp;</span>
               <div  className="names">
                  <Typing loop={100}>
                     <span>Software Engineer</span>
                     <Typing.Backspace count={18} delay={1000}  />
                     <span>Android App Developer</span>
                     <Typing.Backspace count={22} delay={1000}  />
                     <span>Front-End Developer</span>
                     <Typing.Backspace count={20} delay={1000}  />
                     <span>Back-End Developer</span>
                     <Typing.Backspace count={19} delay={1000}  />
                     <span>React-Native Developer</span>
                     <Typing.Backspace count={23} delay={1000} />

                  </Typing>
               </div>
            </div>
            <div className="social">
               <Social addColor={false}/>
            </div>
            
            
          </div>
       )
    }  
}
export default Home;