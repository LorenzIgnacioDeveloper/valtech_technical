import React from "react";
// import Banner from "./components/banner/Banner";
import Revamp from "./components/revampBanner/Revamp";
import Card from "./components/cards/Card";
import FooterItems from "./components/footer/Footer";
import "./index.css";
import './style/mixins.scss';

const App = () => {
  return (
    <div className="cmp-page-layout">
      <Revamp />
      <Card />
      <FooterItems/>
    </div>
  );
};

export default App;
