import React from 'react';

import './project-menu.styles.scss';
import MENU from "./menu-data";
 
const ProjectMenu = ({current, handleActive}) => {

    return (
        <div className="project-menu">
            {MENU.map((item,key) => (
                <div className={`menu-item ${current === key ? "active" : ""}`}  key={key} onClick={() => handleActive(item.tags, key)}>{item.name}</div>
            ))}
        </div>
    )
}


export default ProjectMenu;
