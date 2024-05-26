import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
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
    } = useApplicationData();

    return (
        <div className="App">
            <HomeRoute
                photos={photos}
                setDisplayModal={setDisplayModal}
                topics={topics}
                favPhoto={favPhoto}
                handleClick={handleClick}
            />
            {displayModal && <PhotoDetailsModal displayModal={displayModal} setDisplayModal={setDisplayModal} onClick={handleClick} favPhoto={favPhoto} />}
        </div>
    );
};

export default App;
