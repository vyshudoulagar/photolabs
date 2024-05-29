import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = (props) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = useCallback(() => {
        setIsActive(prevState => !prevState);
        props.addFav(props.photoId);
    }, [props]);

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isActive} />
      </div>
    </div>
  );
}

export default PhotoFavButton;