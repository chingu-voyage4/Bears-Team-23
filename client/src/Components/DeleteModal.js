import React from 'react';
import Modal from 'react-modal';
import './../css/DeleteModal.css'

const DeleteModal = (props) => {

    return (
        <Modal 
            isOpen= {props.isOpen}
            contentLabel="Delete Pet"
            className="Modal"
            ariaHideApp={false}
            overlayClassName="Overlay"
        >
        <div className = "Modal_Row">
            <p className = 'modalText'>Are you sure you want to delete {props.petName}? This cannot be undone.</p>
            <div className = "modalClose" onClick = {props.closeModal}>&#10005;</div>
        </div>

        <button className = "modalButton__delete"onClick = {props.deletePic}>Yes, delete</button>
        </Modal>
    )
}

export default DeleteModal;
