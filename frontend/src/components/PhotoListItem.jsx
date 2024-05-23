import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
    const { data } = props;
  return (
    <div className="photo-list__item">
        <img src={data.imageSource} alt={data.location.city} />
        <img src={data.profile} alt={data.username} />
        <p>{data.username}</p>
        <p>{data.location.city} {data.location.country}</p>
    </div>
  );
};

export default PhotoListItem;
