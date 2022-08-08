import React from 'react';

// import Banner from '../components/banner/Banner';
import Card from '../components/cards/Card';
import Revamp from '../components/revampBanner/Revamp';
import Footer from '../components/footer/Footer';

export const Page = () => {
  return (
    <div className="cmp-page-layout">
    <Revamp />
    <Card />
    <Footer />
  </div>
  );
};
