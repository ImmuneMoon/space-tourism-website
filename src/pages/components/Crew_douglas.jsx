import React from 'react';
import styled from 'styled-components';
import portrait from './assets/crew/image-douglas-hurley.png'

const Doug_container = styled.section`
    display: flex;
    flex-direction: row;
`

const L_container = styled.div`
    margin: 5rem 0 5rem 0;
`

const R_container = styled.div`
    position: absolute;
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
    width: 27rem;
    margin: 0;
    
`

const Crew_img = styled.img`
    height: 600px;
`

function doug() {
    return(
        <>
            <Doug_container>
                <L_container>
                    <Crew_title>
                        COMMANDER
                    </Crew_title>
                    <Crew_name>
                        DOUGLAS HURLEY
                    </Crew_name>
                    <Crew_info>
                        Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA 
                        astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.
                    </Crew_info>
                </L_container>
                <R_container>
                    <Crew_img id="crew_img" src={portrait} alt="Douglas Hurley"/>
                </R_container>
            </Doug_container>
        </>
    );
}

export default doug;