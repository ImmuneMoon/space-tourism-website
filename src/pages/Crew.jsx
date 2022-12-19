import React from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import bkgrnd from './components/assets/crew/background-crew-desktop.jpg';
import Crew_nav from './components/Crew_nav';
import doug from './components/Crew_douglas';

let Crewmate = doug;

const Content = createGlobalStyle`
    body {
        background-image: url(${bkgrnd});
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -ms-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background-color: black;
    }
`

const Heading = styled.div`
    margin-top: 3rem;
    margin-left: 10.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 23rem;

`

const Two = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bellefair&display=swap');

    font-family: 'Barlow Condensed', sans-serif;
    font-size: 28px;
    font-weight: bold;
    color: #4b5560;
    letter-spacing: 4.75;
`

const Meet = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bellefair&display=swap');

    font-family: 'Barlow Condensed', sans-serif;
    font-size: 28px;
    font-weight: 500;
    color: #FFFFFF;
    letter-spacing: 4.75;
`

const Crew_container = styled.div`
    
`

const Nav_container = styled.div`
    
`

function Crew() {
    return (
        <>
            <Content></Content>
            <main>
                <Heading>
                    <Two>02</Two>
                    <Meet>MEET YOUR CREW</Meet>
                </Heading>
                <Crew_container>
                    <Crewmate />
                </Crew_container>
                <Nav_container>
                    <Crew_nav />
                </Nav_container>
            </main>
        </>
    );
}

export default Crew;