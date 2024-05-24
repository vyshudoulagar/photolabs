import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({ onClick, displayModal , setDisplayModal }) => {
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => setDisplayModal(null)}>
        <img src={closeSymbol} alt="close symbol" />
        <PhotoFavButton photo={displayModal.id} onClick={onClick}/>
            <img className="photo-list__image" src={displayModal.urls.regular} alt={displayModal.location.city} />
            <div className="photo-list__user-details">
                <img className="photo-list__user-profile" src={displayModal.user.profile} alt={displayModal.user.username} />
                <div className="photo-list__user-info">
                    <p>{displayModal.user.username}</p>
                    <div className="photo-list__user-location">
                        <p>{displayModal.location.city} {displayModal.location.country}</p>
                    </div>
                </div>
            </div>
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
