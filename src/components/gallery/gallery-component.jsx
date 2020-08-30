import React from 'react';

import './gallery.styles.scss';
import AliceCarousel from 'react-alice-carousel'
import ReactPlayer from "react-player"

import 'react-alice-carousel/lib/alice-carousel.css'
import GalleryMenu from './gallery-menu/gallery-menu-component';
class Gallery extends React.Component {

   
    
    constructor(props) {
        super(props);

        this.state = {
            current: "image",
        };

        if(this.props.item.images.length === 0){
            if(this.props.hasVideo === false){
                this.state = {
                    current: "stack",
                };
            }else{
                this.state = {
                    current: "video",
                };
            }
        }

       

        
    }

    
    
    render() {
        
      //  const { collections } = this.state;
      
      const {hasVideo, video,images,stack,name} = this.props.item;
      const hasImage = images.length > 0
      const hasStack = stack.length > 0
      
        const handleOnDragStart = (e) => e.preventDefault()
        const handleMenuClick = (select) => {
            this.setState({current : select});
        }
        console.log("HasImag - " + hasImage);
        return (
            <div className="gallery">
                
                <GalleryMenu hasVideo= {hasVideo} hasImage = {hasImage} hasStack = {hasStack} active={this.state.current} handleClick = {handleMenuClick}/>


                {this.state.current ===  "video" &&  hasVideo ? (
                    <ReactPlayer
                        url={`${video}`}
                        width='100%'
                        height='80%'
                        />
                ):(
                null
                )}

                {this.state.current === "image" && hasImage > 0 ? (
                    <AliceCarousel mouseTrackingEnabled  buttonsDisabled={true}>
                        {images.map((image,key) => (
                        <img alt={name} key={key} src={`/static/images/${image}`} onDragStart={handleOnDragStart} height="350px" />
                        ))}
                    </AliceCarousel>
                ):(null)}
                        
                {this.state.current === "stack" && stack.length > 0 ? (
                    <div className="stack" dangerouslySetInnerHTML={ { __html: stack } }></div>

                ):(null)}
        
            </div>
        );
      }
}
    
export default Gallery;
