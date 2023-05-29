import React from 'react';
import styled from 'styled-components';


let Subtext = styled.p`
    width: 27rem;
`

function EuropaDest() {
    return(
        <>
            <section name="dest-container">
                <div name="info">
                    <h2 name="title">EUROPA</h2>
                    <Subtext id="information">
                        The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.
                    </Subtext>
                    <div name="travel-container">
                        <div name="dest-line"></div>
                        <div name="travel">
                            <div id="dist-container">
                                <h3 name="dist-title">
                                    AVG.&nbsp;DISTANCE
                                </h3>
                                <p name="avg-dist">
                                    628&nbsp;MIL.&nbsp;KM
                                </p>
                            </div>
                            <div id="time-container">
                                <h3 name="time-title">
                                    EST.&nbsp;TRAVEL&nbsp;TIME
                                </h3>
                                <p name="est-time">
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