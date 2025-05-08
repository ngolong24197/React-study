import React from 'react'

const ProandStateDisplayData = ({data}) => {

    const listData = data.map((item,index) => (
        <li key = {index}> {item} </li>
    ))

  return (
    <div>

      <h2 className="h2-addArray">Array display:</h2>
      <h3 className='ul-addArray'>Current list: [{data.join(', ')}]</h3>
      <ul className="ul-addArray">{listData}</ul>
    </div>
  )
}

export default ProandStateDisplayData;
