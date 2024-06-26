import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topics, onLoadTopic, dark }) => {
    return (
        <div className="top-nav-bar__topic-list">
            {topics.map((topic) => (
                <TopicListItem key={topic.id} data={topic} onLoadTopic={onLoadTopic} dark={dark} />
            ))}
        </div>
    );
};

export default TopicList;
