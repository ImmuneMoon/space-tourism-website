import React from 'react';
import styled from 'styled-components';


let Subtext = styled.p`
    width: 27rem;
`

function EuropaDest() {
    return(
        <>
            <section id="dest-container">
                <div id="info">
                    <h2 id="planet-title">EUROPA</h2>
                    <Subtext id="information">
                        The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.
                    </Subtext>
                    <div id="travel-container">
                        <div id="dest-line"></div>
                        <div id="travel">
                            <div id="dist-container">
                                <h3 id="dist-title">
                                    AVG.&nbsp;DISTANCE
                                </h3>
                                <p id="avg-dist">
                                    628&nbsp;MIL.&nbsp;KM
                                </p>
                            </div>
                            <div id="time-container">
                                <h3 id="time-title">
                                    EST.&nbsp;TRAVEL&nbsp;TIME
                                </h3>
                                <p id="est-time">
                                    3&nbsp;YEARS
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default EuropaDest;