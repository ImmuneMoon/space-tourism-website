import React from 'react';
import styled from 'styled-components';

function Spaceport() {
    return(
        <>
            <div id="vehicle-section">
                <div id="info-container">
                    <p id="vehicle-title">
                        SPACEPORT
                    </p>
                    <p className="tech-info" id="information">
                        A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
                        by analogy to the seaport for ships or airport for aircraft. 
                        Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of 
                        the Earth’s rotation for launch.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Spaceport;