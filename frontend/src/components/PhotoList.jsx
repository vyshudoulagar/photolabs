import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
    const {photos, onClick, setDisplayModal, favPhoto} = props;
    return (
        <ul className="photo-list">
            {photos.map((photo) => (
                <PhotoListItem key={photo.id} data={photo} onClick={onClick} setDisplayModal={setDisplayModal} favPhoto={favPhoto} />
            ))}
        </ul>
    );
};

export default PhotoList;
