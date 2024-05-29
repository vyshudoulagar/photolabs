import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = ({topics, isFavPhotoExist, onLoadTopic, reLoad}) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={() => reLoad()}>PhotoLabs</span>
      <TopicList topics={topics} onLoadTopic={onLoadTopic} />
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  )
}

export default TopNavigation;