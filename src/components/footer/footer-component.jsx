import React from 'react';
import {Link} from 'react-router-dom';

import './footer.styles.scss';
import Social from '../social/social-component';

var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "20px",
    width: "100%",
}


const Footer = () =>(
    {
        render(){

            return(
                <div>
                    <div style={style}>
                        <Social addColor={true}/>
                    </div>
                </div>
            )
        }
    }
    
);

export default Footer;