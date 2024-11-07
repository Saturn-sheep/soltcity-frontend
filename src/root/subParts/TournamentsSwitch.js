import { Box, Container } from '@mui/material';
import { ButtonGroup, Button } from "@material-tailwind/react";

import React from 'react';

function TournamentsSwitch() {
  return (
    <Container maxWidth="lg">
      <Box>
        <div className='flex items-center justify-center my-5'>
          <div size="md" className='rounded-full bg-[#212121] p-1' >
            <Button className='rounded-full text-white bg-[#313131]' variant="text">All</Button>
            <Button className='rounded-full text-[#767676]' variant="text">Active</Button>
            <Button className='rounded-full text-[#767676]' variant="text">Planned</Button>
            <Button className='rounded-full text-[#767676]' variant="text">Complated</Button>
          </div>
        </div>
      </Box>
    </Container>
  )
}

export default TournamentsSwitch