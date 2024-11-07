import React from 'react';

import Header from '../subParts/Header';
import Footer from '../subParts/Footer';
import MainSwiper from '../subParts/MainSwiper';
import PartSwiper from '../subParts/PartSwiper';
import AppInstallPart from '../subParts/AppInstallPart';
import DoublePartSwiper from '../subParts/DoublePartSwiper';
import JackpotPlayPart from '../subParts/JackpotPlayPart';

function TestComponent() {
  return (
    <div>
      {/* asdfasdfasfdasdfasfdasfdasdfasfdasfd */}
        <JackpotPlayPart />
        <MainSwiper />
        <PartSwiper />
        <AppInstallPart />
        <DoublePartSwiper />
        {/* <Header /> */}
        {/* <Footer /> */}
        
    </div>
  )
}

export default TestComponent