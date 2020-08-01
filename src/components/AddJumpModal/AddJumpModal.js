import React, { useState } from 'react';
import Modal from 'react-modal';
import './AddJumpModal.css';
import { connect } from 'react-redux';
import { addJump } from '../../redux/actionCreators';
import AmazonDropzone from '../AmazonDropzone/AmazonDropzone';

function AddJumpModal(props) {

  let [modalOpen, setModalOpen] = useState(false);
  let [date, setDate] = useState('');
  let [dz, setDz] = useState('');
  let [discipline, setDiscipline] = useState('');
  let [photo, setPhoto] = useState('');
  let [plane, setPlane] = useState('');
  let [details, setDetails] = useState('');

  function submitForm(e) {
    e.preventDefault();

    if (!date || !dz || !discipline || !photo || !plane || !details) {
      alert("All field's must be filled out to add jump!");
    }

    else {
      props.addJump(date, dz, discipline, photo, plane, details, props.userId);
      setModalOpen(false);
    };
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
                  <input placeholder="Jump's Discipline" name='discipline' value={discipline} onChange={(e) => setDiscipline(e.target.value)} />
                </div>

                <div className='addJumpInfoHolder'>
                  <input placeholder='Dropzone' name='dz' value={dz} onChange={(e) => setDz(e.target.value)} />
                </div>
              </div>
            </div>

            <div className='amazonImageHolder'>
              <AmazonDropzone photoFn={setPhoto} />
            </div>

            <div className='mainJumpDetails'>
              <div className='jumpDetailsHolder'>
                <div className='jumpDetails'>
                  <input placeholder='Plane Jumped From' name='plane' value={plane} onChange={(e) => setPlane(e.target.value)} />
                </div>

                <div className='jumpDetails'>
                  <input placeholder='Details of Jump' name='details' value={details} onChange={(e) => setDetails(e.target.value)} />
                </div>
              </div>

              <div className='addJumpCreateButton'>
                <button onClick={(e) => submitForm(e)}>Add Jump!</button>
              </div>
            </div>

          </form>
        </Modal>
      </div>

    </div>
  )
};

const mapDispatchToProps = {
  addJump
};

export default connect(null, mapDispatchToProps)(AddJumpModal);