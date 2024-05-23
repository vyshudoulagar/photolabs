import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
    const { data } = props;
    return (
        <div className="photo-list__item">
            <img className="photo-list__image" src={data.imageSource} alt={data.location.city} />
            <div className="photo-list__user-details">
                <img className="photo-list__user-profile" src={data.profile} alt={data.username} />
                <div className="photo-list__user-info">
                    <p>{data.username}</p>
                    <div className="photo-list__user-location">
                        <p>{data.location.city} {data.location.country}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoListItem;
