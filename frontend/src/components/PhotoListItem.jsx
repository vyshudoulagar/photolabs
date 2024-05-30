import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {
    const { data, addFav, setDisplayModal, favPhoto, dark } = props;

    return (
        <div className={`photo-list__item ${dark}`} >
            <PhotoFavButton photoId={data.id} addFav={addFav} favPhoto={favPhoto} dark={dark} />
            <div onClick={() => setDisplayModal(data)}>
                <img className="photo-list__image" src={data.urls.regular} alt={data.location.city} />
                <div className="photo-list__user-details">
                    <img className="photo-list__user-profile" src={data.user.profile} alt={data.user.username} />
                    <div className={`photo-list__user-info ${dark}`}>
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
