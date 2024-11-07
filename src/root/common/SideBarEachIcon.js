import React from 'react';


function SideBarEachIcon(props) {
  return (
    <div className='flex items-center justify-center'>
      <div className='rounded-full bg-[#dbab31] flex items-center justify-center' style={{ width: '44px', height: '44px'}}>
        { props.children }
      </div>
    </div>
  )
}

export default SideBarEachIcon