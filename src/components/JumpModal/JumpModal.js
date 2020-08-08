import React, { useState } from 'react';
import Modal from 'react-modal';
import Jumps from '../Jumps/Jumps';
import './JumpModal.css';
import { connect } from 'react-redux';
import { deleteJump, saveChanges } from '../../redux/actionCreators';

function JumpModal(props) {

  let [modalOpen, setModalOpen] = useState(false);
  let [editing, setEditing] = useState(false);
  // let [number, setNumber] = useState(props.number);
  let [date, setDate] = useState(props.date);
  let [dropzone, setDropzone] = useState(props.dropzone);
  let [details, setDetails] = useState(props.details);
  let [discipline, setDiscipline] = useState(props.discipline);
  let [plane, setPlane] = useState(props.plane);

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
            setEditing(false)
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
            <button className='modalExitButton' onClick={() => {
              setEditing(false)
              setModalOpen(false)
            }}>X</button>
          </div>

          {!editing
            ? <div className='jumpModalHolder'>
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
                  <img className='jumpModalImage' alt='skydive' src={props.image} />
                </div>
              </div>
            </div>


            : <div className='jumpModalHolder'>
              <div className='jumpNumberHolder'>
                <h1 className='jumpNumber' > Jump Number: {props.number}</h1>
              </div>

              <div className='jumpModalDetailsHolder'>
                <div className='jumpModalInfoHolder' >
                  <div className='jumpModalInput'>
                    <p><b>Date:</b> <input name='date' value={date} onChange={(e) => setDate(e.target.value)} /></p>
                  </div>

                  <div className='jumpModalInput'>
                    <p><b>Dropzone:</b> <input name='dropzone' value={dropzone} onChange={(e) => setDropzone(e.target.value)} /></p>
                  </div>

                  <div className='jumpModalInput'>
                    <p><b>Discipline:</b> <input name='discipline' value={discipline} onChange={(e) => setDiscipline(e.target.value)} /></p>
                  </div>

                  <div className='jumpModalInput'>
                    <p><b>Plane:</b> <input name='plane' value={plane} onChange={(e) => setPlane(e.target.value)} /></p>
                  </div>

                  <div className='jumpModalInputDetails'>
                    <p><b>Jump Details:</b> <input name='details' value={details} onChange={(e) => setDetails(e.target.value)} /></p>
                  </div>
                </div>

                <div className='jumpModalImageHolder'>
                  <img className='jumpModalImage' alt='skydive' src={props.image} />
                </div>
              </div>
            </div>
          }

          <div className='jumpModalFunctionButtons' >
            {!editing
              ? <button onClick={() => setEditing(!editing)} className='jumpModalButton'>Edit Jump</button>
              : <div className='newJumpModalButtons'>
                <button onClick={() => {
                  props.saveChanges(date, dropzone, discipline, details, plane, props.jumpId, props.userId)
                  setEditing(!editing)
                  setModalOpen(false)
                }} className='jumpModalButton' >Save Changes</button>
                <button onClick={() => setEditing(!editing)} className='jumpModalButtonDisgard'>Disregard</button>
              </div>
            }
            <button onClick={() => {
              props.deleteJump(props.jumpId, props.userId)
              setModalOpen(false)
            }} className='jumpModalButton'>Remove Jump</button>
          </div>

        </Modal>
      </div >
    </div>
  )
};

const mapDispatchToProps = {
  deleteJump,
  saveChanges
}

export default connect(null, mapDispatchToProps)(JumpModal);