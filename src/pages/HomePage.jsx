import React, {useState} from 'react'
import {Button} from 'react-bootstrap'
import '../App.css';

import HomeContainer from '../components/HomeContainer';
import NavbarHeader from '../components/NavbarHeader';
import HeaderNavbar from '../components/nav/HeaderNavbar';


function HomePage(props) {
    const [navbarEnabled, setNavbarEnabled] = useState(false)

    function handleNavbarEnable() {
        setNavbarEnabled(!navbarEnabled)
    }

    return(<>
    <HomeContainer navbarEnabled={navbarEnabled} images={props.images}></HomeContainer>
    <HeaderNavbar enabled={navbarEnabled} handleEnable={handleNavbarEnable}></HeaderNavbar>
    {/* <NavbarHeader enabled={navbarEnabled} handleEnable={handleNavbarEnable}></NavbarHeader> */}
    </>
    )
}

export default HomePage;