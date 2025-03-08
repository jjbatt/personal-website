import {Container, Carousel} from 'react-bootstrap';
import "../App.css"

function HomeContainer(props) {
    return (
        <Container className="Body-opacity" style={{top:(props.navbarEnabled? 75 : 0)}} fluid>
            <Carousel style={{height: "90%"}}>
                {props.images.map((url, index) => 
                    <Carousel.Item key={index} style={{height: "100%"}}>
                        <div>
                            <img style={{objectFit: "contain", maxHeight:"100%", maxWidth:"133%"}} src={url}></img>
                        </div>
                    </Carousel.Item>
                )}
            </Carousel>
        </Container>
    )
}

export default HomeContainer;