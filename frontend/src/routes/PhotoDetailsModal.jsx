import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({ setDisplayModal, addFav, displayModal, closeDisplayModal, favPhoto }) => {
    const similarPhotos = Object.values(displayModal.similar_photos);

    return (
        <div className="photo-details-modal">
            <button className="photo-details-modal__close-button" onClick={() => closeDisplayModal()}>
                <img src={closeSymbol} alt="close symbol" />
            </button>

            <div className='photo-details-modal__div'>
                <div>
                    <PhotoFavButton photoId={displayModal.id} addFav={addFav} favPhoto={favPhoto} />
                    <img className="photo-details-modal__image" src={displayModal.urls.regular} alt={displayModal.location.city} />
                </div>
            </div>
            <div className='photo-details-modal__top-bar'>
                <div className="photo-details-modal__photographer-details">
                    <img className="photo-details-modal__photographer-profile" src={displayModal.user.profile} alt={displayModal.user.username} />
                    <div className="photo-details-modal__photographer-info">
                        <p>{displayModal.user.username}</p>
                        <div className="photo-details-modal__photographer-location">
                            <p>{displayModal.location.city} {displayModal.location.country}</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='photo-details-modal__header'>
                <p>Similar Photos</p>
                <div className='photo-details-modal__images'>
                    <PhotoList photos={similarPhotos} onClick={addFav} setDisplayModal={setDisplayModal} favPhoto={favPhoto} />
                </div>
            </div>
        </div>
    )
};

export default PhotoDetailsModal;
