import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components'
import dsktop_bkgrnd from './assets/destination/background-destination-desktop.jpg';
import tablet_bkgrnd from './assets/destination/background-destination-tablet.jpg';
import mobile_bkgrnd from './assets/destination/background-destination-mobile.jpg';
import Dest_nav from './Destination_nav'
import Moon from './Destination_moon';
import moon_img from './assets/destination/image-moon.png';
import Mars from './Destination_mars';
import mars_img from './assets/destination/image-mars.png';
import Europa from './Destination_europa';
import europa_img from './assets/destination/image-europa.png';
import Titan from './Destination_titan';
import titan_img from './assets/destination/image-titan.png';

const Content = createGlobalStyle`
  body {
    background-image: ${({ bkgrnd }) => {
      switch (bkgrnd) {
        case 'mobile':
          return `url('${mobile_bkgrnd}')`;
        case 'tablet':
          return `url('${tablet_bkgrnd}')`;
        case 'desktop':
        default:
          return `url('${dsktop_bkgrnd}')`;
      }
    }};
    background-repeat: no-repeat;
    height: 100%;
    background-position: center;
    background-size: cover;
  }
`;

const Location_container = styled.div`
	width: fit-content;
    margin: 0 auto;
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

const Img_container = styled.div`
    margin: 0 5rem 0 0;
`;

const R_container = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 0 0 5rem;
	width: fit-content;
`;

const Info_container = styled.div`
	width: fit-content;
`;


function Destination() {
    const [displayedDestination, setDisplayedDestination] = useState('moon');
    const [bkgrnd, setBkgrnd] = useState('desktop');

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth <= 480) {
          setBkgrnd('mobile');
        } else if (window.innerWidth > 480 && window.innerWidth <= 1025) {
          setBkgrnd('tablet');
        } else {
          setBkgrnd('desktop');
        }
      };
  
      handleResize();
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return (
        <>
            <Content bkgrnd={bkgrnd}/>
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
								<img name="dest-img" src={moon_img} alt="Moon" />
							</div>
						}
						{displayedDestination === 'mars' && 
							<div name="planet">
								<img name="dest-img" src={mars_img} alt="Mars" />
							</div>
						}
						{displayedDestination === 'europa' && 
							<div name="planet">
								<img name="dest-img" src={europa_img} alt="Europa" />
							</div>
						}
						{displayedDestination === 'titan' && 
							<div name="planet">
								<img name="dest-img" src={titan_img} alt="Titan" />
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