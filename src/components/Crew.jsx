import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import dsktop_bkgrnd from './assets/crew/background-crew-desktop.jpg';
import tablet_bkgrnd from './assets/crew/background-crew-tablet.jpg';
import mobile_bkgrnd from './assets/crew/background-crew-mobile.jpg';
import Crew_nav from './Crew_nav';
import doug from './Crew_douglas';
import dougPortrait from './assets/crew/image-douglas-hurley.png';
import mark from './Crew_mark';
import markPortrait from './assets/crew/image-mark-shuttleworth.png';
import victor from './Crew_victor';
import vicportrait from './assets/crew/image-victor-glover.png';
import anoushe from './Crew_anoushe';
import anPortrait from './assets/crew/image-anousheh-ansari.png';


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
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    background-position: center;
    background-size: cover;
  }
`;

const Main = styled.main`
    height: fit-content;
    display: flex;
    justify-content: center;
    align-content: center;

    @media (max-width: 1025px) {
        flex-direction: column;
	}
    @media (max-width: 650px) {
        flex-direction: column-reverse;
    }
`;

const L_container = styled.div`
    height: fit-content;

    @media (max-width: 650px) {
        margin-bottom: 9rem;
    }
`;

const Heading = styled.div`
    @media (max-width: 650px) {
        display: none;
    }
`;

const R_container = styled.div`
    height: 83vh;
    width: 100%;
    margin-top: 5rem;    
    @media (max-width: 1025px) {
        height: fit-content;
        margin: 0;
	}
    @media (max-width: 650px) {
    }

`;

const PhoneHeading = styled.div`
    display: none;
    @media (max-width: 650px) {
        display: flex;
    }
`;

const Crew_container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10.5rem;

    @media (max-width: 1025px) {
		width: 100%;
		margin: 0;
	}
`;

const Crew_info_container = styled.div`
    width: 25rem;

    @media (max-width: 1025px) {
        display: flex;
        flex-direction: column;
		width: 100%;
		margin: 0 auto;
		justify-content: center;
	}

    @media (max-width: 650px) {
        flex-direction: column-reverse;
    }
`;

const Crewmember = styled.div`
    @media (max-width: 1025px) {
		margin: 0 auto;
	}
`;

const Crew_img_container = styled.div`
    display: flex;
    justify-content: center;
    align-items: end;
`;

const DougImg = styled.img`
    height: ${({ theme }) => {
        switch (theme) {
                case 'mobile':
            return '400px';
                case 'tablet':
            return '500px';
                case 'desktop':
            default:
                return '600px';
        }
    }};
`

const MarkImg = styled.img`
    height: ${({ theme }) => {
        switch (theme) {
            case 'mobile':
                return '400px';
            case 'tablet':
                return '500px';
            case 'desktop':
            default:
                return '550px';
        }
    }};
`

const VictorImg = styled.img`
    height: ${({ theme }) => {
        switch (theme) {
            case 'mobile':
                return '425px';
            case 'tablet':
                return '500px';
            case 'desktop':
            default:
                return '550px';
        }
    }};
`

const AnouImg = styled.img`
    height: ${({ theme }) => {
        switch (theme) {
            case 'mobile':
                return '425px';
            case 'tablet':
                return '500px';
            case 'desktop':
            default:
                return '550px';
        }
    }};
`

const Crew_nav_container = styled.div`
    margin: 3rem auto 3rem 0;
    width: fit-content;
    @media (max-width: 1025px) {
		margin: 3rem auto;
		justify-content: center;
	}
`;

const Doug = doug;
const Mark = mark;
const Victor = victor;
const Anoushe = anoushe;

function Crew() {
    const [displayedCrew, setDisplayedCrew] = useState('doug');
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
            <Main>
                <L_container>
                    <Heading className="pg-heading">
                        <p id="pg-num">
                            02
                        </p>
                        <h1 id="pg-subject">
                            MEET&nbsp;YOUR&nbsp;CREW
                        </h1>
                    </Heading>
                    <Crew_container>
                        <Crew_info_container>
                            <Crewmember>
                                {displayedCrew === 'doug' && 
                                    <Doug id="doug-cpnt"/>
                                }
                                {displayedCrew === 'mark' && 
                                    <Mark id="mark-cpnt"/>
                                }
                                {displayedCrew === 'victor' && 
                                    <Victor id="victor-cpnt"/>
                                }
                                {displayedCrew === 'anoushe' && 
                                    <Anoushe id="anoushe-cpnt"/>
                                }
                            </Crewmember>
                            <Crew_nav_container>
                                <Crew_nav onCrewChange={setDisplayedCrew}/>
                            </Crew_nav_container>
                        </Crew_info_container>
                    </Crew_container>
                </L_container>
                <R_container>
                    <PhoneHeading className="pg-heading">
                        <p id="pg-num">02</p>
                        <h1 id="pg-subject">MEET&nbsp;YOUR&nbsp;CREW</h1>
                    </PhoneHeading>
                    <Crew_img_container>
                        {displayedCrew === 'doug' && 
                            <DougImg theme={theme} id="crew_img" src={dougPortrait} alt="Douglas Hurley"/>
                        }
                        {displayedCrew === 'mark' && 
                            <MarkImg theme={theme} id="crew_img" src={markPortrait} alt="Mark Shuttleworth"/>
                        }
                        {displayedCrew === 'victor' && 
                            <VictorImg theme={theme} id="crew_img" src={vicportrait} alt="Victor Glover"/>
                        }
                        {displayedCrew === 'anoushe' && 
                            <AnouImg theme={theme} id="crew_img" src={anPortrait} alt="Anousheh Ansari"/>
                        }
                    </Crew_img_container>
                </R_container>
            </Main>
        </>
    );
}

export default Crew;