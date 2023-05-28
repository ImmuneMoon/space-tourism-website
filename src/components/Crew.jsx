import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import bkgrnd from './assets/crew/background-crew-desktop.jpg';
import Crew_nav from './Crew_nav';
import doug from './Crew_douglas';
import dougPortrait from './assets/crew/image-douglas-hurley.png';
import mark from './Crew_mark';
import markPortrait from './assets/crew/image-mark-shuttleworth.png';
import victor from './Crew_victor';
import vicportrait from './assets/crew/image-victor-glover.png';
import anoushe from './Crew_anoushe';
import anPortrait from './assets/crew/image-anousheh-ansari.png';


const Content = createGlobalStyle`
    body {
        background-image: url(${bkgrnd});
		background-repeat: no-repeat;
		height: 100%;
		background-position: center;
		background-size: cover;
    }
`

const Main = styled.main`
    height: 100%;
`

const Heading = styled.div`
    margin: 3rem 0 3rem 10.5rem;
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

const Crew_container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10.5rem;
`

const Crew_info_container = styled.div`
    
`

const Crewmember = styled.div`
    
`

const Crew_img_container = styled.div`
    padding: 0 5rem;
    margin: 0 auto;
`

const Crew_nav_container = styled.div`
    margin: 3rem auto 3rem 0;
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
                <Crew_container>
                    <Crew_info_container>
                        <Crewmember>
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
                        </Crewmember>
                        <Crew_nav_container>
                            <Crew_nav onCrewChange={setDisplayedCrew}/>
                        </Crew_nav_container>
                    </Crew_info_container>
                    <Crew_img_container>
                        {displayedCrew === 'doug' && 
                            <img id="crew_img" src={dougPortrait} alt="Douglas Hurley"/>
                        }
                        {displayedCrew === 'mark' && 
                            <img id="crew_img" src={markPortrait} alt="Mark Shuttleworth"/>
                        }
                        {displayedCrew === 'victor' && 
                            <img id="crew_img" src={vicportrait} alt="Victor Glover"/>
                        }
                        {displayedCrew === 'anoushe' && 
                            <img id="crew_img" src={anPortrait} alt="Anousheh Ansari"/>
                        }
                    </Crew_img_container>
                </Crew_container>
            </Main>
        </>
    );
}

export default Crew;