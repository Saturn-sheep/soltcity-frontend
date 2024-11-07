import { Box, Container, Grid2 } from '@mui/material';
import React from 'react';
import '@fontsource/roboto/700.css';
import { Link } from "react-router-dom";

import { stylesheep } from '../styles/stylesheep';
import { IoGift } from "react-icons/io5";
import { Button } from '@material-tailwind/react';
import GoogleIcon from '@mui/icons-material/Google';

function Header(props) {
  const { signBtnClick, registerClick } = props;
  return (
    <header className='sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-black'>
      <Container maxWidth="lg">
        <Grid2 sx={stylesheep.header} container columns={24} className="text-white">
          <Grid2 size={8} className="text-xl flex items-center">
            <Link to="/">
              <Box className="flex items-center p-2 rounded-md hover:bg-[#1e1807]">
                <IoGift size={28} color='#dbab31' />
                <span className='text-base font-semibold'>&nbsp;200,000$ + 500$</span>
              </Box>
            </Link>
          </Grid2>
          <Grid2 size={8} className="flex items-center  justify-center">
            <img src="/img/logo/logo.svg" alt="logo" className="logo__img" data-v-f08aeafc="" style={stylesheep.logo} />
          </Grid2>
          <Grid2 size={8} className="flex items-center justify-end">
            <Box>
              <Button className='p-3 rounded-full hover:bg-[#333333]'>
                <GoogleIcon />
              </Button>
              &nbsp;
              or
              &nbsp;
              <Button size='md' className='bg-[#dbab31] text-md p-3 capitalize font-light' onClick={signBtnClick}>sign in</Button>
              &nbsp;&nbsp;
              <Button className='bg-[#018843]  text-md p-3 capitalize font-light' onClick={registerClick}>Registration</Button>
            </Box>

          </Grid2>
        </Grid2>
      </Container>
    </header>
  )
}

export default Header