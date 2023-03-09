import React from 'react';
import styled from 'styled-components';
import portrait from './assets/crew/image-douglas-hurley.png'

const Crew_info = styled.p`
    width: 27rem;
`

const Crew_img = styled.img`
    height: 675px;
`

function doug() {
    return(
        <>
            <section name="crew-container">
                <div name="l-container">
                    <h2 name="crew-title">
                        COMMANDER
                    </h2>
                    <h3 name="crew-name">
                        DOUGLAS HURLEY
                    </h3>
                    <Crew_info name="crew-info">
                        Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA 
                        astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.
                    </Crew_info>
                </div>
                <div name="r-container">
                    <Crew_img id="crew_img" src={portrait} alt="Douglas Hurley"/>
                </div>
            </section>
        </>
    );
}

export default doug;