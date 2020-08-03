import React from 'react';
import StarComponent from 'react-star-rating-component';

function AddDzStarRating(props) {

  return (
    <div className='addDzStarHolder'>
      <div className='addDzRateHolder' >
        <label>DZ's Bunkhouse:</label>
        <StarComponent
          className='rateDzStarComp'
          name="bunkhouse"
          starCount={5}
          value={props.bunkhouse}
          onStarClick={props.bunkhouseFn}
          editing={true}
        />
      </div>

      <div className='addDzRateHolder' >
        <label>DZ's Camping:</label>
        <StarComponent
          className='rateDzStarComp'
          name="camping"
          starCount={5}
          value={props.camping}
          onStarClick={props.campingFn}
          editing={true}
        />
      </div>

      <div className='addDzRateHolder' >
        <label>DZ's Facilities:</label>
        <StarComponent
          className='rateDzStarComp'
          name="facilities"
          starCount={5}
          value={props.facilities}
          onStarClick={props.facilitiesFn}
          editing={true}
        />
      </div>

      <div className='addDzRateHolder' >
        <label>DZ's Inclusion:</label>
        <StarComponent
          className='rateDzStarComp'
          name="inclusion"
          starCount={5}
          value={props.inclusion}
          onStarClick={props.inclusionFn}
          editing={true}
        />
      </div>

      <div className='addDzRateHolder' >
        <label>DZ's Landing Area:</label>
        <StarComponent
          className='rateDzStarComp'
          name="landingArea"
          starCount={5}
          value={props.landingArea}
          onStarClick={props.landingAreaFn}
          editing={true}
        />
      </div>

      <div className='addDzRateHolder' >
        <label>DZ's Party:</label>
        <StarComponent
          className='rateDzStarComp'
          name="party"
          starCount={5}
          value={props.party}
          onStarClick={props.partyFn}
          editing={true}
        />
      </div>

      <div className='addDzRateHolder' >
        <label>DZ's Planes:</label>
        <StarComponent
          className='rateDzStarComp'
          name="planes"
          starCount={5}
          value={props.planes}
          onStarClick={props.planesFn}
          editing={true}
        />
      </div>

      <div className='addDzRateHolder' >
        <label>DZ's Rental Gear:</label>
        <StarComponent
          className='rateDzStarComp'
          name="rental"
          starCount={5}
          value={props.rental}
          onStarClick={props.rentalFn}
          editing={true}
        />
      </div>

      <div className='addDzRateHolder' >
        <label>DZ's Safety:</label>
        <StarComponent
          className='rateDzStarComp'
          name="skySafety"
          starCount={5}
          value={props.skySafety}
          onStarClick={props.safetyFn}
          editing={true}
        />
      </div>
    </div>
  )
};

export default AddDzStarRating;