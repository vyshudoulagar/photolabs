import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ data, onLoadTopic }) => {
  return (
    <div className="topic-list__item" onClick={() => onLoadTopic(data.id)}>
      <span>{data.title}</span>
    </div>
  );
};

export default TopicListItem;
