import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
    const {photos, addFav, setDisplayModal, favPhoto, dark} = props;
    return (
        <ul className='photo-list'>
            {photos && photos.map((photo) => (
                <PhotoListItem key={photo.id} data={photo} addFav={addFav} setDisplayModal={setDisplayModal} favPhoto={favPhoto} dark={dark} />
            ))}
        </ul>
    );
};

export default PhotoList;
