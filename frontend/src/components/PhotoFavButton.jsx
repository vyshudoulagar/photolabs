import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = (props) => {
    const { photoId, addFav, favPhoto } = props;
    // check if the heart is filled or not
    const isActive = favPhoto.includes(photoId);
    return (
        <div className="photo-list__fav-icon" onClick={() => addFav(photoId)}>
            <div className="photo-list__fav-icon-svg">
                <FavIcon selected={isActive} />
            </div>
        </div>
    );
}

export default PhotoFavButton;