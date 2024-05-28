import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topics, openTopic }) => {
    return (
        <div className="top-nav-bar__topic-list">
            {topics.map((topic) => (
                <TopicListItem key={topic.id} data={topic} openTopic={openTopic} />
            ))}
        </div>
    );
};

export default TopicList;
