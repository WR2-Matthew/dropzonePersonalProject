import React, { useEffect, useState } from 'react';
import './Logbook.css'
import { connect } from 'react-redux';
import { getAllJumps } from '../../redux/actionCreators';
import AddJumpModal from '../AddJumpModal/AddJumpModal';

function Logbook(props) {

  let [dzSearched, setDzSearched] = useState('');

  useEffect(() => {
    if (props.user) {
      props.getAllJumps(props.user.id)
    }
  }, [props.user])

  function handleChangeDz(e) {
    setDzSearched(e.target.value)
  }

  console.log(props.jumps)
  return (
    <div className='logbookHolder'>
      {!props.user ? <h1>You must login to view your logbook!</h1>
        :
        <div className='logbookFunctionalityHolder'>

          <div className='logbookSearchHolder' >
            <input className='logbookSearch' placeholder='Dropzone Jumped At' value={dzSearched} onChange={(e) => handleChangeDz(e)} />
          </div>

          <div>
            <AddJumpModal />
          </div>

        </div>
      }
    </div>
  )
};

const mapDispatchToProps = {
  getAllJumps
};

function mapStateToProps(state) {
  return {
    jumps: state.jumpReducer.jumps.data,
    user: state.userReducer.user.data
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logbook);