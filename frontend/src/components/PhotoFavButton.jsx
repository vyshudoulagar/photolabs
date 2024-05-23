import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(prevState => !prevState);
        props.onClick(props.photo);
    }

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isActive} />
      </div>
    </div>
  );
}

export default PhotoFavButton;