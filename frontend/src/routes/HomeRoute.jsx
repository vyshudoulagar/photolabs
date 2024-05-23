import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
    const [favPhoto, setFavPhoto] = useState([]);
    const handleClick = (id) => {
        setFavPhoto(prevFavPhoto => prevFavPhoto.includes(id)
            ? prevFavPhoto.filter(photoId => photoId !== id)
            : [...prevFavPhoto, id]);
    }
    let isFavPhotoExist = true;
    favPhoto.length > 0 ? isFavPhotoExist = true : isFavPhotoExist = false;
    return (
        <div className="home-route">
            <TopNavigation topics={props.topics} isFavPhotoExist={isFavPhotoExist} />
            <PhotoList photos={props.photos} onClick={handleClick} />
        </div>
    );
};

export default HomeRoute;
