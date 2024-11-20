import React from 'react'
import "./style/modal.css"
import ReactDOM from 'react-dom'

function Modal({children, closeModal}) {
   
    
  return ReactDOM.createPortal((
    <div>{children}
    <button className='buttons' onClick={closeModal}>Coose modal</button>
    </div>

  ),document.body)
}

export default Modal