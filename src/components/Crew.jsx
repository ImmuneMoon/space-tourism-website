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

const Main = styled.main`
    height: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
`;

const L_container = styled.div`
    height: 85vh;
`;

const Crew_container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10.5rem;
`;

const Crew_info_container = styled.div`
    
`;

const Crewmember = styled.div`
    
`;

const Crew_img_container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: auto;
`;

const Crew_nav_container = styled.div`
    margin: 3rem auto 3rem 0;
    width: fit-content;
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
                    <div id="pg-heading">
                        <p id="pg-num">02</p>
                        <h1 id="pg-subject">MEET&nbsp;YOUR&nbsp;CREW</h1>
                    </div>
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
                <Crew_img_container>
                    {displayedCrew === 'doug' && 
                        <img id="crew_img" height="600px" src={dougPortrait} alt="Douglas Hurley"/>
                    }
                    {displayedCrew === 'mark' && 
                        <img id="crew_img" height="575px" src={markPortrait} alt="Mark Shuttleworth"/>
                    }
                    {displayedCrew === 'victor' && 
                        <img id="crew_img" height="550px" src={vicportrait} alt="Victor Glover"/>
                    }
                    {displayedCrew === 'anoushe' && 
                        <img id="crew_img" height="575px" src={anPortrait} alt="Anousheh Ansari"/>
                    }
                </Crew_img_container>
            </Main>
        </>
    );
}

export default Crew;