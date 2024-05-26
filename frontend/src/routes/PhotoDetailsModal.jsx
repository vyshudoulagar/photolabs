import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({ onClick, displayModal, setDisplayModal, favPhoto }) => {
    const similarPhotos = Object.values(displayModal.similar_photos);

    return (
        <div className="photo-details-modal">
            <button className="photo-details-modal__close-button" onClick={() => setDisplayModal(null)}>
                <img src={closeSymbol} alt="close symbol" />
            </button>
            <PhotoFavButton photoId={displayModal.id} onClick={onClick} favPhoto={favPhoto} />
            <div>
                <img className="photo-details-modal__image" src={displayModal.urls.regular} alt={displayModal.location.city} />
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
                    <PhotoList photos={similarPhotos} onClick={onClick} setDisplayModal={setDisplayModal} favPhoto={favPhoto} />
                </div>
            </div>
        </div>
    )
};

export default PhotoDetailsModal;
