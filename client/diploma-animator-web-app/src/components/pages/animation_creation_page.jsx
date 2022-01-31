import React from 'react';
import CanvasComponent from "../canvas/canvas_component";

const AnimationCreationPage = () => {
    return (
        <div className='animation_creation'>
            <div className="title_animation">Title</div>
            <div className="creation_zone">
                <div className="canvas_zone"><CanvasComponent/></div>

            </div>


        </div>
    )
        ;
};

export default AnimationCreationPage;