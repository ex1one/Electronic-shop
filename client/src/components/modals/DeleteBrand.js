import React, { useState, useContext, useEffect } from 'react';
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { Context } from "../../index";
import ListGroup from "react-bootstrap/ListGroup";
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { deleteBrand, fetchTypes } from "../../http/deviceAPI"

const DeleteBrand = observer(({ show, onHide }) => {
    const { device } = useContext(Context)

    const deleteBrandClick = (id) => {
        device.setDeleteBrands(id)
        deleteBrand({ id: id })
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Удалить бренд
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {device.brands.map(brand =>
                    <ListGroup.Item
                        style={{ cursor: 'pointer' }}
                        onClick={() => deleteBrandClick(brand.id)}
                        key={brand.id}>
                        {brand.name}
                    </ListGroup.Item>
                )}
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal >
    );
})

export default DeleteBrand;
