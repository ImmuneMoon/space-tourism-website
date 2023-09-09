import React from 'react';
import styled from 'styled-components';

function SpaceCapsule() {
    return(
        <>
            <div id="vehicle-section">
                <div id="info-container">
                    <p id="vehicle-title">
                        SPACE&nbsp;CAPSULE
                    </p>
                    <p className="tech-info" id="information">
                        A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to 
                        reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time 
                        during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.
                    </p>
                </div>
            </div>
        </>
    );
}

export default SpaceCapsule;