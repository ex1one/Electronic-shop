import React, { useContext } from 'react';
import { observable, toJS } from 'mobx';
import { Context } from "../index";
import { Row, Container, Image, Button, Col } from 'react-bootstrap'
import { observer } from "mobx-react-lite";

const BasketItem = observer(({ basketItem }) => {
    const { device } = useContext(Context)
    function itemCounter() {
        return device.basketItems.filter(item => item.id === basketItem.id).length
    }

    return (
        <Row className="mt-3">
            <Col>
                <Image width={200} height={122} src={process.env.REACT_APP_API_URL + basketItem.img} />
            </Col>
            <Col>
                <span>{basketItem.name}</span>
            </Col>
            <Col>
                <span>{basketItem.price} рублей</span>
            </Col>
            <Col>
                <div className="d-flex ">
                    <Button variant="primary" size="sm" onClick={() => device.setBasketPlusItem(basketItem)}>Добавить</Button>
                    <h1>{itemCounter()}</h1>
                    <Button variant="primary" size="sm" onClick={() => device.setBasketMinusItem(basketItem.id)}>Удалить</Button>
                    <h1>{basketItem.price * itemCounter()}</h1>
                </div>
            </Col>
        </Row>
    )
})

export default BasketItem;