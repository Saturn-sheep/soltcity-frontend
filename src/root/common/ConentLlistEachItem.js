import React from 'react'
import { Link } from 'react-router-dom'

function ConentLlistEachItem(props) {
  return (
    <div className='text-[#dbab31] text-[16px]'>
      <Link to={props.to}>{ props.label }</Link>
    </div>
  )
}

export default ConentLlistEachItem