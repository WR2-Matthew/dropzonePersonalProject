import React, { useState } from 'react';
import StarComponent from 'react-star-rating-component';
import

  function RateDz(props) {

    let [camping, setCamping] = useState(0);
    let [skySafety, setSkySafety] = useState(0);
    let [inclusion, setInclusion] = useState(0);
    let [party, setParty] = useState(0);
    let [bunkhouse, setBunkhouse] = useState(0);
    let [rental, setRental] = useState(0);
    let [facilities, setFacilities] = useState(0);
    let [planes, setPlanes] = useState(0);
    let [landingArea, setLandingArea] = useState(0);

    function submitForm(bunkhouse, camping, facilities, inclusion, landingArea, party, rental, planes, skySafety) {
      if (!bunkhouse || !camping || !facilities || !inclusion || !landingArea || !party || !rental || !planes || !skySafety) {
        alert('Must rate all fields to submit ratings!')
      };


    };

    return (
      <div className='rateDzHolder' >
        <form className='rateForm'>
          <div className='rateHolder' >
            <p>Rate DZ's Bunkhouse: {rating}</p>
            <StarComponent
              className='rateDzStarComp'
              name="bunkhouse"
              starCount={5}
              value={bunkhouse}
              onStarClick={setBunkhouse}
              editing={true}
            />
          </div>

          <div className='rateHolder' >
            <p>Rate DZ's Camping: {rating}</p>
            <StarComponent
              className='rateDzStarComp'
              name="camping"
              starCount={5}
              value={camping}
              onStarClick={setCamping}
              editing={true}
            />
          </div>

          <div className='rateHolder' >
            <p>Rate DZ's Facilities: {rating}</p>
            <StarComponent
              className='rateDzStarComp'
              name="facilities"
              starCount={5}
              value={facilities}
              onStarClick={setFacilities}
              editing={true}
            />
          </div>

          <div className='rateHolder' >
            <p>Rate DZ's Inclusion: {rating}</p>
            <StarComponent
              className='rateDzStarComp'
              name="inclusion"
              starCount={5}
              value={inclusion}
              onStarClick={setInclusion}
              editing={true}
            />
          </div>

          <div className='rateHolder' >
            <p>Rate DZ's Landing Area: {rating}</p>
            <StarComponent
              className='rateDzStarComp'
              name="landingArea"
              starCount={5}
              value={landingArea}
              onStarClick={setLandingArea}
              editing={true}
            />
          </div>

          <div className='rateHolder' >
            <p>Rate DZ's Party: {rating}</p>
            <StarComponent
              className='rateDzStarComp'
              name="party"
              starCount={5}
              value={party}
              onStarClick={setParty}
              editing={true}
            />
          </div>

          <div className='rateHolder' >
            <p>Rate DZ's Planes: {rating}</p>
            <StarComponent
              className='rateDzStarComp'
              name="planes"
              starCount={5}
              value={planes}
              onStarClick={setPlanes}
              editing={true}
            />
          </div>

          <div className='rateHolder' >
            <p>Rate DZ's Rental Gear: {rating}</p>
            <StarComponent
              className='rateDzStarComp'
              name="rental"
              starCount={5}
              value={rental}
              onStarClick={setRental}
              editing={true}
            />
          </div>

          <div className='rateHolder' >
            <p>Rate DZ's Safety: {rating}</p>
            <StarComponent
              className='rateDzStarComp'
              name="skySafety"
              starCount={5}
              value={skySafety}
              onStarClick={setSkySafety}
              editing={true}
            />
          </div>

          <div className='rateHolder' >
            <button onClick={() => submitForm(bunkhouse, camping, facilities, inclusion, landingArea, party, rental, planes, skySafety)}>Submit Dropzone Rating's</button>
          </div>
        </form>
      </div>
    )
  };

export default RateDz;