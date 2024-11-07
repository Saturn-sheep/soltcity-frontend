import React from 'react'
import Header from '../subParts/Header'
import Footer from '../subParts/Footer'
import PageLandingTitle from '../common/PageLandingTitle'
import RuleContents from '../subParts/RuleContents'

function Rules() {
  return (
    <div>
      <Header />
      <PageLandingTitle title="terms and condition" />
      <RuleContents />
      <Footer />
    </div>
  )
}

export default Rules