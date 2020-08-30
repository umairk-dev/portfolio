
import React from 'react';

import './project-link.styles.scss';
import SocialIcon from '../social/social-icon-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ProjectLink = ({website, playstore, github}) => {
    console.log(website);
    console.log(playstore);
    return (
        

        <div className="links">
            {github ? (
                 <a className="link" target="_blank" rel="noopener noreferrer"  href={`${github}`}>
                     <SocialIcon  className="icon" color={"#000"}  type={"fab"} name={"github"}/>
                 </a>  
            ):(null)}

            
            {playstore ? (
                 <a className="link" target="_blank" rel="noopener noreferrer"  href={`${playstore}`}>
                     <SocialIcon  className="icon" color={"green"}  type={"fab"} name={"android"}/>
                 </a>  
            ):(null)}

            
            {website ? (
                 <a className="link" target="_blank" rel="noopener noreferrer"  href={`${website}`}>
                     <SocialIcon  className="icon" color={"slateblue"} type={"fas"} name={"globe"}/>
                 </a>  
            ):(null)}


        </div>        
    )
}


export default ProjectLink;