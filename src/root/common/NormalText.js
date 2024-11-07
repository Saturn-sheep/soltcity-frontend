import React from 'react'

function NormalText(props) {
  const { text } = props;
  return (
    <div>
      <div className='text-[#a1a1a1] font-bold'>{ text }</div>
    </div>
  )
}

export default NormalText