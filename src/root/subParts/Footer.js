import React from 'react';
import '@fontsource/roboto/700.css';
import { Box, Container, Grid2 } from '@mui/material';
import { Button, Select, Typography } from '@material-tailwind/react';
import { GooglePlayButton, AppStoreButton, ButtonsContainer } from "react-mobile-app-button";
import { stylesheep } from '../styles/stylesheep';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import {
  WhatsappIcon,
  TelegramIcon,
} from "react-share";

const menuList = [
  { label: "Tournamenets", to: "" },
  { label: 'Rules of the game', to: '' },
  { label: 'Responsible game', to: '' },
  { label: "Bonus Machine", to: '' },
  { label: 'Terms and conditions', to: '' },
  { label: 'Intellectual property', to: '' },
  { label: 'Wheel of Fortune', to: '' },
  { label: 'Mobile application', to: '' },
  { label: 'AML Policy', to: '' },
  { label: 'Support service', to: '' },
  { label: 'To partners', to: '' },
  { label: 'Public offer contract', to: '' },
  { label: 'Questions and answers', to: '' },
  { label: 'Privacy Policy', to: '' },
];

const imageList = [
  { alt: 'visaColor', src: '/img/footer/visaColor.svg', width: '96px', height: '32px' },
  { alt: 'mastercard', src: '/img/footer/mastercard.svg', width: '54px', height: '32px' },
  { alt: 'city-24', src: '/img/footer/city-24.svg', width: '98px', height: '32px' },
  { alt: 'easypay', src: '/img/footer/easypay.svg', width: '80px', height: '32px' },
  { alt: 'apay', src: '/img/footer/applepay.svg', width: '80px', height: '32px' },
  { alt: 'gpay', src: '/img/footer/googlepay.svg', width: '80px', height: '32px' },
];

const imageFooterList = [
  { alt: '', src: '/img/footer/gamcare.svg', height: '32px', width: '40px', to: ''},
  { alt: '', src: '/img/footer/gamblingtherapy.svg', height: '32px', width: '78px', to: ''},
  { alt: '', src: '/img/footer/begambleaware.svg', height: '32px', width: '172px', to: ''},
  { alt: '', src: '/img/footer/yo21.svg', height: '32px', width: '40px', to: ''},
  { alt: '', src: '/img/footer/ssl.svg', height: '32px', width: '78px', to: ''},
  { alt: '', src: '/img/footer/dmca.svg', height: '32px', width: '172px', to: ''},
];

function Footer() {
  const APKUrl = "https://play.google.com/store/apps/details?id=host";
  const IOSUrl = "https://apps.apple.com/us/app/expo-go/id982107779";

  return (
    <footer className='pt-5'>
      <Container maxWidth="lg">
        <Grid2 container columns={24} className="text-white pt-4" >
          <Grid2 size={9} container columns={24}>
            <Grid2 size={18}>
              <Typography variant='h6' className='uppercase'>download the app</Typography>
              <Typography variant='h5' className='uppercase text-[#dbab31] font-bold'>pick up 25fs</Typography>
            </Grid2>
            <Grid2 size={24} className="scale-75 relative" sx={stylesheep.relativeRight}>
              <ButtonsContainer className="flex-1 flex">
                <GooglePlayButton
                  url={APKUrl}
                  theme={"dark"}
                  className='flex-1'
                />
                <AppStoreButton
                  url={IOSUrl}
                  theme={'dark'}
                  className='flex-1'
                />
              </ButtonsContainer>
            </Grid2>
            <Grid2 size={18}>
              <Box className='flex p-4 rounded-xl bg-[#252526] items-center justify-between my-3'>
                <Box className='m-2'>
                  <img src="/img/footer/headphones.webp" style={stylesheep.earphone} alt="" />
                </Box>
                <Box className="flex-1">
                  <div className='font-bold'>MyCity support</div>
                  <div className='font-xs text-[#a1a1a1]'>Support service</div>
                </Box>
                <Box>
                  <Button className='rounded-full p-2'>
                    <ArrowForwardIcon />
                  </Button>
                </Box>
              </Box>
              <Box>
                <Typography variant='h5' className='p-3'>Choose a language</Typography>
                <Select className='text-white ' defaultValue={"ukrain"} label='Language' placeholder="Choose one…" size="lg" variant="solid">
                  <option value="ukrain" className='hover:bg-[#dbab31] p-2' style={{marginRight: '-12px', marginLeft: '-12px'}}>Ukrain</option>
                  <option value="russion" className='hover:bg-[#dbab31] p-2' style={{marginRight: '-12px', marginLeft: '-12px'}}>Russion</option>
                </Select>
              </Box>
            </Grid2>

          </Grid2>
          <Grid2 size={15} container columns={24}>
            {menuList.map((item, index) =>
              <Grid2 key={`${item.label}_${index}`} size={8}>
                <Link to={item.to}>
                  <span className='p-3 hover:bg-[#252526] rounded-md font-bold'>{item.label}</span>
                </Link>
              </Grid2>
            )}
          </Grid2>
          <Grid2 size={10} className="mt-5 pb-4" container columns={24}>
            <Grid2 size={19} container columns={24}>
              <Grid2 size={24}>
                <div className='font-bold text-xl mb-3'>Secure verification</div>
              </Grid2>
              <Grid2 size={4}>
                <img src='/img/footer/bankId.webp' alt="" />
              </Grid2>
              <Grid2 size={1}></Grid2>
              <Grid2 size={19} className="flex items-center text-[#767676]">
                <div className='text-sm'>
                  In Slots City, you can get a quick and secure verification <b>through the BankID system</b>
                </div>
              </Grid2>
            </Grid2>
          </Grid2>
          <Grid2 size={14} className='mt-5 pb-4' container columns={24}>
            <Grid2 size={22}>
              <div className='font-bold text-xl mb-3'>Convenient transactions</div>
            </Grid2>
            <Grid2 size={22}>
              <ul className='flex justify-around'>
                { imageList.map((item, index) =>
                  <li key={`${item.alt}_${index}_li`}>
                    <img width={item.width} height={item.height} src={item.src} alt={item.alt} />
                  </li>
                )}
              </ul>
            </Grid2>
          </Grid2>
          <Grid2 size={24} className='text-[#767676] text-sm py-3'>
            <div>© 2021-2024 Slots City. All rights reserved. 13:39:54</div>
            <div>License for the organization and conduct of online casino gambling activities dated February 16, 2021 (decision No. 47 dated February 10, 2021), issued by KRAIL LLC &quot;GAIMDEV&quot;</div>
            <div>Information on the overall winning percentage (theoretical return to the player): the overall average winning percentage is at least 94%.</div>
          </Grid2>
          <Grid2 size={24} className="py-3">
            <div className='p-3 bg-[#042211] inline-block rounded-full m-2'><WhatsappIcon className='rounded-full' size="24" /></div>
            <div className='p-3 bg-[#002244] inline-block rounded-full m-2'><TelegramIcon className='rounded-full' size="24" /></div>
          </Grid2>
          <Grid2 size={24} className='pb-4'>
            <ul className='flex items-center justify-center'>
              { imageFooterList.map((item, index) =>
                <li key={`${item.alt}_${index}_imageFooterList`} className='py-3 px-6 inline-block'>
                  <Link>
                    <img src={item.src} height={'32px'} width={item.width} alt="" />
                  </Link>
                </li>
              )}
            </ul>
          </Grid2>
        </Grid2>
      </Container>
    </footer>
  )
}

export default Footer