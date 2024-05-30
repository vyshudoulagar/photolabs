import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
    const {
        photos,
        setDisplayModal,
        topics,
        favPhoto,
        addFav,
        onLoadTopic,
        reLoad,
        isFavPhotoExist,
        dark,
        setDarkMode,
        searchText,
        setSearchText } = props;

    return (
        <div className={`home-route ${dark}`}>
            <TopNavigation
                topics={topics}
                isFavPhotoExist={isFavPhotoExist}
                onLoadTopic={onLoadTopic}
                reLoad={reLoad}
                dark={dark}
                setDarkMode={setDarkMode}
            />
            <div className={`search-bar ${dark}`}>
                <input type="text" value={searchText} onChange={e => setSearchText(e.target.value)} placeholder='Search' />
            </div>
            <PhotoList
                photos={photos}
                addFav={addFav}
                setDisplayModal={setDisplayModal}
                favPhoto={favPhoto}
                dark={dark}
            />
        </div>
    );
};

export default HomeRoute;
