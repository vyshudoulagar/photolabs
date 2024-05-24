import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ setDisplayModal }) => {
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => setDisplayModal(false)}>
        <img src={closeSymbol} alt="close symbol" />
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
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
