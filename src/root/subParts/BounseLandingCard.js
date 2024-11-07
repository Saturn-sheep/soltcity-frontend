import { Button } from '@material-tailwind/react'
import { Box, Container } from '@mui/material'
import React from 'react'

function BounseLandingCard() {
  return (
    <Container maxWidth='lg'>
      <Box className="flex justify-center flex-col items-center">
        <div className='text-center text-white text-[40px] font-bold'>Bounsese</div>
        <Box className='border rounded-2xl'>
          <div style={{ width: '590px', height: '350px', backgroundImage: 'url(/img/dashboard/512_512_WelcomeBonus_2024-2.webp)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className='flex items-end'>
            <div className='uppercase text-white text-[18px] font-bold flex-1 px-5 pt-3' style={{backgroundColor: 'rgba(0,0,0,0.9)'}}>to new players</div>
          </div>
          <div className='flex justify-between text-[#dbab31] text-[30px] font-bold p-5 pt-0'>
            <div>
              <span>200,000₴ + 500 FS</span>
            </div>
            <div className='relative top-[-10px] '><Button size='lg' className='bg-[#dbab31] text-black px-3'>More details</Button></div>
          </div>
        </Box>
      </Box>
    </Container>
  )
}

export default BounseLandingCard