import React from 'react';
import styled from 'styled-components';


let Subtext = styled.p`
    width: 26rem;
`

function titanDest() {
    return(
        <>
            <section name="dest-container">
                <div name="info">
                    <h2 name="title">TITAN</h2>
                    <Subtext id="information">
                        The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.
                    </Subtext>
                    <div name="travel-container">
                        <div name="dest-line"></div>
                        <div name="travel">
                            <div id="dist-container">
                                <h3 name="dist-title">
                                    AVG.&nbsp;DISTANCE
                                </h3>
                                <p name="avg-dist">
                                    1.6&nbsp;IL.&nbsp;KM
                                </p>
                            </div>
                            <div id="time-container">
                                <h3 name="time-title">
                                    EST.&nbsp;TRAVEL&nbsp;TIME
                                </h3>
                                <p name="est-time">
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