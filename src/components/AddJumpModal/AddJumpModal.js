import React, { useState } from 'react';
import Modal from 'react-modal';
import './AddJumpModal.css';
import { connect } from 'react-redux';
import AmazonDropzone from '../AmazonDropzone/AmazonDropzone';

function AddJumpModal(props) {

  let [modalOpen, setModalOpen] = useState(false);
  let [date, setDate] = useState('');
  let [dz, setDz] = useState('');
  let [discipline, setDiscipline] = useState('');
  let [photo, setPhoto] = useState('');
  let [plane, setPlane] = useState('');
  let [details, setDeatils] = useState('');

  function submitForm() {

  };

  return (
    <div>
      <div className='logbookAddJumpHolder' onClick={() => setModalOpen(true)} >
        <h1>Add A Jump</h1>
      </div>

      <div className='modalThreeHolder'>
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
          }>

          <form className='addJumpForm'>
            <div className='mainFormDiv' >
              <div className='modalButtonHolder'>
                <button className='modalExitButton' onClick={() => setModalOpen(false)}>X</button>
              </div>

              <div className='mainJumpDetails'>
                <div className='addJumpInfoHolder'>
                  <input placeholder='Date of Jump' name='date' value={date} onChange={(e) => setDate(e.target.value)} />
                </div>

                <div className='addJumpInfoHolder'>
                  <input placeholder='Date of Jump' name='date' value={discipline} onChange={(e) => setDiscipline(e.target.value)} />
                </div>

                <div className='addJumpInfoHolder'>
                  <input placeholder='Date of Jump' name='date' value={dz} onChange={(e) => setDz(e.target.value)} />
                </div>
              </div>
            </div>

            <div className='amazonImageHolder'>
              <AmazonDropzone photoFn={setPhoto} />
            </div>

            <div className='mainJumpDetails'>
              <div className='jumpDetailsHolder'>
                <div className='jumpDetails'>
                  <input placeholder='Date of Jump' name='date' value={date} onChange={(e) => setDate(e.target.value)} />
                </div>

                <div className='jumpDetails'>
                  <input placeholder='Date of Jump' name='date' value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
              </div>

              <div className='addJumpCreateButton'>
                {/* <button onClick={(e) => submitForm(e)}>Add Jump!</button> */}
              </div>
            </div>

          </form>
        </Modal>
      </div>

    </div>
  )
};

export default connect()(AddJumpModal);