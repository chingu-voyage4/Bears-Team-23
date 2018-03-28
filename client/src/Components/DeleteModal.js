import React from 'react';
import Modal from 'react-modal';
import './../css/DeleteModal.css'

const DeleteModal = (props) => {

    return (
        <Modal 
            isOpen= {props.isOpen}
            contentLabel="Delete Pet"
            className="Modal"
        >
        <p>Are you sure you want to delete {props.petName}. This can't be undone.</p>
        <button onClick = {props.deletePic}>Yes, delete</button>
        <button onClick = {props.closeModal}>No, bring me back</button>
        </Modal>
    )
}

export default DeleteModal;