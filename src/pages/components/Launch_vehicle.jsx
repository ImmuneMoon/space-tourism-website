import React from 'react';
import styled from 'styled-components';
import desktop from './assets/technology/image-launch-vehicle-portrait.jpg';
import mobile from './assets/technology/image-launch-vehicle-landscape.jpg';

let img = desktop;

const Vehicle_sction = styled.div`
    display: flex;
`

const Info_container = styled.div`
    display: flex;
    flex-direction: column;
`

const Name = styled.h2`
    @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bellefair&display=swap');

    font-family: 'Barlow Condensed', sans-serif;
    font-size: 56px;
    font-weight: 500;
    margin: 0 0 1.5rem 0;
`

const Info = styled.p`
    color: #D0D6F9;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.75;
    width: 28rem;
    margin: 0;

`

const Launch_img = styled.img`
    width: 25rem;
`

function Launch_vehicle() {
    return(
        <>
            <Vehicle_sction>
                <Info_container>
                    <Name>
                        LAUNCH VEHICLE
                    </Name>
                    <Info>
                        A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from 
                        Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most 
                        powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch 
                        pad!
                    </Info>
                </Info_container>
                <Launch_img src={img} alt="Launch Vehicle"/>
            </Vehicle_sction>
        </>
    );
}

export default Launch_vehicle;