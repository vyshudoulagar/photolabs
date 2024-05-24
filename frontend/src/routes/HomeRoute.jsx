import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
    const {photos, setDisplayModal, topics, favPhoto, handleClick} = props;
    
    const isFavPhotoExist = favPhoto.length > 0;
    
    return (
        <div className="home-route">
            <TopNavigation topics={topics} isFavPhotoExist={isFavPhotoExist} />
            <PhotoList photos={photos} onClick={handleClick} setDisplayModal={setDisplayModal} />
        </div>
    );
};

export default HomeRoute;
