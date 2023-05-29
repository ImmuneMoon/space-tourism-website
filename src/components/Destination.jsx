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

const Location_container = styled.div`
	width: fit-content;
    margin: 0 auto;
	display: flex;
	flex-direction: row;
	justify-content: center;
`

const Img_container = styled.div`
    margin: 0 5rem 0 0;
`

const R_container = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 0 0 5rem;
	width: fit-content;
`

const Info_container = styled.div`
	width: fit-content;
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
                    <div id="pg-heading">
                        <p id="pg-num">01</p>
                        <h1 id="pg-subject">PICK YOUR DESTINATION</h1>
                    </div>
                </div>
                <Location_container>
					<Img_container>
						{displayedDestination === 'moon' && 
							<div name="planet">
								<img name="dest-img" src={MoonImg} alt="Moon" />
							</div>
						}
						{displayedDestination === 'mars' && 
							<div name="planet">
								<img name="dest-img" src={MarsImg} alt="Mars" />
							</div>
						}
						{displayedDestination === 'europa' && 
							<div name="planet">
								<img name="dest-img" src={EuropaImg} alt="Europa" />
							</div>
						}
						{displayedDestination === 'titan' && 
							<div name="planet">
								<img name="dest-img" src={TitanImg} alt="Titan" />
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