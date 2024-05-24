import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation

const App = () => {
    const [displayModal, setDisplayModal] = useState(null);
    const [favPhoto, setFavPhoto] = useState([]);
    const handleClick = (id) => {
        setFavPhoto(prevFavPhoto => prevFavPhoto.includes(id)
            ? prevFavPhoto.filter(photoId => photoId !== id)
            : [...prevFavPhoto, id]);
    }

    return (
        <div className="App">
            <HomeRoute
                photos={photos}
                setDisplayModal={setDisplayModal}
                topics={topics}
                favPhoto={favPhoto}
                handleClick={handleClick}
            />
            {displayModal && <PhotoDetailsModal displayModal={displayModal} setDisplayModal={setDisplayModal} onClick={handleClick} />}
        </div>
    );
};

export default App;
