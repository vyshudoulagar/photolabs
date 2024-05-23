import React from 'react';

import './App.scss';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';
import TopNavigation from 'components/TopNavigationBar';

// Note: Rendering a single component to build components in isolation

const App = () => {

    return (
        <div className="App">
            {/* {Array.from(Array(3)).map((_, index) => (
                <div key={index} className='photo-list'>
                    <PhotoListItem data={sampleDataForPhotoListItem} />
                </div>
            ))} */}
            <TopNavigation />
            <PhotoList />
        </div>
    );
};

export default App;
