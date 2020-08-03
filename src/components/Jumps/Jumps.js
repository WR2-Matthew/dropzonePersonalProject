import React from 'react';
import './Jumps.css'

function Jumps(props) {

  return (
    <div className='jumpsHolder' onClick={() => props.modalFn(true)}>
      <h4 className='jumpNumber'><b>Jump Number:</b>{props.number}</h4>
      <h6 className='jumpDropzone' ><b>Dropzone:</b>{props.dropzone}</h6>
      {!props.image
        ? <img className='jumpImg' alt='skydive' src={'https://lh3.googleusercontent.com/proxy/aGOTyJbTEWkmyzrcvGqGOSw8e8SxLgFzpglRcoTd5oDTYgnT_xPRNpK_NH5YqZ4q6U0UADjfpHxJpwc9xhYSryZOonZ4Ivb8n6M05wTo_K-uYB05Upb31fvg9yKwi2p-g5w5rJcgf5U'} />
        : <img className='jumpImg' alt='skydive' src={props.image} />
      }
    </div>
  )
};

export default Jumps;