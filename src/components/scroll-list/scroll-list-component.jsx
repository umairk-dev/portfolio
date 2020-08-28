import React from 'react';

import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import logo from "../../assets/zoom-home.jpg";

import './scroll-list.styles.scss';

class ScrollList extends React.Component {
    render(){
        return (
            <div className="scroll-list">
                <img className="image" src={logo} />

                <img className="image" src={logo} />
            </div>
        )
    }
}


export default ScrollList;