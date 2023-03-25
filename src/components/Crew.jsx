import React from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import bkgrnd from './assets/crew/background-crew-desktop.jpg';
import Crew_nav from './Crew_nav';
import doug from './Crew_douglas';
import mark from './Crew_mark';
import victor from './Crew_victor';
import anoushe from './Crew_anoushe';

let Crewmate = doug;

window.addEventListener('click', () => {
    let element = event.target;
    console.log('element',element);
    const d_Dot = document.getElementById('doug');
    console.log('ddot',d_Dot);
    const m_Dot = document.getElementById('mark');
    const v_Dot = document.getElementById('victor');
    const a_Dot = document.getElementById('anousheh');

    if (element == d_Dot) {
        Crewmate = doug;
    }
    else if (element == m_Dot) {
        Crewmate = mark;
    }
    else if (element == v_Dot) {
        Crewmate = victor;
    }
    else if (element == a_Dot) {
        Crewmate = anoushe;
    }
});

const Content = createGlobalStyle`
    body {
        background-image: url(${bkgrnd});
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
    font-size: 28px;
    font-weight: bold;
    color: #4b5560;
    letter-spacing: 4.75;
`

const Meet = styled.h1`
    font-size: 28px;
    font-weight: 500;
    color: #FFFFFF;
    letter-spacing: 4.75;
`

const Crewmate_container = styled.div`
    margin-top: 5rem;
    margin-left: 10rem;
`

const Nav_container = styled.div`
    margin: 3rem 0 3rem 9.3rem;
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
                <Crewmate_container>
                    <Crewmate/>
                </Crewmate_container>
                <Nav_container>
                    <Crew_nav/>
                </Nav_container>
            </Main>
        </>
    );
}

export default Crew;