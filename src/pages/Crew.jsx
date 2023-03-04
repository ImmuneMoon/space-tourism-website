import React from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import bkgrnd from './components/assets/crew/background-crew-desktop.jpg';
import Crew_nav from './components/Crew_nav';
import doug from './components/Crew_douglas';
import mark from './components/Crew_mark';
import victor from './components/Crew_victor';
import anoushe from './components/Crew_anoushe';

let Crewmate = doug;

const Content = createGlobalStyle`
    body {
        background-image: url(${bkgrnd});
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -ms-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background-repeat: no-repeat;
        background-color: black;
        position: relative;
    }
`

const Main = styled.main`
    height: 100%;
`

const Heading = styled.div`
    margin-top: 3rem;
    margin-left: 10.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 19.5rem;

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
    margin-left: 10rem;
`

const Nav_container = styled.div`
    margin-left: 7rem;
    width: fit-content;
`

function Crew() {
    return (
        <>
            <Content></Content>
            <Main>
                <Heading>
                    <Two>02</Two>
                    <Meet>MEET YOUR CREW</Meet>
                </Heading>
                <Crew_container>
                    <Crewmate/>
                </Crew_container>
                <Nav_container>
                    <Crew_nav/>
                </Nav_container>
            </Main>
        </>
    );
}

export default Crew;