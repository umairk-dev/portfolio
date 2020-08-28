import React from 'react';
import {Link} from 'react-router-dom';

import './header.styles.scss';

class Header extends React.Component {
    
        render(){

            return(
                <div className="header" >
                    <Link to="/">
                    Umair
                    </Link>
                    <div className="options">
                        <Link className="option" to="/about">
                            About
                        </Link>
                        <Link className="option" to="/projects">
                            Projects
                        </Link>
                        <Link className="option" to="/resume">
                            Resume
                        </Link>
                    </div>
                </div>
            )
        }
    
    
    };

export default Header;