import React from 'react';
import { FormattedMessage } from 'react-intl';
import footballIcon from '../../assets/images/football-icon.png';
import travelIcon from '../../assets/images/travel-icon.png';
import musicIcon from '../../assets/images/music-icon.png';
import PopularTopic from './PopularTopic';

const HomeEmptyState = () => (
  <div className="empty-state-menu-container">
    <div className="empty-state-text-container">
      <span className="empty-state-text">
        <FormattedMessage id="home.emptyState" />
      </span>
    </div>
    <div className="popular-targets-section">
      <span className="popular-targets-text">
        <FormattedMessage id="home.popularTargets" />
      </span>
      <div className="popular-targets-container">
        <PopularTopic imageSrc={footballIcon} altText="Football icon" topicText="Football" />
        <PopularTopic imageSrc={travelIcon} altText="Travel icon" topicText="Travel" />
        <PopularTopic imageSrc={musicIcon} altText="Music icon" topicText="Music" />
      </div>
    </div>
  </div>
);

export default HomeEmptyState;
