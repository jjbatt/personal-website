import React, {useState} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import "../App.css";

const navigators = ["about", "projects", "education", "contact"]

function NavbarHeader(props) {

    return (
        <Container>
            <Row>
                <Col className="Header-drawerContainer">
                    <Button className="Header-drawer" onClick={() => props.handleEnable()}>{"|||"}</Button>
                </Col>
                {props.enabled? 
                    (<Col className="Header-topBar" xs={12} sm={9} md={6} lg={4} xl={3}>
                        <Button className="Header-drawer" onClick={() => props.handleEnable()}>☰</Button>
                            {navigators.map(n => {
                                const navName = n.charAt(0).toUpperCase() + n.slice(1)
                                return <Button className="Header-barButton" key={n}>{navName}</Button>
                            })}
                    </Col>)
                        :
                    <></>
                }
            </Row>
        </Container>
    )
}

export default NavbarHeader