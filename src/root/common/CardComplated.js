import { Button } from '@material-tailwind/react'
import { Box, Container } from '@mui/material'
import React from 'react'

function CardComplated(props) {
  return (
    <Container maxWidth="lg">
      <Box className="my-8" sx={{ backgroundColor: '#0c0c0f' }}>
        <div className='border p-12 rounded-2xl' style={{backgroundImage: 'url(/img/dashboard/512_512_kubok.webp)', backgroundSize:'contain', backgroundPosition:'center right', backgroundRepeat: 'no-repeat'}}>
          <div className='border uppercase bg-white p-0.5 rounded-full text-[10px] text-[#212121] inline-block font-bold'>completed</div>
          <div className='text-white text-[30px] font-bold uppercase'>{ props.title }</div>
          <div className='uppercase text-[#767676] text-[50px] font-bold'>Completed</div>
          <div>
            <Button>See the results</Button>
          </div>
        </div>
      </Box>
    </Container>
  )
}

export default CardComplated