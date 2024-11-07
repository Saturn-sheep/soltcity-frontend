import { Container } from '@mui/material'
import React from 'react'

function PageLandingTitle(props) {
  return (
    <Container maxWidth="lg">
      <div>
        <div className='text-center text-white text-[40px] font-bold uppercase'>{props.title}</div>
      </div>
    </Container>
  )
}

export default PageLandingTitle