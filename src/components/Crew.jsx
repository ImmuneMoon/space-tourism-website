import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import dsktop_bkgrnd from './assets/crew/background-crew-desktop.jpg';
import tablet_bkgrnd from './assets/crew/background-crew-tablet.jpg';
import mobile_bkgrnd from './assets/crew/background-crew-mobile.jpg';
import Crew_nav from './Crew_nav';
import Doug from './Crew_douglas';
import dougPortrait from './assets/crew/image-douglas-hurley.png';
import Mark from './Crew_mark';
import markPortrait from './assets/crew/image-mark-shuttleworth.png';
import Victor from './Crew_victor';
import vicportrait from './assets/crew/image-victor-glover.png';
import Anoushe from './Crew_anoushe';
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
  }
`;

const Main = styled.main`
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    width: 69rem;
    justify-content: space-between;

    @media (max-width: 1025px) {
        flex-direction: column;
	}
    @media (max-width: 650px) {
        flex-direction: column-reverse;
    }
`;

const L_container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: fit-content;
    width: auto;

    @media (max-width: 1025px) {
        margin: 0 auto;
	}
    @media (max-width: 650px) {
        margin-bottom: 9rem;
    }
`;

const Heading = styled.div`

    @media (max-width: 1025px) {
        display: none;
    }
`;

const Crew_info_container = styled.div`
    width: auto;
    margin-top: 1rem;

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

const Crew_nav_container = styled.div`
    margin: 0 auto 3rem 0;
    @media (max-width: 1025px) {
		margin: 3rem auto;
		justify-content: center;
	}
`;

const R_container = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: max-content;
    margin: 0 auto;

    @media (max-width: 1025px) {
        height: fit-content;
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

const Crew_img_container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-top: auto;

    @media (max-width: 1025px) {
        padding: 0;
        height: auto;
        width: auto;
	}
`;

const DougImg = styled.img`
    height: ${({ theme }) => {
        switch (theme) {
                case 'mobile':
            return '400px';
                case 'tablet':
            return 'auto';
                case 'desktop':
            default:
                return '100%';
        }
    }};
    width: auto;
    padding-left: 7rem;
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
                return '100%';
        }
    }};

    @media (max-width: 1025px) {
        padding: 0;
	}
`

const VictorImg = styled.img`
    height: ${({ theme }) => {
        switch (theme) {
            case 'mobile':
                return '400px';
            case 'tablet':
                return '500px';
            case 'desktop':
            default:
                return '100%';
        }
    }};
    padding-left: 7rem;

    @media (max-width: 1025px) {
        padding: 0;
	}
`

const AnouImg = styled.img`
    height: ${({ theme }) => {
        switch (theme) {
            case 'mobile':
                return '400px';
            case 'tablet':
                return '500px';
            case 'desktop':
            default:
                return '100%';
        }
    }};
    padding-left: 3rem;

    @media (max-width: 1025px) {
        padding: 0;
	}
`

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
                <Container id="container">
                    <L_container>
                        <Heading className="pg-heading">
                            <p id="pg-num">
                                02
                            </p>
                            <h1 id="pg-subject">
                                MEET&nbsp;YOUR&nbsp;CREW
                            </h1>
                        </Heading>
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
                    </L_container>
                    <R_container>
                        <PhoneHeading className="pg-heading">
                            <p id="pg-num">
                                02
                            </p>
                            <h1 id="pg-subject">
                                MEET&nbsp;YOUR&nbsp;CREW
                            </h1>
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
                </Container>
            </Main>
        </>
    );
}

export default Crew;