import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components'
import bkgrnd from './assets/destination/background-destination-desktop.jpg';
import Dest_nav from './Destination_nav'
import moon_info from './Destination_moon';
import moon_img from './assets/destination/image-moon.png';
import mars_info from './Destination_mars';
import mars_img from './assets/destination/image-mars.png';
import europa_info from './Destination_europa';
import europa_img from './assets/destination/image-europa.png';
import titan_info from './Destination_titan';
import titan_img from './assets/destination/image-titan.png';

const Content = createGlobalStyle`
    body {
        background-image: url(${bkgrnd});
		background-repeat: no-repeat;
		height: 100%;
		background-position: center;
		background-size: cover;
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
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 28px;
    font-weight: bold;
    color: #4b5560;
    letter-spacing: 4.75;
`

const Pick = styled.h1`
    font-size: 28px;
    font-weight: 500;
    color: #FFFFFF;
    letter-spacing: 4.75;
`

let Location_container = styled.div`
    margin: 0 auto;
	display: flex;
	flex-direction: row;
	justify-content: center;
`

const Img_container = styled.div`
	margin: 0 auto;
`

const R_container = styled.div`
	margin: 0 auto;
`

const Info_container = styled.div`
	
`

const Moon = moon_info;
const MoonImg = moon_img;
const Mars = mars_info;
const MarsImg = mars_img;
const Europa = europa_info;
const EuropaImg = europa_img;
const Titan = titan_info;
const TitanImg = titan_img;

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
					<Img_container>
						{displayedDestination === 'moon' && 
							<div name="planet">
								<img name="dest-img" src={MoonImg} alt="Moon" />
								<div name="shadow"></div>
							</div>
						}
						{displayedDestination === 'mars' && 
							<div name="planet">
								<img name="dest-img" src={MarsImg} alt="Mars" />
								<div name="shadow"></div>
							</div>
						}
						{displayedDestination === 'europa' && 
							<div name="planet">
								<img name="dest-img" src={EuropaImg} alt="Europa" />
								<div name="shadow"></div>
							</div>
						}
						{displayedDestination === 'titan' && 
							<div name="planet">
								<img name="dest-img" src={TitanImg} alt="Titan" />
								<div name="shadow"></div>
							</div>
						}
					</Img_container>
					<R_container>
						<Dest_nav onDestinationChange={setDisplayedDestination}/>
						<Info_container>
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
						</Info_container>
					</R_container>
                </Location_container>
            </main>
        </>
    );
}

export default Destination;