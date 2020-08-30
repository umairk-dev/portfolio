import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './social.styles.scss';

function SocialIcon({type,name,color}) {
    console.log(name + " - " + color);
    return (
        <FontAwesomeIcon className="icon" color={color} icon={[`${type}`, `${name}`]} />
    )
  }
   
  export default SocialIcon;
  