import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './App.css'
import {useDispatch} from 'react-redux'
import { listerContacts } from './actions/action.actions';
const App = () => {
  const dispatch =useDispatch() ;
  useEffect(()=>{
    dispatch(listerContacts)
  })

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="container">
     
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Number</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td><Button className="me-2" variant="success">Modifier</Button>{' '}
          <Button variant="danger">Supprimer</Button>{' '}
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td><Button className="me-2" variant="success">Modifier</Button>{' '}
          <Button variant="danger">Supprimer</Button>{' '}
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td><Button className="me-2" variant="success">Modifier</Button>{' '}
          <Button variant="danger">Supprimer</Button>{' '}
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td><Button className="me-2" variant="success">Modifier</Button>{' '}
          <Button variant="danger">Supprimer</Button>{' '}
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td><Button className="me-2" variant="success">Modifier</Button>{' '}
          <Button variant="danger">Supprimer</Button>{' '}
          </td>
        </tr>
        
      </tbody>
    </Table>
    <Button variant="primary" onClick={handleShow}>
        add user
      </Button>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App
