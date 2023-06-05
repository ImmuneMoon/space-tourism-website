import React from 'react';
import styled from 'styled-components';


let Subtext = styled.p`
    width: 25rem;
`

function MoonDest() {
    return(
        <>
            <section id="dest-container">
                <div id="info">
                    <h2 id="planet-title">MOON</h2>
                    <Subtext id="information">
                        See our planet as you’ve never seen it before. 
                        A perfect relaxing trip away to help regain perspective and come back refreshed. 
                        While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
                    </Subtext>
                    <div id="travel-container">
                        <div id="dest-line"></div>
                        <div id="travel">
                            <div id="dist-container">
                                <h3 id="dist-title">
                                    AVG.&nbsp;DISTANCE
                                </h3>
                                <p id="avg-dist">
                                    384,400&nbsp;KM
                                </p>
                            </div>
                            <div id="time-container">
                                <h3 id="time-title">
                                    EST.&nbsp;TRAVEL&nbsp;TIME
                                </h3>
                                <p id="est-time">
                                    3&nbsp;DAYS
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default MoonDest;