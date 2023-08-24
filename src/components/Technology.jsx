import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import dsktop_bkgrnd from './assets/technology/background-technology-desktop.jpg';
import tablet_bkgrnd from './assets/technology/background-technology-tablet.jpg';
import mobile_bkgrnd from './assets/technology/background-technology-mobile.jpg';
import Tech_nav from './Tech_nav';
import LaunchVehicle from './Launch_vehicle';
import vehicle_img from './assets/technology/image-launch-vehicle-portrait.jpg';
import vehicle_mobile_img from './assets/technology/image-launch-vehicle-landscape.jpg';
import Spaceport from './Spaceport';
import spaceport_img from './assets/technology/image-spaceport-portrait.jpg';
import spaceport_mobile_img from './assets/technology/image-spaceport-landscape.jpg';
import SpaceCapsule from './Space_capsule'
import capsule_img from './assets/technology/image-space-capsule-portrait.jpg';
import capsule_mobile_img from './assets/technology/image-space-capsule-landscape.jpg';

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
    justify-content: end;
    justify-self: center;
    
    @media (max-width: 650px) {
        justify-content: normal;
    }
`;

const Container = styled.div`
    width: 79.2rem;
    display: flex;
    flex-direction: column;
`;

const Heading = styled.div`
    margin-left: 0;
    margin-bottom: 2rem;

    @media (max-width: 1025px) {
		margin: 2rem auto;
		width: 90%;
		justify-content: left;
	}

    @media (max-width: 650px) {
        margin-right: auto;
        margin-left: auto;
        justify-content: center;
    }
`;

const Tech_section = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: fit-content;
    width: 100%;

    @media (max-width: 1025px) {
        flex-direction: column-reverse;
        justify-content: start;
        margin: 0;
        height: 100%;
        width: 100%;
    }
`;

const L_container = styled.div`
    width: fit-content;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-right: auto;

    @media (max-width: 1025px) {
        width: 100%;
        height: fit-content;
        flex-direction: column;
        justify-content: center;
        margin: 0 auto;
	}
`

const Nav = styled.div`
    @media (max-width: 1025px) {
        display: flex;
        justify-content: center;
	}
`

const Info_container = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 5rem;
    @media (max-width: 1025px) {
        justify-content: center;
        margin: 0 auto;
	}
`;

const Terms = styled.p`
    width: fit-content;
    margin: 0 auto 1rem 0;
    font-size: 16px;
    letter-spacing: 2.7px;
    font-family: 'Barlow Condensed', sans-serif;
    @media (max-width: 1025px) {
        margin: 0 auto 1rem auto;
    }
`;



function Technology() {
    const [displayedTech, setDisplayedTech] = useState('launch');
    const [theme, setTheme] = useState('desktop');
    const [vehicleImg, setVehicleImg] = useState(vehicle_img);
    const [spaceportImg, setSpaceportImg] = useState(spaceport_img);
    const [capsuleImg, setCapsuleImg] = useState(capsule_img);


    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth <= 650) {
        	setTheme('mobile');
            setVehicleImg(vehicle_mobile_img);
            setSpaceportImg(spaceport_mobile_img);
            setCapsuleImg(capsule_mobile_img);
        } 
		else if (window.innerWidth > 650 && window.innerWidth <= 1025) {
          	setTheme('tablet');
            setVehicleImg(vehicle_mobile_img);
            setSpaceportImg(spaceport_mobile_img);
            setCapsuleImg(capsule_mobile_img);
    } 
        else {
          setTheme('desktop');
          setVehicleImg(vehicle_img);
          setSpaceportImg(spaceport_img);
          setCapsuleImg(capsule_img);
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
                    <Heading className="pg-heading">
                        <p id="pg-num">
                            03
                        </p>
                        <h1 id="pg-subject">
                            SPACE LAUNCH 101
                        </h1>
                    </Heading>
                    <Tech_section>
                        <L_container>
                            <Nav>
                                <Tech_nav onTechChange={setDisplayedTech}/>
                            </Nav>
                            <Info_container>
                                <Terms>
                                    THE TERMINOLOGY...
                                </Terms>
                                <div>
                                    {displayedTech === 'launch' && 
                                        <LaunchVehicle/>
                                    }
                                    {displayedTech === 'port' && 
                                        <Spaceport/>
                                    }
                                    {displayedTech === 'capsule' && 
                                        <SpaceCapsule/>
                                    }
                                </div>
                            </Info_container>
                        </L_container>
                        {displayedTech === 'launch' && 
                            <img id="tech_img" src={vehicleImg} alt="Launch Vehicle"/>
                        }
                        {displayedTech === 'port' && 
                            <img id="tech_img" src={spaceportImg} alt="Spaceport"/>
                        }
                        {displayedTech === 'capsule' && 
                            <img id="tech_img" src={capsuleImg} alt="Space Capsule"/>
                        }
                    </Tech_section>
                </Container>
            </Main>
        </>
    );
}

export default Technology;