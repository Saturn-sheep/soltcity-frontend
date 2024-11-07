import React, { useState } from 'react';
import Header from '../subParts/Header';
import MainSwiper from '../subParts/MainSwiper';
import DoublePartSwiper from '../subParts/DoublePartSwiper';
import AppInstallPart from '../subParts/AppInstallPart';
import PartSwiper from '../subParts/PartSwiper';
import JackpotPlayPart from '../subParts/JackpotPlayPart';
import Footer from '../subParts/Footer';
import LoginModal from './LoginModal';
import { Button } from '@material-tailwind/react';

function Dashboard() {
  const [modalStatus, setModalStatus] = useState('none');

  return (
    <div>
      <Header signBtnClick={() => { setModalStatus('login'); }} registerClick={() => { setModalStatus('register'); }} />
      <MainSwiper />
      <DoublePartSwiper />
      <AppInstallPart />
      <PartSwiper />
      <JackpotPlayPart />
      <PartSwiper />
      <Footer />
      <LoginModal modalStatus={modalStatus} setModalStatus={ setModalStatus } />
    </div>
  )
}

export default Dashboard