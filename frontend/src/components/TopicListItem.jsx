import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ data, openTopic }) => {
  return (
    <div className="topic-list__item" onClick={openTopic(data.id)}>
      {data.title}
    </div>
  );
};

export default TopicListItem;
