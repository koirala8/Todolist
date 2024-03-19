import React from 'react'

export default function Stats({toDOList}) {
    let countList = toDOList.length;
  return (
    <div className='stats'>
      <p className='notify'>{countList === 0 ? 'You got everything!': `You have ${countList} items on your list.`}</p>
    </div>
  )
}
