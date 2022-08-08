import React, { useState } from "react";
// local components
import AllCards from "./AllCards";
import CentralEurope from "./CentralEurope";
import SouthernEurope from "./NorthernEurope";
import NorthernEurope from "./SouthernEurope";
import './cards.scss';
import '../../style/mixins.scss';

const Card = () => {
  const [tab, setTab] = useState(1);

  const toggleTab = (index) => {
    setTab(index);
  };

  return (
    <div className="cmp-card-filter">
      {/* top tabs */}
      <div className="cmp-card-filter--container">
        <div
          className={`cmp-card-filter--container-tab-menu ${tab === 1 ? `cmp-card-filter--container-active` : ``}`}
          onClick={() => toggleTab(1)}
        >
          <span>All</span>
        </div>
        <div
          className={`cmp-card-filter--container-tab-menu ${tab === 2 ? `cmp-card-filter--container-active` : ``}`}
          onClick={() => toggleTab(2)}
        >
          <span>Central Europe</span>
        </div>
        <div
          className={`cmp-card-filter--container-tab-menu ${tab === 3 ? `cmp-card-filter--container-active` : ``}`}
          onClick={() => toggleTab(3)}
        >
          <span>Southern Europe</span>
        </div>
        <div
          className={`cmp-card-filter--container-tab-menu ${tab === 4 ? `cmp-card-filter--container-active` : ``}`}
          onClick={() => toggleTab(4)}
        >
          <span>Northern Europe</span>
        </div>
      </div>
      {/* content */}
      {tab === 1 ? <AllCards /> : null}
      {tab === 2 ? <CentralEurope /> : null}
      {tab === 3 ? <SouthernEurope /> : null}
      {tab === 4 ? <NorthernEurope /> : null}
    </div>
  );
};

export default Card;
