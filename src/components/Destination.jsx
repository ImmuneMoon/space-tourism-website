import React, { useState } from 'react';
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

const Moon = moon;
const Mars = mars;
const Europa = europa;
const Titan = titan;

function Destination() {
    const [displayedDestination, setDisplayedDestination] = useState('moon');

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
                    <Dest_nav onDestinationChange={setDisplayedDestination}/>
					{displayedDestination === 'moon' && 
						<Moon id="moon-cpnt"/>
					}
					{displayedDestination === 'mars' && 
						<Mars id="mars-cpnt"/>
					}
					{displayedDestination === 'europa' && 
						<Europa id="europa-cpnt"/>
					}
					{displayedDestination === 'titan' && 
						<Titan id="titan-cpnt"/>
					}
                </Location_container>
            </main>
        </>
    );
}

export default Destination;