import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './social.styles.scss';

function SocialIcon({name,color}) {
    console.log(name + " - " + color);
    return (
        <FontAwesomeIcon className="icon" color={color} icon={["fab", `${name}`]} />
    )
  }
   
  export default SocialIcon;
  