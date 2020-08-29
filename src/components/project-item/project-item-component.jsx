import React from 'react';
import Popup from "reactjs-popup";

import './project-item.styles.scss'

import { withRouter } from "react-router-dom";
import ProjectDetail from '../project-detail/project-detail-component';

const ProjectItem = ({ item, history, match }) => {
    return(
        
        <Popup trigger={
            <div className="project-item" >
       
                <div className="data">
                    <div className="title">{item.name}</div>
                    <div className="description">{item.description}</div>
                    <div className="image">
                        <img src={`/static/images/${item.preview}`}/>
                    </div>
                </div>
                
                <div className="tags">
                            {item.tags.map((tag, index) => (
                                    <div key={index} className="tag">{tag}</div>
                            ))}
                </div>
                
            </div>
            }     modal
            closeOnDocumentClick>
               <ProjectDetail item={item}/>
        </Popup>
    )
}

export default withRouter(ProjectItem);