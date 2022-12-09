import React from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components'
import bkgrnd from './components/assets/destination/background-destination-desktop.jpg';
import Location from './components/Destination_locations';

const Content = createGlobalStyle`
    body {
        background-image: url(${bkgrnd});
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -ms-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background-color: black;
    }
`

const Desc = styled.div`
`

function Destination() {
    return (
        <>
            <Content></Content>
            <main>
                <Desc>
                    <p>01</p>
                    <h1>PICK YOUR DESTINATION</h1>
                </Desc>
                <Location />
                
            </main>
        </>
    );
}

export default Destination;