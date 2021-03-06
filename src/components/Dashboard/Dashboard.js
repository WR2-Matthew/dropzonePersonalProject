import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import Dropdown from '../Dropdown/DropDown';
import { connect } from 'react-redux';
import { getDropzones, hasRated, checkboxChecked } from '../../redux/actionCreators';
import Modal from '../Modal/Modal';
import ModalTwo from '../AddDzModal/AddDzModal';

const Dashboard = (props) => {

  let [selectedDz, setSelectedDz] = useState('');
  let [nameSearched, setNameSearched] = useState('');
  let [defaultSelected] = useState('Select State:')
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
    props.getDropzones();
    props.hasRated()
  }, []);

  useEffect(() => {
    props.checkboxChecked(overall, camping, skySafety, inclusion, party, bunkhouse, rental, facilities, planes, landingArea)
  }, [overall, camping, skySafety, inclusion, party, bunkhouse, rental, facilities, planes, landingArea])

  function handleChangeState(e) {
    if (e.target.value === 'Select State:') {
      setSelectedDz('')
    }
    else {
      setSelectedDz(e.target.value)
    }
  };

  function handleChangeName(e) {
    setNameSearched(e.target.value)
  };

  function checkValue(id) {
    switch (id) {
      case 'overall':
        setOverall(!overall);
        setBunkhouse(false);
        setCamping(false);
        setSkySafety(false);
        setInclusion(false);
        setParty(false);
        setRental(false);
        setFacilities(false);
        setPlanes(false);
        setLandingArea(false);
        break;
      case 'camping':
        setCamping(!camping);
        setOverall(false);
        setBunkhouse(false);
        setSkySafety(false);
        setInclusion(false);
        setParty(false);
        setRental(false);
        setFacilities(false);
        setPlanes(false);
        setLandingArea(false);
        break;
      case 'skySafety':
        setSkySafety(!skySafety);
        setCamping(false);
        setOverall(false);
        setBunkhouse(false);
        setInclusion(false);
        setParty(false);
        setRental(false);
        setFacilities(false);
        setPlanes(false);
        setLandingArea(false);
        break;
      case 'inclusion':
        setInclusion(!inclusion);
        setCamping(false);
        setOverall(false);
        setBunkhouse(false);
        setSkySafety(false);
        setParty(false);
        setRental(false);
        setFacilities(false);
        setPlanes(false);
        setLandingArea(false);
        break;
      case 'party':
        setParty(!party);
        setCamping(false);
        setOverall(false);
        setBunkhouse(false);
        setSkySafety(false);
        setInclusion(false);
        setRental(false);
        setFacilities(false);
        setPlanes(false);
        setLandingArea(false);
        break;
      case 'bunkhouse':
        setBunkhouse(!bunkhouse);
        setCamping(false);
        setOverall(false);
        setSkySafety(false);
        setInclusion(false);
        setParty(false);
        setRental(false);
        setFacilities(false);
        setPlanes(false);
        setLandingArea(false);
        break;
      case 'rental':
        setRental(!rental);
        setCamping(false);
        setOverall(false);
        setBunkhouse(false);
        setSkySafety(false);
        setInclusion(false);
        setParty(false);
        setFacilities(false);
        setPlanes(false);
        setLandingArea(false);
        break;
      case 'facilities':
        setFacilities(!facilities);
        setCamping(false);
        setOverall(false);
        setBunkhouse(false);
        setSkySafety(false);
        setInclusion(false);
        setParty(false);
        setRental(false);
        setPlanes(false);
        setLandingArea(false);
        break;
      case 'planes':
        setPlanes(!planes);
        setCamping(false);
        setOverall(false);
        setBunkhouse(false);
        setSkySafety(false);
        setInclusion(false);
        setParty(false);
        setRental(false);
        setFacilities(false);
        setLandingArea(false);
        break;
      case 'landingArea':
        setLandingArea(!landingArea);
        setCamping(false);
        setOverall(false);
        setBunkhouse(false);
        setSkySafety(false);
        setInclusion(false);
        setParty(false);
        setRental(false);
        setFacilities(false);
        setPlanes(false);
        break;
    }
  };

  console.log(props.dropzones)

  return (
    <div className='dashboardHolder'>
      <div className='dashHeaderHolder'>
        <div className='dashSearchHolder'>

          <div className='dashSearchBar'>
            <input className='dashSearch' type="search" placeholder='DZ Name' name='nameSearched' value={nameSearched} onChange={(e) => handleChangeName(e)} />
          </div>

          <div className='dashFilterState'>
            <Dropdown selectedDz={selectedDz}
              handleChangeDropzoneFn={handleChangeState}
              defaultSelected={defaultSelected}
            />
          </div>

        </div>

        <div className='dashChecksHolder'>

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
          </div>
        </div>

        <ModalTwo className='dashAddDzHolder' />

      </div>
      {/* MAKE INTO SWITCH STATEMENTS WITH TWO CONDITIONS */}
      <div className='dashDropzoneHolder' >
        {!props.dropzones
          ? null
          : !selectedDz && !nameSearched
            ? props.dropzones.map((e, i) => {
              return (
                <Modal key={i}
                  picture={e.pictures}
                  name={e.dz_name}
                  state={e.state_located}
                  town={e.town_located}
                  address={e.address}
                  overall={e.overall_avg}
                  bunkhouse={e.bunkhouse_avg}
                  camping={e.camping_avg}
                  facilities={e.facilities_avg}
                  userHasRated={e.has_rated}
                  inclusion={e.inclusion_avg}
                  landingArea={e.landing_area_avg}
                  party={e.party_avg}
                  planes={e.planes_avg}
                  rentals={e.rental_gear_avg}
                  safety={e.sky_safety_avg}
                  price={e.jump_ticket_price}
                  altitude={e.altitude}
                  dropzoneId={e.dropzone_id}
                />)
            })
            : !nameSearched && selectedDz
              ? props.dropzones.filter(dropzone => (
                dropzone.state_located.toLowerCase() === selectedDz.toLowerCase()
              ))
                .map((e, i) => {
                  return (
                    <Modal key={i}
                      picture={e.pictures}
                      name={e.dz_name}
                      state={e.state_located}
                      town={e.town_located}
                      address={e.address}
                      overall={e.overall_avg}
                      bunkhouse={e.bunkhouse_avg}
                      camping={e.camping_avg}
                      facilities={e.facilities_avg}
                      userHasRated={e.has_rated}
                      inclusion={e.inclusion_avg}
                      landingArea={e.landing_area_avg}
                      party={e.party_avg}
                      planes={e.planes_avg}
                      rentals={e.rental_gear_avg}
                      safety={e.sky_safety_avg}
                      price={e.jump_ticket_price}
                      altitude={e.altitude}
                      dropzoneId={e.dropzone_id}
                    />)
                })
              : nameSearched && !selectedDz
                ? props.dropzones.filter(dropzone => (
                  dropzone.dz_name.toLowerCase().includes(nameSearched.toLowerCase())
                ))
                  .map((e, i) => {
                    return (
                      <Modal key={i}
                        picture={e.pictures}
                        name={e.dz_name}
                        state={e.state_located}
                        town={e.town_located}
                        address={e.address}
                        overall={e.overall_avg}
                        bunkhouse={e.bunkhouse_avg}
                        camping={e.camping_avg}
                        facilities={e.facilities_avg}
                        userHasRated={e.has_rated}
                        inclusion={e.inclusion_avg}
                        landingArea={e.landing_area_avg}
                        party={e.party_avg}
                        planes={e.planes_avg}
                        rentals={e.rental_gear_avg}
                        safety={e.sky_safety_avg}
                        price={e.jump_ticket_price}
                        altitude={e.altitude}
                        dropzoneId={e.dropzone_id}
                      />)
                  })
                : nameSearched && selectedDz
                  ? props.dropzones.filter(dropzone => (
                    dropzone.dz_name.toLowerCase().includes(nameSearched.toLowerCase()) && dropzone.state_located.toLowerCase() === selectedDz.toLowerCase()
                  ))
                    .map((e, i) => {
                      return (
                        <Modal key={i}
                          picture={e.pictures}
                          name={e.dz_name}
                          state={e.state_located}
                          town={e.town_located}
                          address={e.address}
                          overall={e.overall_avg}
                          bunkhouse={e.bunkhouse_avg}
                          camping={e.camping_avg}
                          facilities={e.facilities_avg}
                          userHasRated={e.has_rated}
                          inclusion={e.inclusion_avg}
                          landingArea={e.landing_area_avg}
                          party={e.party_avg}
                          planes={e.planes_avg}
                          rentals={e.rental_gear_avg}
                          safety={e.sky_safety_avg}
                          price={e.jump_ticket_price}
                          altitude={e.altitude}
                          dropzoneId={e.dropzone_id}
                        />)
                    })
                  : null}
      </div>

    </div>
  )
};

const mapDispatchToProps = {
  getDropzones,
  hasRated,
  checkboxChecked
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