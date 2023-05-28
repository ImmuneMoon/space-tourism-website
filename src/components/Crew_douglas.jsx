import React from 'react';
import styled from 'styled-components';

const Crew_info = styled.p`
    width: 27rem;
`

function doug() {
    return(
        <>
            <section name="crew-container">
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
            </section>
        </>
    );
}

export default doug;