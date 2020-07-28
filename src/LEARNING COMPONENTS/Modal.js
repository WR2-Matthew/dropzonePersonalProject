// import React, { useState, forwardRef, useImperativeHandle } from 'react'
// import ReactDOM from 'react-dom'

// const Modal = forwardRef((props, ref) => {

//   let [show, setShow] = useState(true)

//   useImperativeHandle(ref, () => {
//     return {
//       openModal: () => open(),
//       closeModal: () => close()
//     }
//   });

//   function open() {
//     setShow(true)
//   }

//   function close() {
//     setShow(false);
//   };

//   if (show) {

//     return ReactDOM.createPortal(
//       <div className='modalHolder'>
//         <div onClick={close} className='modalBackGround'>
//           <div className='modalBox'>
//             {props.children}
//           </div>
//         </div>
//       </div>, document.getElementById('modal-root')
//     )
//   }
//   return null;
// });


// export default Modal;





import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Dropzone from '.././components/Dropzones/Dropzones'

Modal.setAppElement('#root')

function ModalComp(props) {

  let [modalOpen, setModalOpen] = useState(false);

  console.log(modalOpen)

  return (
    <div>
      <Dropzone name={props.name} state={props.state} picture={props.picture} modalFn={setModalOpen} />
      <div>
        <Modal
          isOpen={modalOpen}
          onRequestClose={() => setModalOpen(false)}
          style={
            {
              overlay: {
                backgroundColor: '#0C6291'
              }
            }
          }
        >
          <h2>Modal Title</h2>
          <p>Modal body</p>
          <button onClick={() => setModalOpen(false)}>Close</button>
        </Modal>
      </div>
    </div >
  )
};
export default ModalComp;

