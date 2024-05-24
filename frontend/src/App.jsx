import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation

const App = () => {
    const photoClick = () => {
        return true;
    }
    return (
        <div className="App">
            <HomeRoute photos={photos} photoClick={photoClick} topics={topics} />
            {photoClick && <PhotoDetailsModal />}
        </div>
    );
};

export default App;
