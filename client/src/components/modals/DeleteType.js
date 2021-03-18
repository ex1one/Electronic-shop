import React, { useState, useContext } from 'react';
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { Context } from "../../index";
import ListGroup from "react-bootstrap/ListGroup";
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { deleteType } from "../../http/deviceAPI"

const DeleteType = observer(({ show, onHide }) => {
    const { device } = useContext(Context)
    const [value, setValue] = useState('')

    const addType = () => {
        deleteType({ name: value }).then(data => {
            setValue('')
            onHide()
        })
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Удалить тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ListGroup>
                </ListGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={addType}>Удалить</Button>
            </Modal.Footer>
        </Modal >
    );
})

export default DeleteType;
