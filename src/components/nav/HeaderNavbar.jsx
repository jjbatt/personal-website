
import { Container, Row, Col, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function HeaderNavbar(props) {

    const navigators = ["about", "projects", "education", "contact"]

    return (
    
        <Container>
            <Row>
                <Col className="Header-drawerContainer">
                            <Button className="Header-drawer" onClick={() => props.handleEnable()}>{"|||"}</Button>
                </Col>
                {props.enabled? 
                    (<Col className="Header-topBar" xs={12} sm={9} md={6} lg={4} xl={3}>
                        <Navbar style={{width: "100%"}}>
                        <Button className="Header-drawer" onClick={() => props.handleEnable()}>☰</Button>
                        <Nav className="w-100 d-flex justify-content-evenly align-items-center">
                            <Button className="Header-barButton">
                                <Nav.Link style={{color: "white"}} as={Link} to="/">Home</Nav.Link>
                            </Button>
                            {navigators.map(n => {
                                const navName = n.charAt(0).toUpperCase()+n.slice(1)
                                return (<Button className="Header-barButton">
                                    <Nav.Link style={{color: "white"}} as={Link} to={`/${n}`}>{navName}</Nav.Link>
                                </Button>)
                            })}
                            
                            
                        </Nav>
                        </Navbar>
                    </Col>)
                        :
                    (<></>)
                }
            </Row>
        </Container>
    )
}

export default HeaderNavbar;