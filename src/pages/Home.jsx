import React from "react";
import Helmet from "../components/Helmet/Helmet.js";
import PageHome from "../components/frames/home/PageHome.jsx";

const Home = () => {
  return (
    <Helmet title="Home">
      <PageHome />
    </Helmet>
  );
};

export default Home;
