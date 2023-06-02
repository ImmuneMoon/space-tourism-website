import React from 'react';
import styled from 'styled-components';


let Subtext = styled.p`
    width: 26rem;
`

function titanDest() {
    return(
        <>
            <section id="dest-container">
                <div id="info">
                    <h2 id="title">TITAN</h2>
                    <Subtext id="information">
                        The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.
                    </Subtext>
                    <div id="travel-container">
                        <div id="dest-line"></div>
                        <div id="travel">
                            <div id="dist-container">
                                <h3 id="dist-title">
                                    AVG.&nbsp;DISTANCE
                                </h3>
                                <p id="avg-dist">
                                    1.6&nbsp;IL.&nbsp;KM
                                </p>
                            </div>
                            <div id="time-container">
                                <h3 id="time-title">
                                    EST.&nbsp;TRAVEL&nbsp;TIME
                                </h3>
                                <p id="est-time">
                                    7&nbsp;YEARS
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default titanDest;