import React from 'react';

import './gallery.styles.scss';
import GalleryMenu from '../gallery-menu/gallery-menu-component';
import AliceCarousel from 'react-alice-carousel'
import ReactPlayer from "react-player"

import 'react-alice-carousel/lib/alice-carousel.css'
class Gallery extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          current: "image",
        };
    }

    
    
    render() {
      //  const { collections } = this.state;
        const {hasVideo, video,images,stack} = this.props.item;
        const hasImage = images.length > 0
        const handleOnDragStart = (e) => e.preventDefault()
        const handleMenuClick = (select) => {
            this.setState({current : select});
        }
        console.log("HasImag - " + hasImage);
        return (
            <div className="gallery">
                
                <GalleryMenu hasVideo= {hasVideo} hasImage = {hasImage} active={this.state.current} handleClick = {handleMenuClick}/>


                {this.state.current ===  "video" &&  hasVideo ? (
                    <ReactPlayer
                        url={`${video}`}
                        width='100%'
                        height='100%'
                        />
                ):(
                null
                )}

                {this.state.current === "image" && hasImage > 0 ? (
                    <AliceCarousel mouseTrackingEnabled  buttonsDisabled={true}>
                        {images.map((image,key) => (
                        <img key={key} src={`/static/images/${image}`} onDragStart={handleOnDragStart} height="300px" />
                        ))}
                    </AliceCarousel>
                ):(null)}
                        
                {this.state.current === "stack" ? (
                    <div className="stack" dangerouslySetInnerHTML={ { __html: stack } }></div>

                ):(null)}
        
            </div>
        );
      }
}
    
export default Gallery;
