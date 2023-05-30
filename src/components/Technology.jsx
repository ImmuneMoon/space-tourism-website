import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import dsktop_bkgrnd from './assets/technology/background-technology-desktop.jpg';
import tablet_bkgrnd from './assets/technology/background-technology-tablet.jpg';
import mobile_bkgrnd from './assets/technology/background-technology-mobile.jpg';
import Tech_nav from './Tech_nav';
import LaunchVehicle from './Launch_vehicle';
import vehicle_img from './assets/technology/image-launch-vehicle-portrait.jpg';
import vehicle_mobile_img from './assets/technology/image-launch-vehicle-portrait.jpg';
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
`;

const L_container = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
`;

const Terms = styled.p`
    width: fit-content;
    margin-bottom: 1rem;
    font-size: 16px;
    letter-spacing: 2.7px;
    font-family: 'Barlow Condensed', sans-serif;
`;

const Vehicle_container = styled.div`
    width: fit-content;
    height: 100%;
`;

const Vehicle = LaunchVehicle;
const VehicleImg = vehicle_img;
const MobileVehicle = vehicle_mobile_img;
const Port = Spaceport;
const SpaceportImg = spaceport_img;
const MobileSpaceport = spaceport_mobile_img;
const Capsule = SpaceCapsule;
const CapsuleImg = capsule_img;
const MobileCapsule = capsule_mobile_img;

function Technology() {
    const [displayedTech, setDisplayedTech] = useState('launch');
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
            <Main>
                <div id="pg-heading">
                    <p id="pg-num">
                        03
                    </p>
                    <h1 id="pg-subject">
                        SPACE LAUNCH 101
                    </h1>
                </div>
                <Tech_section>
                    <Tech_nav onTechChange={setDisplayedTech}/>
                    <L_container>
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
                    </L_container>
                    <Vehicle_container>
                        {displayedTech === 'launch' && 
                            <img id="tech_img" src={VehicleImg} alt="Launch Vehicle"/>
                        }
                        {displayedTech === 'port' && 
                            <img id="tech_img" src={SpaceportImg} alt="Spaceport"/>
                        }
                        {displayedTech === 'capsule' && 
                            <img id="tech_img" src={CapsuleImg} alt="Space Capsule"/>
                        }
                    </Vehicle_container>
                </Tech_section>
            </Main>
        </>
    );
}

export default Technology;