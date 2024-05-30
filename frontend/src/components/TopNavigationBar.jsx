import React from 'react';

import '../styles/TopNavigationBar.scss'
import '../styles/DarkModeIcon.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import MoonIcon from './MoonIcon';
import SunIcon from './SunIcon';

const TopNavigation = ({ topics, isFavPhotoExist, onLoadTopic, reLoad, dark, setDarkMode }) => {
    const isDarkMode = dark === 'dark';
    return (
        <div className={`top-nav-bar ${dark}`}>
            <span className={`top-nav-bar__logo ${dark}`} onClick={() => reLoad()}>PhotoLabs</span>
            <TopicList topics={topics} onLoadTopic={onLoadTopic} dark={dark} />
            <FavBadge isFavPhotoExist={isFavPhotoExist} />
            {isDarkMode ? <span className='sun-icon' onClick={() => setDarkMode('')}><SunIcon /></span>
                : <span className='moon-icon' onClick={() => setDarkMode('dark')}><MoonIcon /></span>}
        </div>
    )
}

export default TopNavigation;