import React from 'react';
import styled from 'styled-components';


const Vehicle_sction = styled.div`
    width: 30rem;
    display: flex;
`

const Info_container = styled.div`
    display: flex;
    flex-direction: column;
`

const Info = styled.p`
    color: #D0D6F9;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.75;
    width: 28rem;
    margin: 0;

`

function Launch_vehicle() {
    return(
        <>
            <Vehicle_sction>
                <Info_container>
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
            </Vehicle_sction>
        </>
    );
}

export default Launch_vehicle;