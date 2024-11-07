import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Grid2, TextField } from '@mui/material';
import { CloseSharp } from '@mui/icons-material'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import { Button } from '@material-tailwind/react';

import { Input } from "@material-tailwind/react";
import ReactCountryFlag from "react-country-flag";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import GoogleIcon from '@mui/icons-material/Google';

export default function LoginModal(props) {
  const { setModalStatus } = props;

  const [open, setOpen] = useState(!(props.modalStatus === "none"));
  const [verifyMethod, setVerifyMethod] = useState('phone');

  useEffect(() => {
    if (props.modalStatus) {
      setOpen(!(props.modalStatus === "none"));
    }
  }, [props.modalStatus]);


  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <>
      <Dialog
        open={open}
        aria-labelledby="responsive-dialog-title"
        maxWidth='md'
        fullWidth
        PaperProps={{
          sx: {
            // Custom styling for the dialog container (Paper component)
            // padding: 2,
            borderRadius: '18px',
            // backgroundColor: '#050508',
          },
        }}
        sx={{
          backgroundColor: 'rgba(0,0,0,0.7)',
        }}
      >
        <DialogContent
          className='bg-[#050508]' sx={{
            backgroundImage: 'url(/img/dashboard/512_512_WelcomeBonus_2024-2.webp)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '500px'
          }}
        >
          <Grid2 container columns={24} className="">
            <Grid2 size={12} className='flex items-end justify-center' >
              <div>
                <div className='text-[32px] font-bold text-white uppercase text-center'>new players</div>
                <div className='text-[48px] font-bold text-[#dbab31] text-center'>200,000₴</div>
                <div className='text-[32px] font-bold text-white uppercase text-center'>+500 FS</div>
              </div>
            </Grid2>
            <Grid2 size={12} className='pl-5 flex flex-col h-[610px]' sx={{
              backgroundColor: 'rgba(0,0,0,0.8)'
            }}>
              <div className='flex justify-between'>
                <div>
                  <img src="/img/dashboard/logo-app.svg"
                    className='w-[48px]'
                    alt='logo'
                  />
                </div>
                <div className='flex-1 flex items-center text-[30px] font-bold pl-4 text-white'>
                  Authorization
                </div>
                <div>
                  <div className='flex items-center justify-center bg-[#212121] rounded-full' style={{ width: '48px', height: '48px' }}>
                    <CloseSharp sx={{ color: '#a1a1a1' }} onClick={() => { setModalStatus("none") }} />
                  </div>
                </div>
              </div>
              <div className=''>
                <div className='flex items-center justify-center my-10'>
                  <div size="md" className='rounded-full bg-[#212121] p-1' >
                    <Button className={`rounded-full p-2 px-5 ${ verifyMethod === "phone" ? 'text-white bg-[#313131] text-[15px]' : 'text-[#767676]'}`} variant="text" onClick={() => { setVerifyMethod('phone') }} >
                      <div className='flex items-center'><PhoneAndroidIcon />&nbsp; Phone</div>
                    </Button>
                    <Button className={`rounded-full p-2 px-5 ${ verifyMethod === "email" ? 'text-white bg-[#313131] text-[15px]' : 'text-[#767676]'}`} variant="text" onClick={() => { setVerifyMethod('email') }} >
                      <div className='flex items-center'><EmailIcon />&nbsp;  Email</div>
                    </Button>
                  </div>
                </div>
              </div>
              <div className=''>

                {verifyMethod === "phone" ?
                  <div className='flex w-full my-2'>
                    <div className='text-white bg-[#050508] block rounded-l-md border border-[#dbab31] border-r-0 flex items-center px-2'>
                      <ReactCountryFlag countryCode="UA" style={{ width: '2em' }} svg />
                      <span>+380</span>
                    </div>
                    <div className='flex-1'>
                      <input
                        className='text-white bg-[#050508] block rounded-r-md p-2 block fullWidth w-full border-[#dbab31] border'
                        style={{
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div> :
                  <div className='flex w-full my-2'>
                    {/* <div className='text-white bg-[#050508] block rounded-l-md border border-[#dbab31] border-r-0 flex items-center px-2'>
                      <ReactCountryFlag countryCode="UA" style={{ width: '2em' }} svg />
                      <span>+380</span>
                    </div> */}
                    <div className='flex-1'>
                      <input
                        className='text-white bg-[#050508] block rounded-md p-2 block fullWidth w-full border-[#dbab31] border'
                        style={{
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>
                }

                <div className='flex w-full my-2'>
                  <div className='flex-1'>
                    <input
                      className='text-white bg-[#050508] block rounded-l-md p-2 block fullWidth w-full border-[#dbab31] border border-r-0'
                      style={{
                        outline: 'none'
                      }}
                      type="password"
                    />
                  </div>
                  <div className='text-white bg-[#050508] block rounded-r-md border border-[#dbab31] flex items-center px-4'>
                    <RemoveRedEyeIcon />
                  </div>
                </div>
              </div>
              <div>
                <div className='text-right text-[#dbab31] font-bold mb-5'>Password recovery</div>
              </div>
              <div className=''>
                {props.modalStatus === "login" && <Button className='normal-case bg-[#dbab31] text-[14px] text-black' fullWidth size='md'>Sign in</Button>}
                {props.modalStatus === "register" && <Button className='normal-case bg-[#01a051] text-[14px] text-black' fullWidth size='md'>Register</Button>}
              </div>
              <div>
                <div className='text-center font-bold text-[#767676] my-2'>or through:</div>
              </div>
              <div className='flex-1'>
                <div className='flex justify-center'>
                  <div className='w-[48px] h-[48px] rounded-full bg-[#333333] flex items-center justify-center'>
                    <GoogleIcon sx={{ color: '#a1a1a1' }} />
                  </div>
                </div>
              </div>
              <div className=''>
                <div className='text-center text-[16px] text-[#767676] my-2'>
                  Don't have an account?
                </div>
                <div className='flex justify-center'>
                  <Button size='sm' color="success" className={`${props.modalStatus === "login" && 'bg-[#01a051]'} px-8`} >Register</Button>
                </div>
              </div>
            </Grid2>
          </Grid2>
        </DialogContent>
        {/* <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions> */}
      </Dialog >
    </>
  );
}