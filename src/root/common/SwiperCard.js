import React from 'react';

import { Box, Container, Grid2 } from '@mui/material';
import { stylesheep } from '../styles/stylesheep';
import { Button } from '@material-tailwind/react';

function SwiperCard(props) {
  return (
    <Box maxWidth="lg">
      <Grid2 container columns={24}>
        <Grid2 size={16} className="py-16">
          <div className='text-[32px] text-white uppercase font-bold'>new players</div>
          <div className='text-[56px] font-bold text-[#dbab31] uppercase'>subscribe the telegram</div>
          <Button className='bg-[#dbab31] rounded-full normal-case text-[black] p-3' size='lg'>More details</Button>
        </Grid2>
        <Grid2 size={8} className="flex">
          <Box sx={{ ...stylesheep.mainSwiperRightBackgroundImage, backgroundImage: "url(/img/dashboard/512_512.webp)"}} className="flex-1"></Box>
        </Grid2>
      </Grid2>
    </Box>
  )
}

export default SwiperCard