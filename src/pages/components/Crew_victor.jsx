import React from 'react';
import styled from 'styled-components';
import portrait from './assets/crew/image-victor-glover.png'

const Doug_container = styled.section`
    display: flex;
    flex-direction: row;
`

const L_container = styled.div`
    margin: 5rem 0 5rem 0;
`

const R_container = styled.div`
    position: sticky;
    right: 15%;
    bottom: 0;
    z-index: -10;
`

const Crew_title = styled.h2`
    @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bellefair&display=swap');

    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 500;
    font-size: 28px;
    letter-spacing: 4.75;
    color: rgba(255, 255, 255, 0.5);
    margin: 0 0 1.5rem 0;
    
`

const Crew_name = styled.h3`
    @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bellefair&display=swap');

    font-family: 'Barlow Condensed', sans-serif;
    font-size: 56px;
    font-weight: 500;
    margin: 0 0 1.5rem 0;
    
`

const Crew_info = styled.p`
    color: #D0D6F9;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.75;
    width: 28rem;
    margin: 0;
    
`

const Crew_img = styled.img`
    height: 535px;
`

function victor() {
    return(
        <>
            <Doug_container>
                <L_container>
                    <Crew_title>
                        PILOT
                    </Crew_title>
                    <Crew_name>
                        VICTOR GLOVER
                    </Crew_name>
                    <Crew_info>
                        Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer.
                    </Crew_info>
                </L_container>
                <R_container>
                    <Crew_img src={portrait} alt="Mark Shuttleworth"/>
                </R_container>
            </Doug_container>
        </>
    );
}

export default victor;