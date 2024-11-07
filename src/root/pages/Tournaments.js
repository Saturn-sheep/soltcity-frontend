import React from 'react'
import Header from '../subParts/Header'
import Footer from '../subParts/Footer'
import PageLandingTitle from '../common/PageLandingTitle'
import TextContainerBlock from '../subParts/TextContainerBlock'
import TournamentsSwitch from '../subParts/TournamentsSwitch'
import CardComplated from '../common/CardComplated'

const complatedCardList=[
  { label: 'weekend monsters', imageSrc: ''},
  { label: 'dracula cup', imageSrc: ''},
  { label: 'fabulous weekend', imageSrc: ''},
]

function Tournaments() {
  return (
    <div>
      <Header />
      <PageLandingTitle title={'Tournaments'} />
      <TournamentsSwitch />
      {
        complatedCardList.map((item, index) => 
          <CardComplated title={item.label} key={`${item.label}_${index}`} />
        )
      }
      <TextContainerBlock />
      <Footer />
    </div>
  )
}

export default Tournaments