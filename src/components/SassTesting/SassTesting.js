import React from 'react';
import './SassTesting.css';

function SassTesting() {

  return (
    <div className='sassHolder'>
      <div className='sassTitleHolder'>
        <img className='sassLogo' alt='parachute' src='https://w7.pngwing.com/pngs/134/539/png-transparent-parachuting-parachute-paragliding-parachute-sport-sports-silhouette-thumbnail.png' />
        <h1 className='sassTitle' >DZ RATINGS</h1>
      </div>

      <div className='sassRoutesHolder' >
        <ul className='sassList'>
          <li className='sassListItem'>Register</li>
          <li className='sassListItem'>LogBook</li>
          <li className='sassListItem'>Home</li>
          <li className='sassListItem'>About</li>
\          </ul>
      </div>

      <div className='buttonHolder'>
        <button className='testButton'>Tester</button>
      </div>
    </div>
  )
};

export default SassTesting;

