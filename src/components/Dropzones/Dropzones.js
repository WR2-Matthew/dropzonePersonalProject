import React from 'react';
import './Dropzones.css';
import Star from 'react-star-rating-component';

function Dropzones(props) {

  return (
    <div onClick={() => props.modalFn(true)} className='dropzoneHolder'>
      <h4 className='dropzoneName'>{props.name}</h4>
      <h6 className='dropzoneState'>{props.town}, {props.state}</h6>
      <img className='dropzoneImage' alt='dzPic' src={props.picture} />
      <Star
        className='dropzoneStarComp'
        name="overall"
        editing={false}
        starCount={5}
        value={props.overall}
      />
    </div>
  )
};

export default Dropzones;


