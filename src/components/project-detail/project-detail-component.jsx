import React from 'react'


import './project-detail.styles.scss'
import Gallery from '../gallery/gallery-component'
import ProjectLink from '../project-link/project-link.component'
import Tags from '../tags/tags-component'

const ProjectDetail = ({item}) =>{


    const {playstore,website, github} = item
    console.log(item)
    return (

        <div className="project-detail">        
            <div className="title"> {item.name} </div>
            <div className="content">
                <div className="slides">
                    <Gallery item={item}/>
                </div>
                <div className="detail">
                    <Tags tags={item.tags} />
                    <div className="desc">
                        {item.description}
                        {item.features ? (
                            <div>
                                <h2>Features:</h2>
                                <ul>
                                    {item.features.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                       ):(null)}
                    </div>    
                    <div className="links">
                        <ProjectLink playstore={`${playstore}`} website={`${website}`}  github={`${github}`}/>
                    </div>
                </div>
            </div>
            <div className="actions">
                <button
                    className="button"
                    onClick={() => {
                    console.log("modal closed ");
                    }}
                >
                    close modal
                </button>
            </div>
        
        </div>
    );
}


export default ProjectDetail;