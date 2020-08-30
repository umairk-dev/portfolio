import React from "react";

import './side-panel-item.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SidePanelItem = ({name,type,icon,color,current,handleClick}) => {
    console.log(current);
    return (
        <div className="side-panel-item" onClick={() => handleClick(`${name}`)}>
            <div className="image">
                <FontAwesomeIcon className="icon" color={color} icon={[`${type}`, `${icon}`]} />
            </div>
            <div className="name" color={color}>{name}</div> 
            <div className={`arrow`} >
                <FontAwesomeIcon className="icon" color={current === name ? (`${color}`):(null)}  icon={["fas", "caret-right"]} />
            </div>    

        </div>   
    )
}

export default SidePanelItem;
