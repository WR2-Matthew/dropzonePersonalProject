import React from 'react';
import './Dropzones.css';


function Dropzones(props) {

  return (
    <div onClick={() => props.modalFn(true)} className='dropzoneHolder'>
      <h4 className='dropzoneName'>{props.name}</h4>
      <h6 className='dropzoneState'>{props.state}</h6>
      <img className='dropzoneImage' alt='dzPic' src={props.picture} />
    </div>
  )
};

export default Dropzones;
