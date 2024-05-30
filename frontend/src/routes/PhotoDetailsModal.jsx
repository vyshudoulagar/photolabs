import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({ photos, setDisplayModal, addFav, displayModal, closeDisplayModal, favPhoto, dark }) => {
    const similarPhotoIds = Object.values(displayModal.similar_photos).map(photo => photo.id);
    const similarPhotos = photos.filter((photo) => similarPhotoIds.includes(photo.id));

    return (
        <div className={`photo-details-modal ${dark}`}>
            <button className={`photo-details-modal__close-button ${dark}`} onClick={() => closeDisplayModal()}>
                <img src={closeSymbol} alt="close symbol" />
            </button>

            <div className='photo-details-modal__images'>
                <PhotoFavButton photoId={displayModal.id} addFav={addFav} favPhoto={favPhoto} dark={dark} />
                <img className="photo-details-modal__image" src={displayModal.urls.regular} alt={displayModal.location.city} />
            </div>
                <div className="photo-details-modal__photographer-details">
                    <img className="photo-details-modal__photographer-profile" src={displayModal.user.profile} alt={displayModal.user.username} />
                    <div className={`photo-details-modal__photographer-info ${dark}`}>
                        <span>{displayModal.user.username}</span>
                        <div className="photo-details-modal__photographer-location">
                            {displayModal.location.city} {displayModal.location.country}
                        </div>
                    </div>
                </div>
            <p className={`photo-details-modal__header ${dark}`}>Similar Photos</p>
            <div className='photo-details-modal__top-bar'>
                <PhotoList photos={similarPhotos} addFav={addFav} setDisplayModal={setDisplayModal} favPhoto={favPhoto} dark={dark} />
            </div>
        </div>
    )
};

export default PhotoDetailsModal;
