import React from 'react';
import './work-item.styles.scss';

import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const WorkItem = ({position, location, company, duration, logo, background, color}) =>{
    return(
        <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: `${background}`, color: `${color}` }}
                    contentArrowStyle={{ borderRight: `7px solid ${background}`} }
                    date={duration}
                    icon={ <img width={"50px"} src={logo} alt={"logo"} />}
                >
                    <h3 className="vertical-timeline-element-title">{position}</h3>
                    <h4 className="vertical-timeline-element-title">{company}</h4>
                    <h4 className="vertical-timeline-element-subtitle">{location}</h4>
       </VerticalTimelineElement>
    )
}

export default WorkItem;