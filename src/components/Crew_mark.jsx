import React from 'react';
import styled from 'styled-components';
import portrait from './assets/crew/image-mark-shuttleworth.png'


const Crew_info = styled.p`
    width: 27.5rem;
`

const R_container = styled.div`
    right: 13rem;
`

const Crew_img = styled.img`
    height: 590px;
    bottom: 0;
`

function mark() {
    return(
        <>
            <section name="crew-container">
                <div name="l-container">
                    <h2 name="crew-title">
                        MISSION SPECIALIST
                    </h2>
                    <h3 name="crew-name">
                        MARK SHUTTLEWORTH
                    </h3>
                    <Crew_info name="crew-info">
                        Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based 
                        Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space 
                        tourist.
                    </Crew_info>
                </div>
                <R_container name="r-container">
                    <Crew_img class="crew_img" src={portrait} alt="Mark Shuttleworth"/>
                </R_container>
            </section>
        </>
    );
}

export default mark;