import React from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components'
import bkgrnd from './assets/destination/background-destination-desktop.jpg';
import Dest_nav from './Destination_nav'
import moon from './Destination_moon';
import mars from './Destination_mars';
import europa from './Destination_europa';
import titan from './Destination_titan';

const Content = createGlobalStyle`
    body {
        background-image: url(${bkgrnd});
    }
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
    margin: 3.5rem auto 0 1rem;
    position: relative;
`

let Moon_container = styled.div`
    visibility: visible;
    position: absolute;
`
const Moon = moon;

let Mars_container = styled.div`
    visibility: hidden;
    position: absolute;
`
const Mars = mars;

let Europa_container = styled.div`
    visibility: hidden;
    position: absolute;
`
const Europa = europa;

let Titan_container = styled.div`
    visibility: hidden;
    position: absolute;
`
const Titan = titan;

function Destination() {
    const moonBttn = document.getElementById('moon');
    const moonCtnr = document.getElementById('moon-ctnr');
    const marsBttn = document.getElementById('mars');
    const marsCtnr = document.getElementById('mars-ctnr');
    const europaBttn = document.getElementById('europa');
    const europaCtnr = document.getElementById('europa-ctnr');
    const titanBttn = document.getElementById('titan');
    const titanCtnr = document.getElementById('titan-ctnr');

    document.addEventListener('click', (event) => {
        let element = event.target;
        console.log('elementlog',element);
        if (element == moonBttn) {
            console.log('moon');
            moonCtnr.style.visibility = visible;
            marsCtnr.style.visibility = hidden;
            europaCtnr.style.visibility = hidden;
            titanCtnr.style.visibility = hidden;

        }
        else if (element == marsBttn) {
            console.log('mars');
            moonCtnr.style.visibility = hidden;
            marsCtnr.style.visibility = visible;
            europaCtnr.style.visibility = hidden;
            titanCtnr.style.visibility = hidden;
            
        }
        else if (element == europaBttn) {
            console.log('europa');
            moonCtnr.style.visibility = hidden;
            marsCtnr.style.visibility = hidden;
            europaCtnr.style.visibility = visible;
            titanCtnr.style.visibility = hidden;
            
        }
        else if (element == titanBttn) {
            console.log('titan');
            moonCtnr.style.visibility = hidden;
            marsCtnr.style.visibility = hidden;
            europaCtnr.style.visibility = hidden;
            titanCtnr.style.visibility = visible;
            
        }
    });

    return (
        <>
            <Content></Content>
            <main>
                <div>
                    <Heading>
                        <One>01</One>
                        <Pick>PICK YOUR DESTINATION</Pick>
                    </Heading>
                </div>
                <Location_container>
                    <Dest_nav />
                    <Moon_container id="moon-ctnr">
                        <Moon id="moon-cpnt"/>
                    </Moon_container>
                    <Mars_container id="mars-ctnr">
                        <Mars id="mars-cpnt"/>
                    </Mars_container>
                    <Europa_container id="europa-ctnr">
                        <Europa id="europa-cpnt"/>
                    </Europa_container>
                    <Titan_container id="titan-ctnr">
                        <Titan id="titan-cpnt"/>
                    </Titan_container>
                </Location_container>
            </main>
        </>
    );
}

export default Destination;