import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import './project-detail.styles.scss'

const ProjectDetail = ({item}) =>{
    console.log(item.images)

    const handleOnDragStart = (e) => e.preventDefault()
    return (

        <div className="project-detail">        
            <div className="title"> {item.name} </div>
            <div className="content">
            <AliceCarousel mouseTrackingEnabled>
                {item.images.map((image,key) => (
                   <img key={key} src={`/static/images/${image}`} onDragStart={handleOnDragStart} />
                ))}
            </AliceCarousel>
               {item.description}
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