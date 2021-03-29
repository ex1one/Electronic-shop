import { toJS } from 'mobx';
import React, { useContext } from 'react';
import { Button, Container, Col, Row } from 'react-bootstrap';
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import BasketItem from '../components/BasketItem'

const Basket = observer(() => {
    const { device } = useContext(Context)
    let itemsSet = Array.from(new Set(device.basketItems))
    return (
        <Container className="mt-3">
            <div>
                <Row>
                    <Col>
                        Очистить корзину
                    </Col>
                    <Col>
                        Товар
                    </Col>
                    <Col>
                        Цена
                    </Col>
                    <Col>
                        Колличество
                    </Col>
                    <Col>
                        Сумма
                    </Col>
                </Row>
                {itemsSet.map(item =>
                    <BasketItem key={item.id} basketItem={item} />
                )}
            </div>
        </Container>
    );
})

export default Basket;
