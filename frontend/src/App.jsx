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
        reLoad
    } = useApplicationData();

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
            />
            {state.displayModal && <PhotoDetailsModal
                setDisplayModal={onPhotoSelect}
                displayModal={state.displayModal}
                closeDisplayModal={onClosePhotoDetailsModal}
                addFav={updateToFavPhotoIds}
                favPhoto={state.favPhoto}
            />}
        </div>
    );
};

export default App;
