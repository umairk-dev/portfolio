import React from 'react';
import './education-item.styles.scss';


const EducationItem = ({logo,degree, university, years, project, cgpa}) => {
    return(
        <div className="education-item">
             <div className="logo">
                <img src={logo} width={"100px"}/>
            </div>

            <div className="title">
                <div className="year">
                    {years}
                </div>
                <div className="degree">
                    {degree}
                </div>
                <div>CGPA: {cgpa}</div>

            </div>
            <div className="university">
                <div>{university}</div> 
            </div>
            <div className="project">
                <div><strong>Final Project</strong></div>
                <div>{project}</div>
            </div>
            
            
        </div>
    )
}

export default EducationItem;