import React from 'react';
import styled from 'styled-components';

const Crew_info = styled.p`
    width: 27rem;
`

const R_container = styled.div`
    right: 9rem;
`

const Crew_img = styled.img`
    height: 650px;
`

function victor() {
    return(
        <>
            <section name="crew-container">
                <h2 name="crew-title">
                    PILOT
                </h2>
                <h3 name="crew-name">
                    VICTOR&nbsp;GLOVER
                </h3>
                <Crew_info name="crew-info">
                    Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. 
                    Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, 
                    and served as a station systems flight engineer.
                </Crew_info>
            </section>
        </>
    );
}

export default victor;