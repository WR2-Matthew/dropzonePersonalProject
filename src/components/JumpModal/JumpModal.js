import React, { useState } from 'react';
import Modal from 'react-modal';
import Jumps from '../Jumps/Jumps';
import './JumpModal.css';
import { connect } from 'react-redux';
import { deleteJump } from '../../redux/actionCreators';

function JumpModal(props) {

  let [modalOpen, setModalOpen] = useState('');

  return (
    <div>
      <Jumps
        date={props.date}
        discipline={props.discipline}
        dropzone={props.dropzone}
        image={props.image}
        details={props.details}
        plane={props.plane}
        number={props.number}
        modalFn={setModalOpen} />

      <div className='jumpModalHolder'>
        <Modal
          isOpen={modalOpen}
          onRequestClose={() => {
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

          <div className='jumpNumberHolder'>
            <h1 className='jumpNumber' > Jump Number: {props.number}</h1>
          </div>

          <div className='jumpModalDetailsHolder'>
            <div className='jumpModalInfoHolder' >
              <div className='jumpModalInfo'>
                <p><b>Date:</b> {props.date}</p>
              </div>

              <div className='jumpModalInfo'>
                <p><b>Dropzone:</b> {props.dropzone}</p>
              </div>

              <div className='jumpModalInfo'>
                <p><b>Discipline:</b> {props.discipline}</p>
              </div>

              <div className='jumpModalInfo'>
                <p><b>Plane:</b> {props.plane}</p>
              </div>

              <div className='jumpModalInfoDetails'>
                <p><b>Jump Details:</b> {props.details}</p>
              </div>
            </div>



            <div className='jumpModalImageHolder'>
              {!props.image
                ? <img className='jumpModalImage' alt='skydive' src={'https://lh3.googleusercontent.com/proxy/aGOTyJbTEWkmyzrcvGqGOSw8e8SxLgFzpglRcoTd5oDTYgnT_xPRNpK_NH5YqZ4q6U0UADjfpHxJpwc9xhYSryZOonZ4Ivb8n6M05wTo_K-uYB05Upb31fvg9yKwi2p-g5w5rJcgf5U'} />
                : <img className='jumpModalImage' alt='skydive' src={props.image} />
              }
            </div>
          </div>

          <div className='jumpModalFunctionButtons' >
            <button className='jumpModalButton'>Edit Jump</button>
            <button onClick={() => {
              props.deleteJump(props.id)
              setModalOpen(false)
            }} className='jumpModalButton'>Remove Jump</button>
          </div>

        </Modal>
      </div>
    </div >
  )
};

const mapDispatchToProps = {
  deleteJump
}

export default connect(null, mapDispatchToProps)(JumpModal);