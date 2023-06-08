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
    width: 100%;
    background-position: center;
    background-size: cover;
  }
`;

const Main = styled.main`
    height: 100%;
    padding-bottom: 4rem;
`;

const Tech_section = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 10rem;
    align-items: center;
    height: 100%;

    @media (max-width: 1025px) {
        flex-direction: column-reverse;
        margin: 0;
        width: 100%;
    }
`;

const L_container = styled.div`
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 5rem;

    @media (max-width: 1025px) {
        width: 100%;
        flex-direction: column;
        margin: 0 auto;
	}
`

const Info_container = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 5rem;
`;

const Terms = styled.p`
    width: fit-content;
    margin-bottom: 1rem;
    font-size: 16px;
    letter-spacing: 2.7px;
    font-family: 'Barlow Condensed', sans-serif;
`;

const Vehicle_container = styled.div`
    height: 100%;
    width: 100%;

    @media (max-width: 1025px) {
        margin: 0 auto;
        width: 100%;
    }
`;

const Vehicle = LaunchVehicle;
const Port = Spaceport;
const Capsule = SpaceCapsule;

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
                <div className="pg-heading">
                    <p id="pg-num">
                        03
                    </p>
                    <h1 id="pg-subject">
                        SPACE LAUNCH 101
                    </h1>
                </div>
                <Tech_section>
                    <L_container>
                        <Tech_nav onTechChange={setDisplayedTech}/>
                        <Info_container>
                            <Terms>
                                THE TERMINOLOGY...
                            </Terms>
                            <div>
                                {displayedTech === 'launch' && 
                                    <Vehicle/>
                                }
                                {displayedTech === 'port' && 
                                    <Port/>
                                }
                                {displayedTech === 'capsule' && 
                                    <Capsule/>
                                }
                            </div>
                        </Info_container>
                    </L_container>
                    <Vehicle_container>
                        {displayedTech === 'launch' && 
                            <img id="tech_img" src={vehicleImg} alt="Launch Vehicle"/>
                        }
                        {displayedTech === 'port' && 
                            <img id="tech_img" src={spaceportImg} alt="Spaceport"/>
                        }
                        {displayedTech === 'capsule' && 
                            <img id="tech_img" src={capsuleImg} alt="Space Capsule"/>
                        }
                    </Vehicle_container>
                </Tech_section>
            </Main>
        </>
    );
}

export default Technology;