import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import bkgrnd from './assets/crew/background-crew-desktop.jpg';
import Crew_nav from './Crew_nav';
import doug from './Crew_douglas';
import mark from './Crew_mark';
import victor from './Crew_victor';
import anoushe from './Crew_anoushe';


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

const Doug = doug;
const Mark = mark;
const Victor = victor;
const Anoushe = anoushe;

function Crew() {
    const [displayedCrew, setDisplayedCrew] = useState('doug');

    return (
        <>
            <Content></Content>
            <Main>
                <Heading>
                    <Two>02</Two>
                    <Meet>MEET YOUR CREW</Meet>
                </Heading>
                <Crewmate_container>
                    {displayedCrew === 'doug' && 
						<Doug id="doug-cpnt"/>
					}
					{displayedCrew === 'mark' && 
						<Mark id="mark-cpnt"/>
					}
					{displayedCrew === 'victor' && 
						<Victor id="victor-cpnt"/>
					}
					{displayedCrew === 'anoushe' && 
						<Anoushe id="anoushe-cpnt"/>
					}
                </Crewmate_container>
                <Nav_container>
                    <Crew_nav onCrewChange={setDisplayedCrew}/>
                </Nav_container>
            </Main>
        </>
    );
}

export default Crew;