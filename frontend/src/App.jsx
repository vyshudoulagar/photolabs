import React from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';

// Note: Rendering a single component to build components in isolation

const App = () => {

    return (
        <div className="App">
            {/* {Array.from(Array(3)).map((_, index) => (
                <div key={index} className='photo-list'>
                    <PhotoListItem data={sampleDataForPhotoListItem} />
                </div>
            ))} */}
            <HomeRoute />
        </div>
    );
};

export default App;
