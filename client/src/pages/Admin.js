import React, { useState } from 'react';
import { Button, Container, Row, Col } from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import CreateType from "../components/modals/CreateType";
import DeleteType from "../components/modals/DeleteType";
import DeleteBrand from "../components/modals/DeleteBrand";
import DeleteDevice from "../components/modals/DeleteDevice";

const Admin = () => {
    const [typeVisible, setTypeVisible] = useState(false)
    const [deleteTypeVisible, setDeleteTypeVisible] = useState(false)
    const [brandVisible, setBrandVisible] = useState(false)
    const [deleteBrandVisible, setDeleteBrandVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)
    const [deleteDeviceVisible, setDeleteDeviceVisible] = useState(false)

    return (
        <Container>
            <Row className="justify-content-center">
                <Col sm={4}>
                    <Button
                        variant={"outline-dark"}
                        className="mt-4 p-2 btn-block"
                        onClick={() => setTypeVisible(true)}>
                        Добавить тип
                    </Button>
                </Col>
                <Col sm={3}>
                    <Button
                        variant={"outline-dark bg-danger"}
                        className="mt-4 p-2 btn-block text-white"
                        onClick={() => setDeleteTypeVisible(true)}>
                        Удалить тип
                </Button>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col sm={4}>
                    <Button
                        variant={"outline-dark"}
                        className="mt-4 p-2 btn-block"
                        onClick={() => setBrandVisible(true)}>
                        Добавить бренд
                    </Button>
                </Col>
                <Col sm={3}>
                    <Button
                        variant={"outline-dark bg-danger"}
                        className="mt-4 p-2 btn-block text-white"
                        onClick={() => setDeleteBrandVisible(true)}>
                        Удалить бренд
                    </Button>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col sm={4}>
                    <Button
                        variant={"outline-dark"}
                        className="mt-4 p-2 btn-block"
                        onClick={() => setDeviceVisible(true)}>
                        Добавить устройство
                    </Button>
                </Col>
                <Col sm={3}>
                    <Button
                        variant={"outline-dark bg-danger"}
                        className="mt-4 p-2 btn-block text-white"
                        onClick={() => setDeleteDeviceVisible(true)}>
                        Удалить устройство
                    </Button>
                </Col>
            </Row>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)} />
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
            <DeleteType show={deleteTypeVisible} onHide={() => setDeleteTypeVisible(false)} />
            <DeleteBrand show={deleteBrandVisible} onHide={() => setDeleteBrandVisible(false)} />
            <DeleteDevice show={deleteDeviceVisible} onHide={() => setDeleteDeviceVisible(false)} />
        </Container>
    );
};

export default Admin;
