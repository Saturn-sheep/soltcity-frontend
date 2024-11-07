import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css/pagination';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import 'swiper/css';

import { Box, Container, Grid2 } from '@mui/material';

import SwiperCard from '../common/SwiperCard';
import { stylesheep } from '../styles/stylesheep';
import { Button } from '@material-tailwind/react';


function MainSwiper() {
  return (
    <Container maxWidth="lg" className='my-3'>
      <Box className="rounded-2xl border border-[#eeeeee] px-5">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          rewind={true}
        >
          <SwiperSlide>
            <SwiperCard />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperCard />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperCard />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperCard />
          </SwiperSlide>
        </Swiper>
        {/* <Box className='row columns-1 bg-white' sx={stylesheep.padding24}>
        <div>
          <div>Promotions for players</div>
        </div>
      </Box> */}
      </Box>
    </Container>
  )
}

export default MainSwiper;

