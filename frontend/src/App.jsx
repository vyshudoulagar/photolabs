import React from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation

const App = () => {
    const {
        state,
        onPhotoSelect,
        updateToFavPhotoIds,
        onLoadTopic,
        onClosePhotoDetailsModal,
        reLoad,
        setDarkMode,
        setSearchText
    } = useApplicationData();

    // returns boolean to determine if notification is displayed or not
    const isFavPhotoExist = state.favPhoto.length > 0;

    return (
        <div className="App">
            <HomeRoute
                photos={state.photoData}
                setDisplayModal={onPhotoSelect}
                topics={state.topicData}
                favPhoto={state.favPhoto}
                addFav={updateToFavPhotoIds}
                onLoadTopic={onLoadTopic}
                reLoad={reLoad}
                isFavPhotoExist={isFavPhotoExist}
                dark={state.dark}
                setDarkMode={setDarkMode}
                setSearchText={setSearchText}
            />
            {state.displayModal && <PhotoDetailsModal
                photos={state.photoData}
                setDisplayModal={onPhotoSelect}
                displayModal={state.displayModal}
                closeDisplayModal={onClosePhotoDetailsModal}
                addFav={updateToFavPhotoIds}
                favPhoto={state.favPhoto}
                dark={state.dark}
            />}
        </div>
    );
};

export default App;
