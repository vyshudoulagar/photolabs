import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
    const { photos, setDisplayModal, topics, favPhoto, addFav, onLoadTopic, reLoad, isFavPhotoExist } = props;

    return (
        <div className="home-route">
            <TopNavigation
                topics={topics}
                isFavPhotoExist={isFavPhotoExist}
                onLoadTopic={onLoadTopic}
                reLoad={reLoad}
            />
            <PhotoList
                photos={photos}
                addFav={addFav}
                setDisplayModal={setDisplayModal}
                favPhoto={favPhoto}
            />
        </div>
    );
};

export default HomeRoute;
