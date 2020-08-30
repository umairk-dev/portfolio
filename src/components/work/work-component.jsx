import React from 'react';

import './work.styles.scss'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkItem from './work-item/work-item-component';

import FedUni from '../../assets/federation_university.jpg';
import Anidra from '../../assets/anidra.png';
import Data61 from '../../assets/data61.png';
import IdeaBuilder from '../../assets/ideabuilder.png';
import Jopic from '../../assets/jopic.png';

const Work = () =>{
    return(
      
            <VerticalTimeline>
                <WorkItem logo={Jopic} position={"Freelance Embedded Developer"} duration={"2020 - present"} location={"Lahore, Pakistan"} company={"Flowmaster Jopic"} background={"#A9CCE3"} color={"black"}/>
                <WorkItem logo={FedUni} position={"Software Developer/Research Assistant"} duration={"2018 - present"} location={"Mount Helen, VIC, Australia"} company={"Federation University, Australia"} background={"#85C1E9"} color={"black"}/>
                <WorkItem logo={Anidra} position={"Full Stack Software Engineer"} duration={"2017 - 2020"} location={"Melbourne, VIC, Australia"} company={"Anidra Tech Ventures Pty. Ltd"} background={"#FAD7A0"} color={"black"}/>
                <WorkItem logo={Data61} position={"DATA61 Summer Research Scholar"} duration={"2017 - 2018"} location={"Melbourne, VIC, Australia"} company={"DATA61 (CSIRO), Australia"} background={"#ABEBC6"} color={"black"}/>
                <WorkItem logo={IdeaBuilder} position={"Software Engineer"} duration={"2012 - 2014"} location={"Lahore, Pakistan"} company={"Idea Builders PVT Ltd."} background={"#D7BDE2"} color={"black"}/>
            </VerticalTimeline>
    )
}

export default Work;