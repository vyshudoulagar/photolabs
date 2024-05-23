import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
    const [state, setState] = useState("inactive");
    const handleClick = () => {
        console.log(state);
        state === "active" ? setState("inactive") : setState("active");
    }

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon />
      </div>
    </div>
  );
}

export default PhotoFavButton;