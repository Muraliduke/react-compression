import React from 'react';
import {Modal, Button}  from 'react-bootstrap';


const ModalLayout = (props : any) => {
    
    return (
        <>
            <Modal show={props.show} onHide={props.handleClose} centered>
                {/* <Modal.Header closeButton>
                <Modal.Title></Modal.Title>
                </Modal.Header> */}
                <Modal.Body>
                    <p style={{color: 'green'}}>Thanks For Showing Your interest to <b>Koops</b>.</p>
                    <p>We have received your information.
                    Our team representatives will contact you soon.</p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="dark" onClick={props.handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal> 
        </>
    )
}

export default ModalLayout
