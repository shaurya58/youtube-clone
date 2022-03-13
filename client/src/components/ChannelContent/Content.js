import React, { useState } from 'react';

import Tabs from '../Tabs';
import Table from '../Table';
import TrendingVideo from '../TrendingVideo';

import classes from './Dashboard/Dashboard.module.css';

const tabs = [
  { value: 'uploads', label: 'Uploads' },
  { value: 'live', label: 'Live' },
];

const data = [
  {
    video: {
      title: 'WandaVision',
      subtitle: 'Scarlet Witch, Vision',
      description: 'Elisabeth Olsen',
    },
    visibility: 'Public',
    restrictions: '-',
    date: 'Nov 19, 2021',
    views: '5',
    comments: 'First comment',
    likes: '5',
  },
  {
    video: {
      title: 'Loki',
      subtitle: 'The God of Mischief',
      description: 'Time keepers',
    },
    visibility: 'Public',
    restrictions: '-',
    date: 'Nov 13, 2021',
    views: '1',
    comments: 'Second comment',
    likes: '2',
  },
  {
    video: {
      title: 'Fauda',
      subtitle: 'Starring Lior Raz',
      description: 'Mafhoom habibi yalla',
    },
    visibility: 'Public',
    restrictions: '-',
    date: 'Oct 17, 2021',
    views: '58',
    comments: 'Third comment',
    likes: '58',
  },
  {
    video: {
      title: 'Money Heist',
      subtitle: 'Bella Ciao',
      description: 'Created by Alex Pina',
    },
    visibility: 'Public',
    restrictions: '-',
    date: 'June 29, 2021',
    views: '29',
    comments: 'Fourth comment',
    likes: '29',
  },
  {
    video: {
      title: 'Arrow',
      subtitle: 'The Green Arrow',
      description: 'Honor thy father',
    },
    visibility: 'Public',
    restrictions: '-',
    date: 'Nov 8, 2021',
    views: '14',
    comments: 'Fifth comment',
    likes: '14',
  },
];

const columns = [
  {
    title: 'Video',
    field: 'video',
    render: (data, style) => <TrendingVideo data={data} style={style} />,
    colStyle: {
      padding: '0.5rem 0.25rem 0.5rem 0',
      height: '5rem',
    },
    sortable: false,
    isNumeric: false,
  },
  {
    title: 'Visibility',
    field: 'visibility',
    sortable: false,
    isNumeric: false,
  },
  {
    title: 'Restrictions',
    field: 'restrictions',
    sortable: false,
    isNumeric: false,
  },
  {
    title: 'Date',
    field: 'date',
    sortable: true,
  },
  {
    title: 'Views',
    field: 'views',
    sortable: true,
    isNumeric: true,
  },
  {
    title: 'Comments',
    field: 'comments',
  },
  {
    title: 'Likes (vs. dislikes)',
    field: 'likes',
    sortable: true,
    isNumeric: true,
  },
];

const Content = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].value);

  const handleTabChange = (event, value) => {
    setSelectedTab(value);
  };

  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      <div className={classes.titleBar} style={{ paddingTop: '2rem' }}>
        <span className={classes.title}>Channel content</span>
      </div>
      <Tabs
        className={classes.tabs}
        selectedTab={selectedTab}
        options={tabs}
        onTabClick={handleTabChange}
        styleProps={{
          tabClassName: classes.tab,
          activeTabClassName: classes.active,
          indicatorClassName: classes.indicator,
        }}
      />
      <Table
        data={data}
        columns={columns}
        showToolbar={false}
        enableRowSelection={true}
        emptyRowsMessage='Your playlists will appear here.'
      />
    </div>
  );
};

export default Content;
