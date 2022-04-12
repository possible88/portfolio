import React, { useEffect } from "react";
import HomeImage from "./HomeImage";
import HomeText from "./HomeText";
import Skill from "./Skill";

const Home = ({ pics }) => {
  
  useEffect(() => {
    document.title = "Nwokeukwu Ernest || Portfolio";
  }, []);

  return (
    <div className="parent">
      <div className="homepage">
        <HomeText />
        <HomeImage pics={pics} />
      </div>
      <hr />
      <Skill />
    </div>
  );
};

export default Home;
