import Modal from './Modal';
import Button from './Button';
import { useState } from 'react';

export default function ModalPage(){
    const [showModal,setShowModal]=useState(false);
    const handleClick=()=>{
        setShowModal(!showModal)
    }
    return (
        <div>
            
            <Button primary onClick={handleClick}>Open Modal</Button>
            {showModal &&<Modal/>}
        </div>
    )
}