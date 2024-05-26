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
                setDisplayModal={onPhotoSelect}
                topics={topics}
                favPhoto={state.favPhoto}
                addFav={updateToFavPhotoIds}
            />
            {state.displayModal && <PhotoDetailsModal displayModal={state.displayModal} closeDisplayModal={onClosePhotoDetailsModal} addFav={addFav} favPhoto={favPhoto} />}
        </div>
    );
};

export default App;
