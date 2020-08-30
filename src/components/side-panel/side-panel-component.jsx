import React from 'react';

import './side-panel.styles.scss';
import SidePanelItem from '../side-panel-item/side-panel-item-component';


const SidePanel = ({current,handleClick}) => {
    return(
        <div className="side-panel">
            <SidePanelItem name={"Education"} type={"fas"} icon={"graduation-cap"} color={"orange"} current={current} handleClick = {handleClick}/>
            <SidePanelItem name={"Work"} type={"fas"} icon={"code"} color={"blue"} current={current} handleClick = {handleClick}/>
            <SidePanelItem name={"Skills"} type={"fas"} icon={"code-branch"} color={"red"} current={current} handleClick = {handleClick}/>
        </div>
    )
}

export default SidePanel;