import React, {useState} from 'react'
import Hero from '../component/Hero/Hero';
import Info from '../component/Info/Info';
import Services from '../component/Services/Services';
import Navbar from '../component/Nav/Navbar'
import Footer from '../component/Footer/Footer'
import SideBar from '../component/SideBar/SideBar';
import {dataOne, dataTwo, dataThree} from '../component/Info/data';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    } 
    return (
      <>
        <SideBar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}  />
        <Hero />
        <Info {...dataOne} />
        <Info {...dataTwo} />
        <Services />
        <Info {...dataThree} />
        <Footer />
      </>
    );
}

export default Home
