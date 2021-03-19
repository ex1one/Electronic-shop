import React, { useState, useContext, useEffect } from 'react';
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { Context } from "../../index";
import ListGroup from "react-bootstrap/ListGroup";
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { deleteType, fetchTypes } from "../../http/deviceAPI"

const DeleteType = observer(({ show, onHide }) => {
    const { device } = useContext(Context)
    const [value, setValue] = useState('')

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
    }, [])

    const deleteTypeClick = (id) => {
        deleteType({ id: id }).then(data => {
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
                {device.types.map(type =>
                    <ListGroup.Item
                        style={{ cursor: 'pointer' }}
                        onClick={() => deleteTypeClick(type.id)}
                        key={type.id}>
                        {type.name}
                    </ListGroup.Item>
                )}
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal >
    );
})

export default DeleteType;
