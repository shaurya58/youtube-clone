import { useState } from "react";
import Sidebar from "./components/Sidebar";
import PrimaryHeader from "./components/PrimaryHeader";
import Home from "./components/Home";
import VideoView from "./components/VideoView";
import Explore from "./components/Explore";
import Trending from "./components/Trending";

import TrendingVideo from "./components/TrendingVideo";

import Films from "./components/Films";
import Sport from "./components/Sport";
import News from "./components/News";
import Live from "./components/Live";
import VirtualReality from "./components/VirtualReality";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Upload from "./components/Upload";
import ChannelContent from "./components/ChannelContent";
import Dashboard from "./components/ChannelContent/Dashboard";
import SelectInput from "./components/SelectInput";
import Table from "./components/Table";

const data = [
  {
    video: {
      title: "WandaVision",
      subtitle: "Scarlet Witch, Vision",
      description: "Elisabeth Olsen",
    },
    visibility: "Public",
    restrictions: "-",
    date: "Nov 19, 2021",
    views: "5",
    comments: "First comment",
    likes: "5",
  },
  {
    video: {
      title: "Loki",
      subtitle: "The God of Mischief",
      description: "Time keepers",
    },
    visibility: "Public",
    restrictions: "-",
    date: "Nov 13, 2021",
    views: "1",
    comments: "Second comment",
    likes: "2",
  },
  {
    video: {
      title: "Fauda",
      subtitle: "Starring Lior Raz",
      description: "Mafhoom habibi yalla",
    },
    visibility: "Public",
    restrictions: "-",
    date: "Oct 17, 2021",
    views: "58",
    comments: "Third comment",
    likes: "58",
  },
  {
    video: {
      title: "Money Heist",
      subtitle: "Bella Ciao",
      description: "Created by Alex Pina",
    },
    visibility: "Public",
    restrictions: "-",
    date: "June 29, 2021",
    views: "29",
    comments: "Fourth comment",
    likes: "29",
  },
  {
    video: {
      title: "Arrow",
      subtitle: "The Green Arrow",
      description: "Honor thy father",
    },
    visibility: "Public",
    restrictions: "-",
    date: "Nov 8, 2021",
    views: "14",
    comments: "Fifth comment",
    likes: "14",
  },
];

const columns = [
  {
    title: "Video",
    field: "video",
    render: (data, style) => <TrendingVideo data={data} style={style} />,
    colStyle: {
      padding: "0.5rem 0.25rem 0.5rem 0",
      height: "5rem",
    },
    sortable: false,
    isNumeric: false,
  },
  {
    title: "Visibility",
    field: "visibility",
    sortable: false,
    isNumeric: false,
  },
  {
    title: "Restrictions",
    field: "restrictions",
    sortable: false,
    isNumeric: false,
  },
  {
    title: "Date",
    field: "date",
    sortable: true,
  },
  {
    title: "Views",
    field: "views",
    sortable: true,
    isNumeric: true,
  },
  {
    title: "Comments",
    field: "comments",
  },
  {
    title: "Likes (vs. dislikes)",
    field: "likes",
    sortable: true,
    isNumeric: true,
  },
];

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebarState = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <div className={`App${isSidebarOpen ? " unscrollable" : ""}`}>
      {/* <PrimaryHeader onMenuBtnClick={toggleSidebarState} />
      {isSidebarOpen && <div className="backdrop" />}
      <Sidebar open={isSidebarOpen} onMenuBtnClick={toggleSidebarState} /> */}
      <Switch>
        <Route exact path="/">
          <PrimaryHeader onMenuBtnClick={toggleSidebarState} />
          {isSidebarOpen && <div className="backdrop" />}
          <Sidebar open={isSidebarOpen} onMenuBtnClick={toggleSidebarState} />
          <div className={`content${isSidebarOpen ? " contentShift" : ""}`}>
            <Route exact path="/" component={Home} />
            <Route exact path="/watch" component={VideoView} />
            <Route exact path="/explore" component={Explore} />
            <Route exact path="/trending" component={Trending} />
            <Route exact path="/films" component={Films} />
            <Route exact path="/sport" component={Sport} />
            <Route exact path="/news" component={News} />
            <Route exact path="/live" component={Live} />
            <Route exact path="/virtual-reality" component={VirtualReality} />
          </div>
        </Route>
        <Route exact path="/channel/*" component={ChannelContent} />
      </Switch>
    </div>
    // <Upload />
    // <ChannelContent />
    // <SelectInput
    //   label='Currency'
    //   options={[
    //     { value: 1, label: 'One' },
    //     { value: 2, label: 'Two' },
    //     { value: 3, label: 'Three' },
    //   ]}
    // />

    // <Table
    //   data={data}
    //   columns={columns}
    //   showToolbar={false}
    //   enableRowSelection={true}
    //   emptyRowsMessage='Your playlists will appear here.'
    // />
    /* <SelectInput
        options={[
          { value: 1, label: '1' },
          { value: 2, label: '2' },
          { value: 3, label: '3' },
          { value: 4, label: '4' },
        ]}
      /> */
  );
}

export default App;
