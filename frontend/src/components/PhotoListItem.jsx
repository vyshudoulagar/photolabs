import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
    const { data } = props;
  return (
    <div>
        <img src={data.imageSource} alt="image" />
        <img src={data.profile} alt="profile" />
        <p>{data.username}</p>
        <p>{data.location.city} {data.location.country}</p>
    </div>
  );
};

export default PhotoListItem;
