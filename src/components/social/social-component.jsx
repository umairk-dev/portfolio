import React from 'react';

import './social.styles.scss';
import SocialIcon from './social-icon-component';

function Social({addColor}) {
    return (
        <div className="social">
            
                {addColor ? (
                        <div className="social">
                            <a target="_blank" rel="noopener noreferrer"  href="https://github.com/umairk-dev">
                                <SocialIcon  className="icon" color={"#000"} name={"github"}/>
                            </a>  
                            <a target="_blank" rel="noopener noreferrer"  className="linkedin" href="https://www.linkedin.com/in/umair--khan/">
                                <SocialIcon  className="icon" color={"slateblue"} name={"linkedin"}/>
                            </a>
                            <a target="_blank" rel="noopener noreferrer"  className="youtube" href="https://www.youtube.com/channel/UCyXq99DImp_GOKTvXkKKe-A">
                                <SocialIcon  className="icon" color={'red'} name={"youtube"}/>
                            </a> 
                        </div>
                    ):(
                        <div className="social">
                            <a target="_blank" rel="noopener noreferrer"  href="https://github.com/umairk-dev">
                                <SocialIcon  className="icon" color={"#fff"} name={"github"}/>
                            </a>  
                            <a target="_blank" rel="noopener noreferrer"  className="linkedin" href="https://www.linkedin.com/in/umair--khan/">
                                <SocialIcon  className="icon" color={"#fff"} name={"linkedin"}/>
                            </a>
                            <a target="_blank" rel="noopener noreferrer"  className="youtube" href="https://www.youtube.com/channel/UCyXq99DImp_GOKTvXkKKe-A">
                                <SocialIcon  className="icon" color={'#fff'} name={"youtube"}/>
                            </a> 
                        </div>
                    )
                }
      </div>
    )
  }
   
  export default Social;
  