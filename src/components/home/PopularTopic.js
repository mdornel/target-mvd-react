import React from 'react';
import { string } from 'prop-types';

const PopularTopic = (props) => {
  const { imageSrc, altText, topicText } = props;

  return (
    <div>
      <img src={imageSrc} alt={altText} />
      <span> {topicText} </span>
    </div>
  );
};

PopularTopic.propTypes = {
  imageSrc: string.isRequired,
  altText: string.isRequired,
  topicText: string.isRequired
};

export default PopularTopic;
