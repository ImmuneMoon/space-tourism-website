import React from 'react';
import styled from 'styled-components';

const Vehicle_sction = styled.div`
    width: 30rem;
    display: flex;
`

const Info = styled.p`
    margin: 0;
	width: 25.5rem;

`

function Spaceport() {
    return(
        <>
            <Vehicle_sction>
                <div id="info-container">
                    <p id="vehicle-title">
                        SPACEPORT
                    </p>
                    <Info id="information">
                        A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
                        by analogy to the seaport for ships or airport for aircraft. 
                        Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of 
                        the Earth’s rotation for launch.
                    </Info>
                </div>
            </Vehicle_sction>
        </>
    );
}

export default Spaceport;