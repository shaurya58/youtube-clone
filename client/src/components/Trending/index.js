import React, { useState } from 'react';

import Tabs from '../Tabs';
import TrendingVideo from '../TrendingVideo';

import trendingIcon from '../../assets/trending.png';

import classes from './Trending.module.css';

const tabs = [
  { value: 'now', label: 'NOW' },
  { value: 'music', label: 'MUSIC' },
  { value: 'gaming', label: 'GAMING' },
  { value: 'films', label: 'FILMS' },
];

const Trending = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].value);

  const handleTabChange = (event, value) => {
    setSelectedTab(value);
  };

  return (
    <div>
      <div className={classes.header}>
        <div className={classes.title}>
          <img className={classes.icon} src={trendingIcon} />
          Trending
        </div>
        <Tabs
          className={classes.tabs}
          options={tabs}
          selectedTab={selectedTab}
          onTabClick={handleTabChange}
          styleProps={{
            tabClassName: classes.tab,
            activeTabClassName: classes.active,
            indicatorClassName: classes.indicator,
          }}
        />
      </div>
      <div className={classes['videos-list']}>
        <TrendingVideo
          rootProps={{ width: '60%', height: '8rem' }}
          previewProps={{ width: '30%' }}
          titleProps={{ fontSize: '1.1rem', color: 'white' }}
          subtitleProps={{ fontSize: '0.9rem', color: '#a0a0a0' }}
          descriptionProps={{ fontSize: '0.9rem', color: '#a0a0a0' }}
          data={{
            title: 'Arrow',
            subtitle: 'The Green Arrow',
            description: 'Honor thy father',
          }}
        />
        <TrendingVideo
          rootProps={{ width: '60%', height: '8rem' }}
          previewProps={{ width: '30%' }}
          titleProps={{ fontSize: '1.1rem', color: 'white' }}
          subtitleProps={{ fontSize: '0.9rem', color: '#a0a0a0' }}
          descriptionProps={{ fontSize: '0.9rem', color: '#a0a0a0' }}
          data={{
            title: 'Arrow',
            subtitle: 'The Green Arrow',
            description: 'Honor thy father',
          }}
        />
        <TrendingVideo
          rootProps={{ width: '60%', height: '8rem' }}
          previewProps={{ width: '30%' }}
          titleProps={{ fontSize: '1.1rem', color: 'white' }}
          subtitleProps={{ fontSize: '0.9rem', color: '#a0a0a0' }}
          descriptionProps={{ fontSize: '0.9rem', color: '#a0a0a0' }}
          data={{
            title: 'Money Heist',
            subtitle: 'Bella Ciao',
            description: 'Created by Alex Pina',
          }}
        />
        <TrendingVideo
          rootProps={{ width: '60%', height: '8rem' }}
          previewProps={{ width: '30%' }}
          titleProps={{ fontSize: '1.1rem', color: 'white' }}
          subtitleProps={{ fontSize: '0.9rem', color: '#a0a0a0' }}
          descriptionProps={{ fontSize: '0.9rem', color: '#a0a0a0' }}
          data={{
            title: 'Fauda',
            subtitle: 'Starring Lior Raz',
            description: 'Mafhoom habibi yalla',
          }}
        />
        <TrendingVideo
          rootProps={{ width: '60%', height: '8rem' }}
          previewProps={{ width: '30%' }}
          titleProps={{ fontSize: '1.1rem', color: 'white' }}
          subtitleProps={{ fontSize: '0.9rem', color: '#a0a0a0' }}
          descriptionProps={{ fontSize: '0.9rem', color: '#a0a0a0' }}
          data={{
            title: 'Loki',
            subtitle: 'The God of Mischief',
            description: 'Time keepers',
          }}
        />
        <TrendingVideo
          rootProps={{ width: '60%', height: '8rem' }}
          previewProps={{ width: '30%' }}
          titleProps={{ fontSize: '1.1rem', color: 'white' }}
          subtitleProps={{ fontSize: '0.9rem', color: '#a0a0a0' }}
          descriptionProps={{ fontSize: '0.9rem', color: '#a0a0a0' }}
          data={{
            title: 'WandaVision',
            subtitle: 'Scarlet Witch, Vision',
            description: 'Elisabeth Olsen',
          }}
        />
        {/* <TrendingVideo />
        <TrendingVideo /> */}
      </div>
    </div>
  );
};

export default Trending;
