import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import SideBarEachIcon from '../common/SideBarEachIcon';
import MenuIcon from '@mui/icons-material/Menu';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HelpIcon from '@mui/icons-material/Help';

function StickyLeftSideBar() {
  return (
    <div
      // backgroundColor="black"
      // width="87px"
      style={{ minHeight: '100vh', position: 'fixed', zIndex: 999, borderColor: '#333333', width: "87px", borderWidth: '1px' }}
      className='flex justify-center pt-4'
    >
      <div>
        <div className='py-4'>
          <SideBarEachIcon>
            <MenuIcon />
          </SideBarEachIcon>
          <div className='text-white font-bold text-[14px] text-center'>Menu</div>
        </div>
        <div className='py-4'>
          <SideBarEachIcon>
            <PlayArrowIcon />
          </SideBarEachIcon>
          <div className='text-white font-bold text-[14px] text-center'>Games</div>
        </div>
        <div className='py-4'>
          <SideBarEachIcon>
            <LocalFireDepartmentIcon />
          </SideBarEachIcon>
          <div className='text-white font-bold text-[14px] text-center'>Bonus</div>
        </div>
        <div className='py-4'>
          <SideBarEachIcon>
            <EmojiEventsIcon />
          </SideBarEachIcon>
          <div className='text-white font-bold text-[10px] text-center'>Tournaments</div>
        </div>
        <div className='py-4'>
          <SideBarEachIcon>
            <HelpIcon />
          </SideBarEachIcon>
          <div className='text-white font-bold text-[14px] text-center'>Help</div>
        </div>
      </div>
    </div>
  )
}

export default StickyLeftSideBar