import Modal from './Modal';
import Button from './Button';
import { useState } from 'react';

export default function ModalPage(){
    const [showModal,setShowModal]=useState(false);

    const handleClose=()=>{
        setShowModal(false)
    }
    const handleClick=()=>{
        setShowModal(true)
    }

    const modal=<Modal onClose={handleClose} actionBar={<Button primary onClick={handleClose}>I agree</Button>}>Here is the agreemenet</Modal>
    return (
        <div>
            
            <Button primary onClick={handleClick}>Open Modal</Button>
            {showModal &&modal}
        </div>
    )
}