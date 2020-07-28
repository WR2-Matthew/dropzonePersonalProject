import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import Dropdown from '../Dropdown/DropDown';
import { connect } from 'react-redux';
import { getDropzones, getUser } from '../../redux/actionCreators';
import Dropzones from '../Dropzones/Dropzones';
import Modal from '../../LEARNING COMPONENTS/Modal'

const Dashboard = (props) => {

  let [selectedDz, setSelectedDz] = useState('');
  let [nameSearched, setNameSearched] = useState('');
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
  }, []);

  function handleChangeState(e) {
    setSelectedDz(e.target.value)
  };

  function handleChangeName(e) {
    setNameSearched(e.target.value)
  };

  function checkValue(id) {
    if (id === 'overall') {
      setOverall(!overall)
    }
    else if (id === 'camping') {
      setCamping(!camping)
    }
    else if (id === 'skySafety') {
      setSkySafety(!skySafety)
    }
    else if (id === 'inclusion') {
      setInclusion(!inclusion)
    }
    else if (id === 'party') {
      setParty(!party)
    }
    else if (id === 'bunkhouse') {
      setBunkhouse(!bunkhouse)
    }
    else if (id === 'rental') {
      setRental(!rental)
    }
    else if (id === 'facilities') {
      setFacilities(!facilities)
    }
    else if (id === 'planes') {
      setPlanes(!planes)
    }
    else if (id === 'landingArea') {
      setLandingArea(!landingArea)
    }
  }

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

        <div className='dashAddDzHolder'>
          <h1>ADD NEW DROPZONE</h1>
        </div>
      </div>

      <div className='dashDropzoneHolder' >
        {!props.dropzones ? null :
          props.dropzones.map((dropzone, i) => {
            return (
              <Modal key={i}
                name={dropzone.name}
                state={dropzone.state_located}
                picture={dropzone.pictures}
              />)
          })}
      </div>

      {/* <div>
        <Modal />
      </div> */}

    </div>
  )
};

const mapDispatchToProps = {
  getDropzones,
  getUser
};

function mapStateToProps(state) {
  return {
    dropzones: state.dzReducer.dropzones.data
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

