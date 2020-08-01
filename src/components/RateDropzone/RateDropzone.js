import React, { useState } from 'react';
import StarComponent from 'react-star-rating-component';
import { connect } from 'react-redux';
import './RateDropzone.css';
import { rateDropzones } from '../../redux/actionCreators';

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

  function submitForm(e) {
    console.log('hit')
    e.preventDefault()
    if (!bunkhouse || !camping || !facilities || !inclusion || !landingArea || !party || !rental || !planes || !skySafety) {
      alert('Must rate all fields to submit ratings!')
    }


    else {
      console.log('hit')
      props.rateDropzones(bunkhouse, camping, facilities, inclusion, landingArea, party, rental, planes, skySafety, props.user.id, props.dropzoneId)
      props.setEditDzFn(false)
      setCamping(0)
      setFacilities(0)
      setInclusion(0)
      setLandingArea(0)
      setParty(0)
      setPlanes(0)
      setRental(0)
      setSkySafety(0)
      setBunkhouse(0)
    }
  };

  return (
    <div className='rateDzHolder' >
      <form className='rateForm'>
        <div className='rateHolder' >
          <label>DZ's Bunkhouse:</label>
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
          <label>DZ's Camping:</label>
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
          <label>DZ's Facilities:</label>
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
          <label>DZ's Inclusion:</label>
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
          <label>DZ's Landing Area:</label>
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
          <label>DZ's Party:</label>
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
          <label>DZ's Planes:</label>
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
          <label>DZ's Rental Gear:</label>
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
          <label>DZ's Safety:</label>
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
          <button className='modalRatingSubmitButton' onClick={(e) => submitForm(e)}>Submit Dropzone Rating's</button>
        </div>
      </form>
    </div >
  )
};

const mapDispatchToProps = {
  rateDropzones
}

function mapStateToProps(state) {
  return {
    user: state.userReducer.user.data
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RateDz);