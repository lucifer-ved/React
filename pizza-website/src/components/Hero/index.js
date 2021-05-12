import React, { useState } from 'react';
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements';
import NavBar from '../navbar';
import Sidebar from '../Sidebar';

const Hero = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    
    return (
        <HeroContainer>
            <NavBar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroContent>
                <HeroItems>
                    <HeroH1> World's Best Pizza Is Here !!</HeroH1>
                    <HeroP> Ready in 60 Sec ! </HeroP>
                    <HeroBtn> Place Order </HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer> 
    )
} 

export default Hero;
