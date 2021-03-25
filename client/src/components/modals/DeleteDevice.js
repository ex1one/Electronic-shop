import React, { useState, useContext, useEffect } from 'react';
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { Context } from "../../index";
import ListGroup from "react-bootstrap/ListGroup";
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { deleteDevice, fetchTypes, fetchDevices } from "../../http/deviceAPI"

const DeleteDevice = observer(({ show, onHide }) => {

    useEffect(() => {
        fetchDevices().then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [])

    const { device } = useContext(Context)
    const deleteDeviceClick = (id) => {
        device.setDeleteDevices(id)
        deleteDevice({ id: id })
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Удалить устройство
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {device.devices.map(device =>
                    <ListGroup.Item
                        style={{ cursor: 'pointer' }}
                        onClick={() => deleteDeviceClick(device.id)}
                        key={device.id}>
                        {device.name}
                    </ListGroup.Item>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={() => console.log(toJS(device.devices))}>
                    LOG
                </Button>
            </Modal.Footer>
        </Modal >
    );
})

export default DeleteDevice;
