import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {
    const { data, addFav, setDisplayModal, favPhoto } = props;

    return (
        <div className="photo-list__item" >
            <PhotoFavButton photoId={data.id} addFav={addFav} favPhoto={favPhoto} />
            <div onClick={() => setDisplayModal(data)}>
                <img className="photo-list__image" src={data.urls.regular} alt={data.location.city} />
                <div className="photo-list__user-details">
                    <img className="photo-list__user-profile" src={data.user.profile} alt={data.user.username} />
                    <div className="photo-list__user-info">
                        <span>{data.user.username}</span>
                        <div className="photo-list__user-location">
                            {data.location.city} {data.location.country}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PhotoListItem;
