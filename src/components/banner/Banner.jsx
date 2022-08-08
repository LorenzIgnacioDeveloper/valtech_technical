import React from "react";
import bannerImg from '../../assets/img/banner.jpg'
import '../banner/banner.scss'


const Banner = () => {
  return (
    <div className="cmp-banner">
      <img
        className="cmp-banner--background"
        src={bannerImg}
        alt="background"
      />
      <div className="cmp-banner--container">
        <h2 className="cmp-banner--container-pretitle">\ˈfrənt-ˌend'\</h2>
        <h1 className="cmp-banner--container-title">
          valtech_
        </h1>
        <div className='cmp-banner--container-description'>
            We are a global digital company made up of innovators who develop and create as a way of life. The richness of perspectives at Valtech is derived from our incredible diversity.
          </div>
      </div>
    </div>
  );
};

export default Banner;
