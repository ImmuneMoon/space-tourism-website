import React from 'react';
import styled from 'styled-components';
import moon from './assets/destination/image-moon.png';


let Subtext = styled.p`
    width: 27rem;
`

function location() {
    return(
        <>
            <section name="dest-container">
                <div name="planet">
                    <img name="dest-img" src={moon} alt="Moon" />
                    <div name="shadow"></div>
                </div>
                <div name="info">
                    <h2 name="title">MOON</h2>
                    <Subtext id="dest-subtext">
                        See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
                    </Subtext>
                    <div name="travel-container">
                        <div name="dest-line"></div>
                        <div name="travel">
                            <div>
                                <h3 name="dist-title">
                                    AVG. DISTANCE
                                </h3>
                                <p name="avg-dist">
                                    384,400 KM
                                </p>
                            </div>
                            <div name="travel-time">
                                <h3 name="time-title">
                                    EST. TRAVEL TIME
                                </h3>
                                <p name="est-time">
                                    3 DAYS
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default location;