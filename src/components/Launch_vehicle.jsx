import React from 'react';
import styled from 'styled-components';


const Vehicle_section = styled.div`
    width: 30rem;
    display: flex;
`;

const Info_container = styled.div`
    margin: auto 0;
`;

const Info = styled.p`
    margin: 0;
	width: 25.5rem;

`;

function Launch_vehicle() {
    return(
        <>
            <Vehicle_section>
                <Info_container id="info-container">
                    <p id="vehicle-title">
                        LAUNCH&nbsp;VEHICLE
                    </p>
                    <Info id="information">
                        A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from 
                        Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most 
                        powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch 
                        pad!
                    </Info>
                </Info_container>
            </Vehicle_section>
        </>
    );
}

export default Launch_vehicle;