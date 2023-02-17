import React from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components'
import bkgrnd from './components/assets/destination/background-destination-desktop.jpg';
import Dest_nav from './components/Destination_nav'
import moon from './components/Destination_moon';
import mars from './components/Destination_mars';
import europa from './components/Destination_europa';
import titan from './components/Destination_titan';


let Location = moon;


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

const H_container = styled.div`
    
`

const Heading = styled.div`
    margin-top: 3rem;
    margin-left: 10.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 25rem;

`

const One = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bellefair&display=swap');

    font-family: 'Barlow Condensed', sans-serif;
    font-size: 28px;
    font-weight: bold;
    color: #4b5560;
    letter-spacing: 4.75;
`

const Pick = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bellefair&display=swap');

    font-family: 'Barlow Condensed', sans-serif;
    font-size: 28px;
    font-weight: 500;
    color: #FFFFFF;
    letter-spacing: 4.75;
`

let Location_container = styled.div`

`

function Destination() {
    return (
        <>
            <Content></Content>
            <main>
                <H_container>
                    <Heading>
                        <One>01</One>
                        <Pick>PICK YOUR DESTINATION</Pick>
                    </Heading>
                </H_container>
                <Dest_nav />
                <Location_container>
                    <Location />
                </Location_container>
            </main>
        </>
    );
}

export default Destination;