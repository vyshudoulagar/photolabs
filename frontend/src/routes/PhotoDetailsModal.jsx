import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';
import photos from 'mocks/photos';

const PhotoDetailsModal = ({ onClick, displayModal, setDisplayModal }) => {
    console.log(displayModal);
    return (
        <div className="photo-details-modal">
            <button className="photo-details-modal__close-button" onClick={() => setDisplayModal(null)}>
                <img src={closeSymbol} alt="close symbol" />
            </button>
            <PhotoFavButton photo={displayModal.id} onClick={onClick} />
            <img className="photo-details-modal__image" src={displayModal.urls.regular} alt={displayModal.location.city} />
            <div className="photo-details-modal__photographer-details">
                <img className="photo-details-modal__photographer-profile" src={displayModal.user.profile} alt={displayModal.user.username} />
                <div className="photo-details-modal__photographer-info">
                    <p>{displayModal.user.username}</p>
                    <div className="photo-details-modal__photographer-location">
                        <p>{displayModal.location.city} {displayModal.location.country}</p>
                    </div>
                </div>
            </div>
            <div className='photo-details-modal__header'>
                <p>Similar Photos</p>
                <div className='photo-details-modal__images'>
                    <PhotoList photos={photos} onClick={onClick} setDisplayModal={setDisplayModal} />
                </div>
            </div>
        </div>
    )
};

export default PhotoDetailsModal;
