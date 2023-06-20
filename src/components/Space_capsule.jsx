import React from 'react';
import styled from 'styled-components';

const Vehicle_sction = styled.div`
    width: 30rem;
    display: flex;
    @media (max-width: 1025px) {
        justify-content: center;
	}
`

const Info = styled.p`
    margin: 0;
    width: 25.5rem;

`

function SpaceCapsule() {
    return(
        <>
            <Vehicle_sction>
                <div id="info-container">
                    <p id="vehicle-title">
                        SPACE&nbsp;CAPSULE
                    </p>
                    <Info id="information">
                        A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to 
                        reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time 
                        during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.
                    </Info>
                </div>
            </Vehicle_sction>
        </>
    );
}

export default SpaceCapsule;