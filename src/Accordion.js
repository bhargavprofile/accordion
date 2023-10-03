import React, { useState } from 'react'

function Accordion({title, info}) {
  const [show, hide] = useState(false);
  return (
    <div className='accordion-mini-card'>
        <div className='head'>
        <h4>{title}</h4>
        <button className='sign' onClick={()=>hide(!show)}>
          {show ? '-' : '+'}
        </button>{<br/>}
        <div>
           {show && <p>{info}</p>}
        </div>
        </div>
    </div>
  )
}

export default Accordion
