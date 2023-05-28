import React from 'react';
import styled from 'styled-components';


let Subtext = styled.p`
    width: 27.6rem;
`

function MarsDest() {
    return(
        <>
            <section name="dest-container">
                <div name="info">
                    <h2 name="title">MARS</h2>
                    <Subtext id="dest-subtext">
                        Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!
                    </Subtext>
                    <div name="travel-container">
                        <div name="dest-line"></div>
                        <div name="travel">
                            <div>
                                <h3 name="dist-title">
                                    AVG. DISTANCE
                                </h3>
                                <p name="avg-dist">
                                    225 MIL. KM
                                </p>
                            </div>
                            <div name="travel-time">
                                <h3 name="time-title">
                                    EST. TRAVEL TIME
                                </h3>
                                <p name="est-time">
                                    9 MONTHS
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