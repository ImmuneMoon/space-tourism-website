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
`

function Destination() {
    let Location = moon;
    let moonBttn = document.getElementById('moon');
    let marsBttn = document.getElementById('mars');
    let europaBttn = document.getElementById('europa');
    let titanBttn = document.getElementById('titan');
    /*
    document.addEventListener('click', (event) => {
        let element = event.target;
        console.log('elementlog',element);
        if (element == moonBttn) {
            console.log('moon');
            Location = moon;
        }
        else if (element == marsBttn) {
            console.log('mars');
            Location = mars;
        }
        else if (element == europaBttn) {
            console.log('europa');
            Location = europa;
            console.log(Location);
        }
        else if (element == titanBttn) {
            console.log('titan');
            Location = titan;
        }
    });
    */
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
                    <Location />
                </Location_container>
            </main>
        </>
    );
}

export default Destination;