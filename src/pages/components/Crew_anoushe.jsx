import React from 'react';
import styled from 'styled-components';
import portrait from './assets/crew/image-anousheh-ansari.png'


const Crew_info = styled.p`
    width: 27.45rem;
`
const Crew_img = styled.img`
    height: 490px;
`

function anoushe() {
    return(
        <>
            <section name="crew-container">
                <div name="l-container">
                    <h2 name="crew-title">
                        FLIGHT ENGINEER
                    </h2>
                    <h3 name="crew-name">
                        ANOUSHEH ANSARI
                    </h3>
                    <Crew_info name="crew-info">
                        Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the 
                        fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first 
                        Iranian in space.
                    </Crew_info>
                </div>
                <div name="r-container">
                    <Crew_img class="crew_img" src={portrait} alt="Anousheh Ansari"/>
                </div>
            </section>
        </>
    );
}

export default anoushe;