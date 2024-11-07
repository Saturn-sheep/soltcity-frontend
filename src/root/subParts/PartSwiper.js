import React from 'react';
import { Box, Container, Grid2 } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';

import SwiperCard from '../common/SwiperCard';
import { stylesheep } from '../styles/stylesheep';
import SimpleGateCard from '../common/SimpleGateCard';
import { Button } from '@material-tailwind/react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const TopGames = [
  {
    href: "/img/dashboard/blackjack_58_emerald.webp",
    name: "GATES OF OLYMPUS 1000",
  },
  {
    href: "https://slotscity.ua/cdn-cgi/image/format=webp,quality=80/static/img/icons/Pragmaticplay/pr_gates_of_olympus_1000.gif",
    name: "GATES OF OLYMPUS 1000",
  },
  {
    href: "https://slotscity.ua/cdn-cgi/image/format=webp,quality=80/static/img/icons/Pragmaticplay/pr_gates_of_olympus_1000.gif",
    name: "GATES OF OLYMPUS 1000",
  },
  {
    href: "https://slotscity.ua/cdn-cgi/image/format=webp,quality=80/static/img/icons/Pragmaticplay/pr_gates_of_olympus_1000.gif",
    name: "GATES OF OLYMPUS 1000",
  },
  {
    href: "https://slotscity.ua/cdn-cgi/image/format=webp,quality=80/static/img/icons/Pragmaticplay/pr_gates_of_olympus_1000.gif",
    name: "GATES OF OLYMPUS 1000",
  },
  {
    href: "https://slotscity.ua/cdn-cgi/image/format=webp,quality=80/static/img/icons/Pragmaticplay/pr_gates_of_olympus_1000.gif",
    name: "GATES OF OLYMPUS 1000",
  },
  {
    href: "https://slotscity.ua/cdn-cgi/image/format=webp,quality=80/static/img/icons/Pragmaticplay/pr_gates_of_olympus_1000.gif",
    name: "GATES OF OLYMPUS 1000",
  },

  {
    href: "https://slotscity.ua/cdn-cgi/image/format=webp,quality=80/static/img/icons/Pragmaticplay/pr_gates_of_olympus_1000.gif",
    name: "GATES OF OLYMPUS 1000",
  },
  {
    href: "https://slotscity.ua/cdn-cgi/image/format=webp,quality=80/static/img/icons/Pragmaticplay/pr_gates_of_olympus_1000.gif",
    name: "GATES OF OLYMPUS 1000",
  },
  {
    href: "https://slotscity.ua/cdn-cgi/image/format=webp,quality=80/static/img/icons/Pragmaticplay/pr_gates_of_olympus_1000.gif",
    name: "GATES OF OLYMPUS 1000",
  },
];

function PartSwiper() {
  return (
    <Container maxWidth="lg">
      <div className='flex justify-between'>
        <div className='flex uppercase text-white text-bold font-bold items-center'>
          <img src='/img/dashboard/top.webp' style={{height: '30px'}} />&nbsp;top
        </div>
        <div>
          <Button className='flex items-center justify-center normal-text' endIcon={<ArrowForwardIosIcon />}>
            All of them
          </Button>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={6}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={{ hideOnClick: true, enabled: true, nextEl: 'kkk', prevEl: 'mmm' }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className='p-3'
      >
        {TopGames.map((items, index) =>
          <SwiperSlide key={`${index}_TopGames`}>
            <SimpleGateCard items={[items]} />
          </SwiperSlide>
        )}

      </Swiper>
    </Container>
  )
}

export default PartSwiper