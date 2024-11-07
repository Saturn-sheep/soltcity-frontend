import { Box, Grid2, Container } from '@mui/material';
import React from 'react';
import { GooglePlayButton, AppStoreButton, ButtonsContainer } from "react-mobile-app-button";

function AppInstallPart() {
  const APKUrl = "https://play.google.com/store/apps/details?id=host";
  const IOSUrl = "https://apps.apple.com/us/app/expo-go/id982107779";

  return (
    <Container maxWidth="lg" className='my-3'>
      <Box maxWidth={'lg'} className='py-3'>
        <Box sx={{ backgroundImage: 'linear-gradient(to right, #0c0c0f,#0c0c0f,#0c0c0f, #0c0c0f, #2b0f25, #791439 )' }} className="rounded-lg border border-[#eeeeee]">
          <Grid2 container columns={24} className=" p-4 mr-8" sx={{ backgroundImage: "url(/img/dashboard/main-promotion-desktop.webp)", backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center right' }}>
            <Grid2 size={6}>
              <div className='font-bold text-[14px] text-white'>Install App</div>
              <div className='font-bold text-[18px] text-[#dbab31] uppercase'>bring fun with you</div>
            </Grid2>
            <Grid2 size={18}>
              <ButtonsContainer>
                <GooglePlayButton
                  url={APKUrl}
                  theme={"dark"}
                />
                <AppStoreButton
                  url={APKUrl}
                  theme={"dark"}
                />
              </ButtonsContainer>
            </Grid2>
          </Grid2>
        </Box>
      </Box>
    </Container>
  )
}

export default AppInstallPart