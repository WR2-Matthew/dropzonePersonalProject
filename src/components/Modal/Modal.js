import React, { useState } from 'react';
import Modal from 'react-modal';
import Dropzone from '../Dropzones/Dropzones';
import './Modal.css';
import StarComponent from 'react-star-rating-component';
import { connect } from 'react-redux';
import RateDz from '../RateDropzone/RateDropzone'

Modal.setAppElement('#root')

function ModalComp(props) {

  let [modalOpen, setModalOpen] = useState(false);
  let [editDz, setEditDz] = useState(false);

  return (
    <div>
      <Dropzone name={props.name} town={props.town} state={props.state} picture={props.picture} overall={props.overall} modalFn={setModalOpen} />
      <div className='modalHolder'>
        <Modal
          isOpen={modalOpen}
          onRequestClose={() => {
            setEditDz(false)
            setModalOpen(false)
          }}
          style={
            {
              overlay: {
                backgroundColor: 'transparent'
              }
            }
          }
        >
          <div className='modalButtonHolder'>
            <button className='modalExitButton' onClick={() => setModalOpen(false)}>X</button>
          </div>

          <div className='modalDzNameHolder'>
            <h1 className='modalDzName'>{props.name}</h1>
          </div>

          <div className='modalDzAddressHolder'>
            <h4 className='modalDzAddress'>{props.address} {props.town}, {props.state}</h4>
          </div>

          <div className='modalRatingsHolder'>
            <StarComponent
              className='starComp'
              starColor={'rgb(236, 219, 69)'}
              name="overall"
              editing={false}
              starCount={5}
              value={props.overall}
            />
          </div>

          <div className='modalDzImageHolder'>
            <img className='modalDzImage' alt='dropzone' src={props.picture} />
          </div>

          <div className='modalDzDetails'>
            <p>{props.name} takes jumpers up to {props.altitude}ft. Jump tickets cost ${props.price} per jump! </p>
          </div>

          {!editDz ?
            <div className='modalStarHolder' >
              <div className='individualRatingHolder' >
                <label>Bunkhouse:</label>
                <StarComponent
                  className='modalStarComp2'
                  starColor={'rgb(236, 219, 69)'}
                  name='bunkhouse'
                  editing={false}
                  starCount={5}
                  value={props.bunkhouse}
                />
              </div>

              <div className='individualRatingHolder' >
                <label>Camping:</label>
                <StarComponent
                  className='modalStarComp2'
                  starColor={'rgb(236, 219, 69)'}
                  name='camping'
                  editing={false}
                  starCount={5}
                  value={props.camping}
                />
              </div>

              <div className='individualRatingHolder' >
                <label>Facilities:</label>
                <StarComponent
                  className='modalStarComp2'
                  starColor={'rgb(236, 219, 69)'}
                  name='facilities'
                  editing={false}
                  starCount={5}
                  value={props.facilities}
                />
              </div>

              <div className='individualRatingHolder' >
                <label>Inclusion:</label>
                <StarComponent
                  className='modalStarComp2'
                  starColor={'rgb(236, 219, 69)'}
                  name='inclusion'
                  editing={false}
                  starCount={5}
                  value={props.inclusion}
                />
              </div>

              <div className='individualRatingHolder' >
                <label>Landing Area:</label>
                <StarComponent
                  className='modalStarComp2'
                  starColor={'rgb(236, 219, 69)'}
                  name='landingArea'
                  editing={false}
                  starCount={5}
                  value={props.landingArea}
                />
              </div>

              <div className='individualRatingHolder' >
                <label>Party:</label>
                <StarComponent
                  className='modalStarComp2'
                  starColor={'rgb(236, 219, 69)'}
                  name='party'
                  editing={false}
                  starCount={5}
                  value={props.party}
                />
              </div>

              <div className='individualRatingHolder' >
                <label>Planes:</label>
                <StarComponent
                  className='modalStarComp2'
                  starColor={'rgb(236, 219, 69)'}
                  name='planes'
                  editing={false}
                  starCount={5}
                  value={props.planes}
                />
              </div>

              <div className='individualRatingHolder' >
                <label>Rental Gear:</label>
                <StarComponent
                  className='modalStarComp2'
                  starColor={'rgb(236, 219, 69)'}
                  name='rentals'
                  editing={false}
                  starCount={5}
                  value={props.rentals}
                />
              </div>

              <div className='individualRatingHolder' >
                <label>Safety:</label>
                <StarComponent
                  className='modalStarComp2'
                  starColor={'rgb(236, 219, 69)'}
                  name='safety'
                  editing={false}
                  starCount={5}
                  value={props.safety}
                />
              </div>

              <div className='individualRatingHolder' >
                {!props.user
                  ? <h4>Sign in to Rate DZ!</h4>
                  : <button onClick={() => setEditDz(true)} className='modalRatingButton' >Rate This Dropzone!</button>}
              </div>
            </div>
            : <RateDz
              dropzoneId={props.dropzoneId}
              setEditDzFn={setEditDz}
            />
          }

        </Modal>
      </div>
    </div >
  )
};

function mapStateToProps(state) {
  return {
    user: state.userReducer.user.data
  }
}

export default connect(mapStateToProps)(ModalComp);