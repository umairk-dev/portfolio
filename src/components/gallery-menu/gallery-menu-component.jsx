import React from 'react';

import './gallery-menu.styles.scss';


const GalleryMenu = ({hasVideo, hasImage, active, handleClick}) => {
    return(
        <div className="gallery-menu">
            { 
                hasVideo ? (
                    <div onClick={()=> handleClick("video")} className={`gallery-menu-item ${active === "video" ? "active" : null}`} >Video</div>
                ) : (
                   null
                )
            }        
            {
                hasImage ? (
                    <div onClick={()=> handleClick("image")}  className={`gallery-menu-item ${active === "image" ? "active" : null}`} >Images</div>
                ) : (
                    null
                )
            }
            <div onClick={()=> handleClick("stack")}  className={`gallery-menu-item ${active === "stack" ? "active" : null}`}> Stack</div>
        </div>
       
    )

}

export default GalleryMenu;