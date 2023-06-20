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
    background-image: ${({ theme }) => {
      switch (theme) {
        case 'mobile':
          return `url('${mobile_bkgrnd}')`;
        case 'tablet':
          return `url('${tablet_bkgrnd}')`;
        case 'desktop':
        default:
          return `url('${dsktop_bkgrnd}')`;
      }
    }};
  }
`;

const Location_container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: ${({ theme }) => {
      switch (theme) {
        case 'mobile':
          return 'column';
        case 'tablet':
          return 'column';
        case 'desktop':
        default:
          return 'row';
      }
    }};
	justify-content: center;


	@media (max-width: 1025px) {
		width: 100%;
		margin: auto auto 3rem auto;
	}
`;

const Img_container = styled.div`
	width: ${({ theme }) => {
      switch (theme) {
        case 'mobile':
          return '100%';
        case 'tablet':
          return '100%';
        case 'desktop':
        default:
          return 'fit-content';
      }
    }}; 
	height: ${({ theme }) => {
      switch (theme) {
        case 'mobile':
          return '100%';
        case 'tablet':
          return '100%';
        case 'desktop':
        default:
          return '';
      }
    }};  
    margin: ${({ theme }) => {
      switch (theme) {
        case 'mobile':
          return '0';
        case 'tablet':
          return '0';
        case 'desktop':
        default:
          return '0 5rem 0 0';
      }
    }};  
	display: ${({ theme }) => {
      switch (theme) {
        case 'mobile':
          return 'flex';
        case 'tablet':
          return 'flex';
        case 'desktop':
        default:
          return 'block';
      }
    }};

	@media (max-width: 1025px) {
			justify-content: center;
		}
`;

const DestImg = styled.img`
	width: ${({ theme }) => {
      switch (theme) {
        case 'mobile':
          return '250px';
        case 'tablet':
          return '325px';
        case 'desktop':
        default:
          return '425px';
      }
    }};  
	margin: ${({ theme }) => {
      switch (theme) {
        case 'mobile':
          return '5rem';
        case 'tablet':
          return '5rem';
        case 'desktop':
        default:
          return '0';
      }
    }};
`;

const R_container = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 0 0 5rem;
	width: fit-content;


	@media (max-width: 1025px) {
		width: 100%;
		margin: 0 auto;
		justify-content: center;
	}
`;

const Info_container = styled.div`
	width: fit-content;

	@media (max-width: 1025px) {
		margin: 0 auto;
		width: 100%;
	}
`;


function Destination() {

    const [displayedDestination, setDisplayedDestination] = useState('moon');
    const [theme, setTheme] = useState('desktop');

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth <= 650) {
        	setTheme('mobile');
        } 
		else if (window.innerWidth > 650 && window.innerWidth <= 1025) {
          	setTheme('tablet');
        } 
        else {
          setTheme('desktop');
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
            <Content theme={theme}/>
            <main>
                <div>
                    <div className="pg-heading">
                        <p id="pg-num">
                          01
                        </p>
                        <h1 id="pg-subject">
                          PICK&nbsp;YOUR&nbsp;DESTINATION
                        </h1>
                    </div>
                </div>
                <Location_container theme={theme}>
                <Img_container theme={theme}>
                  {displayedDestination === 'moon' && 
                    <DestImg theme={theme} src={moon_img} alt="Moon" />
                  }
                  {displayedDestination === 'mars' && 
                    <DestImg theme={theme} src={mars_img} alt="Mars" />
                  }
                  {displayedDestination === 'europa' && 
                    <DestImg theme={theme} src={europa_img} alt="Europa" />
                  }
                  {displayedDestination === 'titan' && 
                    <DestImg theme={theme} src={titan_img} alt="Titan" />
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