import { Button } from '@material-tailwind/react'
import { Box, Container, Grid2 } from '@mui/material'
import React from 'react'

function JackpotPlayPart() {
  return (
    <Container maxWidth="lg" className='my-3'>
      <Box sx={{ backgroundImage: 'linear-gradient(to right, #2c2c45, #a92c95, #e20f50, #a1135b, #1a131b, #121215, #121215)'}} className="p-5 rounded-2xl">
        <Box sx={{ backgroundImage: 'url(/img/dashboard/mobile.webp)', backgroundRepeat: 'no-repeat' }} className="flex justify-end">
          <Grid2 container columns={24} maxWidth={'650px'} className="rounded-lg">
            <Grid2 size={24} className="p-2 bg-black flex justify-center rounded-t-2xl" >
              <img src='/img/dashboard/pragmatic.b1965a1.svg' />
            </Grid2>
            <Grid2 size={24} container columns={24} sx={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
              <Grid2 size={6} className="flex justify-center items-center py-8">
                <div className='uppercase'>
                  <div className='flex font-bold text-white text-[18px] justify-center items-center'><img src='/img/dashboard/a.webp' style={{height: '20px'}} /> grand</div>
                  <div className='text-[24px] text-bold font-bold text-[#dbab31]'>371 174₴</div>
                </div>
              </Grid2>
              <Grid2 size={6} className="flex justify-center items-center">
                <div className='uppercase'>
                  <div className='flex font-bold text-white text-[18px] justify-center items-center'><img src='/img/dashboard/a.webp' style={{height: '20px'}} /> grand</div>
                  <div className='text-[24px] text-white text-bold font-bold text-[#dbab31]'>371 174₴</div>
                </div>
              </Grid2>
              <Grid2 size={6} className="flex justify-center items-center">
                <div className='uppercase'>
                  <div className='flex font-bold text-white text-[18px] justify-center items-center'><img src='/img/dashboard/a.webp' style={{height: '20px'}} /> grand</div>
                  <div className='text-[24px] text-white text-bold font-bold text-[#dbab31]'>371 174₴</div>
                </div>
              </Grid2>
              <Grid2 size={6} className="flex justify-center items-center">
                <div className='uppercase'>
                  <div className='flex font-bold text-white text-[18px] justify-center items-center'><img src='/img/dashboard/a.webp' style={{height: '20px'}} /> grand</div>
                  <div className='text-[24px] text-white text-bold font-bold text-[#dbab31]'>371 174₴</div>
                </div>
              </Grid2>
            </Grid2>
            <Grid2 size={24} sx={{ backgroundColor: 'rgba(0,0,0,0.7)' }} className="pb-6 flex justify-center rounded-b-2xl" >
              <Button  color="green" className='py-3 px-9'  variant="contained" >Take part</Button>
            </Grid2>
          </Grid2>

        </Box>
      </Box>
    </Container>
  )
}

export default JackpotPlayPart