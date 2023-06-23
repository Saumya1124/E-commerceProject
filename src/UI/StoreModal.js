import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function StoreModal(props) {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      

      <Modal show={true} onHide={handleClose} animation={false}>
        <Modal.Header >
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                <hr />
                    <p>Item</p>
                    <img src={props.img}></img>
                    <p>{props.title}</p>
        
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={props.onHide}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default StoreModal;