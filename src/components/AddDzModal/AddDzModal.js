import React, { useState } from 'react';
import Modal from 'react-modal';
import './AddDzModal.css';
import AmazonDropzone from '../AmazonDropzone/AmazonDropzone';
import { connect } from 'react-redux';
import { createDropzone } from '../../redux/actionCreators';
import AddDzStarRating from '../AddDzStarRating/AddDzStarRating';

function ModalTwo(props) {

  let [modalOpen, setModalOpen] = useState(false);
  let [dzName, setDzName] = useState('');
  let [dzAddress, setDzAddress] = useState('');
  let [town, setTown] = useState('');
  let [state, setState] = useState('');
  let [altitude, setAltitude] = useState('');
  let [price, setPrice] = useState('');
  let [photo, setPhoto] = useState('');
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
    e.preventDefault()
    // console.log('hit')

    if (!dzName || !dzAddress || !town || !state || !altitude || !price || !photo || !camping || !skySafety || !inclusion || !party || !bunkhouse || !rental || !facilities || !planes || !landingArea) {
      alert("All field's must be filled out to create dropzone!")
    }

    else {
      // console.log('hit')
      props.createDropzone(dzName, dzAddress, town, state, altitude, price, photo, props.user.id, camping, skySafety, inclusion, party, bunkhouse, rental, facilities, planes, landingArea)
      setModalOpen(false)
    }
  };

  // console.log(camping, 'camping')
  // console.log(skySafety, 'skySafety')
  // console.log(inclusion, 'inclusion')
  // console.log(bunkhouse, 'bunkhouse')
  // console.log(party, 'party')
  // console.log(rental, 'rental')
  // console.log(facilities, 'facilities')
  // console.log(planes, 'planes')
  // console.log(landingArea, 'landingArea')

  return (
    <div>
      <div className='dashAddDzHolder' onClick={() => setModalOpen(true)}>
        <h1>ADD NEW DROPZONE</h1>
      </div>

      <div className='modalTwoHolder' >
        <Modal
          isOpen={modalOpen}
          onRequestClose={() => {
            setModalOpen(false)
            setDzName('')
            setDzAddress('')
            setTown('')
            setState('')
            setAltitude('')
            setPrice('')
            setPhoto('')
          }}
          style={
            {
              overlay: {
                backgroundColor: 'transparent',
              }
            }
          }>
          {!props.user
            ? <div className='signInNotificationHolder'>
              <button className='modalExitButton' onClick={() => setModalOpen(false)}>X</button>
              <h1>Must be logged in to create a dropzone!</h1>
            </div>
            :
            <form className='addDzForm'>
              <div>
                <div className='modalButtonHolder'>
                  <button className='modalExitButton' onClick={() => {
                    setModalOpen(false)
                    setDzName('')
                    setDzAddress('')
                    setTown('')
                    setState('')
                    setAltitude('')
                    setPrice('')
                    setPhoto('')
                  }}>X</button>
                </div>

                <div className='mainDzDetails' >
                  <div className='modalTwoDzNameHolder' >
                    <input placeholder='Dropzone Name' name='dzName' value={dzName} onChange={(e) => setDzName(e.target.value)} />
                    {/* <label><b>Dropzone Name:</b></label> */}
                  </div>

                  <div className='modalTwoDzNameHolder' >
                    <input placeholder='Dropzone Address' name='dzAddress' value={dzAddress} onChange={(e) => setDzAddress(e.target.value)} />
                    {/* <label><b>Dropzone Street:</b></label> */}
                  </div>

                  <div className='modalTwoDzNameHolder' >
                    <input placeholder='Dropzone Town' name='town' value={town} onChange={(e) => setTown(e.target.value)} />
                    {/* <label><b>Town:</b></label> */}
                  </div>

                  <div className='modalTwoDzNameHolder' >
                    <input placeholder='Dropzone State' name='state' value={state} onChange={(e) => setState(e.target.value)} />
                    {/* <label><b>State:</b></label> */}
                  </div>
                </div>
              </div>

              <div className='amazonImageHolder'>
                <AmazonDropzone photoFn={setPhoto} />
              </div>

              <div className='dzJumpDetailsHolder' >
                <div className='dzJumpDetail'>
                  <div className='dzJumpDets' >
                    <input placeholder='Jump Ticket Price' name='price' value={price} onChange={(e) => setPrice(e.target.value)} />
                  </div>

                  <div className='dzJumpDetails' >
                    <input placeholder='Exit Altitude' name='altitude' value={altitude} onChange={(e) => setAltitude(e.target.value)} />
                  </div>
                </div>

                <AddDzStarRating
                  camping={camping}
                  campingFn={setCamping}
                  safety={skySafety}
                  safetyFn={setSkySafety}
                  inclusion={inclusion}
                  inclusionFn={setInclusion}
                  party={party}
                  partyFn={setParty}
                  bunkhouse={bunkhouse}
                  bunkhouseFn={setBunkhouse}
                  rental={rental}
                  rentalFn={setRental}
                  facilities={facilities}
                  facilitiesFn={setFacilities}
                  planes={planes}
                  planesFn={setPlanes}
                  landingArea={landingArea}
                  landingAreaFn={setLandingArea}
                />

                <div className='addModalCreateButton'>
                  <button onClick={(e) => submitForm(e)}>Create Dropzone!</button>
                </div>
              </div>

            </form>
          }


        </Modal>
      </div>
    </div >
  )
};

const mapDispatchToProps = {
  createDropzone
};

function mapStateToProps(state) {

  return {
    user: state.userReducer.user.data
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalTwo);