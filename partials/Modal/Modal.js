import { useContext } from 'react';
import { RiCloseLine } from 'react-icons/ri'

import './Modal.css';

function Modal({ setShowModalContent, children }) {



    return (
        <div className={`modal`}>
            <div className="modal_backdrop" onClick={() => setShowModalContent(false)}></div>
            <div className={`modal_dialog modal_dialog_centered modal_dialog_scrollable`}>
                <div className="modal_content">
                    <button type='button' className='modal_close' onClick={() => setShowModalContent(false)}><RiCloseLine /></button>
                    <div className="modal_body">{children}</div>
                </div>
            </div>
        </div>
    )
}
export default Modal