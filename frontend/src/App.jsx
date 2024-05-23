import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

// Note: Rendering a single component to build components in isolation

const App = () => {

    return (
        <div className="App">
            {/* {Array.from(Array(3)).map((_, index) => (
                <div key={index} className='photo-list'>
                    <PhotoListItem data={sampleDataForPhotoListItem} />
                </div>
            ))} */}
            <HomeRoute photos={photos} topics={topics} />
        </div>
    );
};

export default App;
