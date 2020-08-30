import React from 'react';

import './education.styles.scss';
import EducationItem from './education-item/education-item-component';
import FedUni from '../../assets/federation_university.jpg';
import COMSATS from '../../assets/comsats.png';

const Education = () =>{
    return(
        <div >
            <EducationItem logo={FedUni} degree={"Master of Technology (Software Engineering)"} university={"Federation University, Australia"} years={"2014-2016"} cgpa={"6.6/7"} project={"Developed desktop software and mobile application in a 3-member group project to forecast number of tropical cyclones in Asia-Pacific region and plotting tracks of historical cyclones, implemented using QT framework (C++)"}/>
            <EducationItem logo={COMSATS} degree={"Bachelor of Science (Computer Science)"} university={"COMSATS Institute of Information Technology, Pakistan"} years={"2008-2012"} cgpa={"3.05/4"} project={"Developed desktop software in a 3-member group project to control Traffic Signals and Red-Light offence monitoring by using machine learning algorithms, OpenCV and C++ for vehicle detection and software implementation."}/>
        </div>
    )
}

export default Education;

