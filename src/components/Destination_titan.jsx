import React from 'react';
import styled from 'styled-components';
import titan from './assets/destination/image-titan.png';


let Subtext = styled.p`
    width: 27.25rem;
`

function titanDest() {
    return(
        <>
            <section name="dest-container">
                <div name="planet">
                    <img name="dest-img" src={titan} alt="Titan" />
                    <div name="shadow"></div>
                </div>
                <div name="info">
                    <h2 name="title">TITAN</h2>
                    <Subtext id="dest-subtext">
                        The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.
                    </Subtext>
                    <div name="travel-container">
                        <div name="dest-line"></div>
                        <div name="travel">
                            <div>
                                <h3 name="dist-title">
                                    AVG. DISTANCE
                                </h3>
                                <p name="avg-dist">
                                    1.6 BIL. KM
                                </p>
                            </div>
                            <div name="travel-time">
                                <h3 name="time-title">
                                    EST. TRAVEL TIME
                                </h3>
                                <p name="est-time">
                                    7 YEARS
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