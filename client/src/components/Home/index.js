import { Fragment } from "react";

import RecommendedCategories from "./RecommendedCategories";
import Wall from "./Wall";

const Home = () => {
  console.log("inside home");

  return (
    <Fragment>
      <RecommendedCategories />
      <Wall />
    </Fragment>
  );
};

export default Home;
