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
import DoubleGateCard from '../common/DoubleGateCard';


const TopGames = [
  [{
    href: "/img/dashboard/blackjack_58_emerald.webp",
    name: "GATES OF OLYMPUS 1000",
  },
  {
    href: "https://slotscity.ua/cdn-cgi/image/format=webp,quality=80/static/img/icons/Pragmaticplay/pr_gates_of_olympus_1000.gif",
    name: "GATES OF OLYMPUS 1000",
  }],
  [{
    href: "/img/dashboard/blackjack_58_emerald.webp",
    name: "GATES OF OLYMPUS 1000",
  },
  {
    href: "https://slotscity.ua/cdn-cgi/image/format=webp,quality=80/static/img/icons/Pragmaticplay/pr_gates_of_olympus_1000.gif",
    name: "GATES OF OLYMPUS 1000",
  }],
  [{
    href: "/img/dashboard/blackjack_58_emerald.webp",
    name: "GATES OF OLYMPUS 1000",
  },
  {
    href: "https://slotscity.ua/cdn-cgi/image/format=webp,quality=80/static/img/icons/Pragmaticplay/pr_gates_of_olympus_1000.gif",
    name: "GATES OF OLYMPUS 1000",
  }],
  [{
    href: "/img/dashboard/blackjack_58_emerald.webp",
    name: "GATES OF OLYMPUS 1000",
  },
  {
    href: "https://slotscity.ua/cdn-cgi/image/format=webp,quality=80/static/img/icons/Pragmaticplay/pr_gates_of_olympus_1000.gif",
    name: "GATES OF OLYMPUS 1000",
  }],
  [{
    href: "/img/dashboard/blackjack_58_emerald.webp",
    name: "GATES OF OLYMPUS 1000",
  },
  {
    href: "https://slotscity.ua/cdn-cgi/image/format=webp,quality=80/static/img/icons/Pragmaticplay/pr_gates_of_olympus_1000.gif",
    name: "GATES OF OLYMPUS 1000",
  }],
  [{
    href: "/img/dashboard/blackjack_58_emerald.webp",
    name: "GATES OF OLYMPUS 1000",
  },
  {
    href: "https://slotscity.ua/cdn-cgi/image/format=webp,quality=80/static/img/icons/Pragmaticplay/pr_gates_of_olympus_1000.gif",
    name: "GATES OF OLYMPUS 1000",
  }],
  [{
    href: "/img/dashboard/blackjack_58_emerald.webp",
    name: "GATES OF OLYMPUS 1000",
  },
  {
    href: "https://slotscity.ua/cdn-cgi/image/format=webp,quality=80/static/img/icons/Pragmaticplay/pr_gates_of_olympus_1000.gif",
    name: "GATES OF OLYMPUS 1000",
  }],
  [{
    href: "/img/dashboard/blackjack_58_emerald.webp",
    name: "GATES OF OLYMPUS 1000",
  },
  {
    href: "https://slotscity.ua/cdn-cgi/image/format=webp,quality=80/static/img/icons/Pragmaticplay/pr_gates_of_olympus_1000.gif",
    name: "GATES OF OLYMPUS 1000",
  }],
];

function DoublePartSwiper() {
  return (
    <Container maxWidth='lg' className='my-3'>
      <Box>
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
            <SwiperSlide key={`${index}_TopGames_double`}>
              <DoubleGateCard items={items} />
            </SwiperSlide>
          )}

        </Swiper>
      </Box>
    </Container>
  )
}

export default DoublePartSwiper