import React from 'react';
import styled from 'styled-components';

const Vehicle_sction = styled.div`
    width: 30rem;
    display: flex;
`

const Info = styled.p`
    color: #D0D6F9;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.75;
    margin: 0;

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