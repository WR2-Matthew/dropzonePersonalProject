import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import Dropdown from '../Dropdown/DropDown';
import { connect } from 'react-redux';
import { getDropzones, getUser } from '../../redux/actionCreators';
import Modal from '../Modal/Modal';
import ModalTwo from '../AddDzModal/AddDzModal';

const Dashboard = (props) => {

  let [selectedDz, setSelectedDz] = useState('');
  let [nameSearched, setNameSearched] = useState('');
  let [defaultSelected, setDefaultSelected] = useState('Select State:')
  let [overall, setOverall] = useState(false);
  let [camping, setCamping] = useState(false);
  let [skySafety, setSkySafety] = useState(false);
  let [inclusion, setInclusion] = useState(false);
  let [party, setParty] = useState(false);
  let [bunkhouse, setBunkhouse] = useState(false);
  let [rental, setRental] = useState(false);
  let [facilities, setFacilities] = useState(false);
  let [planes, setPlanes] = useState(false);
  let [landingArea, setLandingArea] = useState(false);

  useEffect(() => {
    props.getDropzones()
    props.getUser()
  }, [props.getDropzones]);

  function handleChangeState(e) {
    setSelectedDz(e.target.value)
  };

  function handleChangeName(e) {
    setNameSearched(e.target.value)
  };

  function checkValue(id) {
    switch (id) {
      case 'overall':
        setOverall(!overall);
        break;
      case 'camping':
        setCamping(!camping);
        break;
      case 'skySafety':
        setSkySafety(!skySafety);
        break;
      case 'inclusion':
        setInclusion(!inclusion);
        break;
      case 'party':
        setParty(!party);
        break;
      case 'bunkhouse':
        setBunkhouse(!bunkhouse);
        break;
      case 'rental':
        setRental(!rental);
        break;
      case 'facilities':
        setFacilities(!facilities);
        break;
      case 'planes':
        setPlanes(!planes);
        break;
      case 'landingArea':
        setLandingArea(!landingArea);
        break;
    }
  };

  console.log(selectedDz)

  return (
    <div className='dashboardHolder'>
      <div className='dashHeaderHolder'>
        <div className='dashSearchHolder'>

          <div className='dashSearchBar'>
            <input className='dashSearch' placeholder='DZ Name' name='nameSearched' value={nameSearched} onChange={(e) => handleChangeName(e)} />
          </div>

          <div className='dashFilterState'>
            <Dropdown selectedDz={selectedDz}
              handleChangeDropzoneFn={handleChangeState}
              defaultSelected={defaultSelected}
            />
          </div>

        </div>

        {/* <div className='dashChecksHolder'>

          <h4>Search By What Is Important To You:</h4>
          <div className='dashCheckBoxesHolder'>
            <label className='checkBoxLabels'>Overall</label>
            <input className='checkBoxInputs'
              type='checkbox'
              name='overall'
              id='checkOverall'
              checked={overall}
              onChange={() => checkValue('overall')} />
          </div>

          <div className='dashCheckBoxesHolder'>
            <label className='checkBoxLabels'>Camping</label>
            <input className='checkBoxInputs'
              type='checkbox'
              name='camping'
              id='checkCamping'
              checked={camping}
              onChange={() => checkValue('camping')} />
          </div>

          <div className='dashCheckBoxesHolder'>
            <label className='checkBoxLabels'>Safety</label>
            <input className='checkBoxInputs'
              type='checkbox'
              name='skySafety'
              id='checkSafety'
              checked={skySafety}
              onChange={() => checkValue('skySafety')} />
          </div>

          <div className='dashCheckBoxesHolder'>
            <label className='checkBoxLabels'>Inclusion</label>
            <input className='checkBoxInputs'
              type='checkbox'
              name='inclusion'
              id='checkInclusion'
              checked={inclusion}
              onChange={() => checkValue('inclusion')} />
          </div>


          <div className='dashCheckBoxesHolder'>
            <label className='checkBoxLabels'>Party</label>
            <input className='checkBoxInputs'
              type='checkbox'
              name='party'
              id='checkParty'
              checked={party}
              onChange={() => checkValue('party')} />
          </div>

          <div className='dashCheckBoxesHolder'>
            <label className='checkBoxLabels'>Bunkhouse</label>
            <input className='checkBoxInputs'
              type='checkbox'
              name='bunkhouse'
              id='checkBunk'
              checked={bunkhouse}
              onChange={() => checkValue('bunkhouse')} />
          </div>


          <div className='dashCheckBoxesHolder'>
            <label className='checkBoxLabels'>Rental</label>
            <input className='checkBoxInputs'
              type='checkbox'
              name='rental'
              id='checkRental'
              checked={rental}
              onChange={() => checkValue('rental')} />
          </div>


          <div className='dashCheckBoxesHolder'>
            <label className='checkBoxLabels'>Facilities</label>
            <input className='checkBoxInputs'
              type='checkbox'
              name='facilities'
              id='checkFac'
              checked={facilities}
              onChange={() => checkValue('facilities')} />
          </div>


          <div className='dashCheckBoxesHolder'>
            <label className='checkBoxLabels'>Planes</label>
            <input className='checkBoxInputs'
              type='checkbox'
              name='planes'
              id='checkPLanes'
              checked={planes}
              onChange={() => checkValue('planes')} />
          </div>


          <div className='dashCheckBoxesHolder'>
            <label className='checkBoxLabels'>Landing Area</label>
            <input className='checkBoxInputs'
              type='checkbox'
              name='landingArea'
              id='checkLZ'
              checked={landingArea}
              onChange={() => checkValue('landingArea')} />
          </div> */}
        {/* </div> */}

        <ModalTwo className='dashAddDzHolder' />

      </div>

      <div className='dashDropzoneHolder' >
        {!props.dropzones ? null :
          props.dropzones.map((e, i) => {
            return (
              <Modal key={i}
                picture={e.pictures}
                name={e.dz_name}
                state={e.state_located}
                town={e.town_located}
                address={e.address}
                overall={e.overall_rt}
                bunkhouse={e.bunkhouse_rt}
                camping={e.camping_rt}
                facilities={e.facilities_rt}
                userHasRated={e.has_rated}
                inclusion={e.inclusion_rt}
                landingArea={e.landing_area_rt}
                party={e.party_rt}
                planes={e.planes_rt}
                rentals={e.rental_gear_rt}
                safety={e.sky_safety_rt}
                price={e.jump_ticket_price}
                altitude={e.altitude}
                dropzoneId={e.dropzone_id}
              />)
          })
        }
      </div>

    </div>
  )
};

const mapDispatchToProps = {
  getDropzones,
  getUser
};

function mapStateToProps(state) {
  return {
    dropzones: state.dzReducer.dropzones.data,
    user: state.userReducer.user.data
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);







// if (id === 'overall') {
    //   setOverall(!overall)
    // }
    // else if (id === 'camping') {
    //   setCamping(!camping)
    // }
    // else if (id === 'skySafety') {
    //   setSkySafety(!skySafety)
    // }
    // else if (id === 'inclusion') {
    //   setInclusion(!inclusion)
    // }
    // else if (id === 'party') {
    //   setParty(!party)
    // }
    // else if (id === 'bunkhouse') {
    //   setBunkhouse(!bunkhouse)
    // }
    // else if (id === 'rental') {
    //   setRental(!rental)
    // }
    // else if (id === 'facilities') {
    //   setFacilities(!facilities)
    // }
    // else if (id === 'planes') {
    //   setPlanes(!planes)
    // }
    // else if (id === 'landingArea') {
    //   setLandingArea(!landingArea)
    // }