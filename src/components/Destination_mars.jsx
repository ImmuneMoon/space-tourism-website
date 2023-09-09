import React from 'react';
import styled from 'styled-components';


let Subtext = styled.p`
    width: 25.7rem;
`

function MarsDest() {
    return(
        <>
            <section id="dest-container">
                <div id="info">
                    <h2 id="planet-title">MARS</h2>
                    <Subtext id="information">
                        Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!
                    </Subtext>
                    <div id="travel-container">
                        <div id="dest-line"></div>
                        <div id="travel">
                            <div id="dist-container">
                                <h3 id="dist-title">
                                    AVG.&nbsp;DISTANCE
                                </h3>
                                <p id="avg-dist">
                                    225&nbsp;MIL.&nbsp;KM
                                </p>
                            </div>
                            <div id="time-container">
                                <h3 id="time-title">
                                    EST.&nbsp;TRAVEL&nbsp;TIME
                                </h3>
                                <p id="est-time">
                                    9&nbsp;MONTHS
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default MarsDest;