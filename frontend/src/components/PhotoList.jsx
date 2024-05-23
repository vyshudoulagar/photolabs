import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos }) => {
    return (
        <ul className="photo-list">
            {photos.map((photo) => (
                <div key={photo.id} className='photo-list'>
                    <PhotoListItem data={photo} />
                </div>
            ))}
        </ul>
    );
};

export default PhotoList;
