import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {
    const {data, onClick, setDisplayModal} = props;

    return (
        <div className="photo-list__item" onClick={() => setDisplayModal(true)}>
            <PhotoFavButton photo={data.id} onClick={onClick}/>
            <img className="photo-list__image" src={data.urls.regular} alt={data.location.city} />
            <div className="photo-list__user-details">
                <img className="photo-list__user-profile" src={data.user.profile} alt={data.user.username} />
                <div className="photo-list__user-info">
                    <p>{data.user.username}</p>
                    <div className="photo-list__user-location">
                        <p>{data.location.city} {data.location.country}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoListItem;
