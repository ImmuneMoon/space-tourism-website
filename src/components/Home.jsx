import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import dsktop_bkgrnd from './assets/homepage/background-home-desktop.jpg';
import tablet_bkgrnd from './assets/homepage/background-home-tablet.jpg';
import mobile_bkgrnd from './assets/homepage/background-home-mobile.jpg';


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

const Main_container = styled.main`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Home_container = styled.div`
    width: 80%;
    margin-top: 5rem;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`;

const Left_container = styled.div`
    width: fit-content;
    height: fit-content;
`;

const Right_container = styled.div`
    margin-top: 7rem;
    position: relative;
    min-width: min-content;
    height: fit-content;
`;

const Main_p = styled.p`
    font-size: 28px;
    font-weight: normal;
    color: #D0D6F9;
    letter-spacing: 4.75px;
    font-family: 'Barlow Condensed', sans-serif;
`;

const Main_h1 = styled.h1`
    font-family: 'Bellefair', serif;
    font-weight: 400;
    font-size: 150px;
    color: #FFFFFF;
    width: fit-content;
    margin-top: 2rem;
    margin-bottom: .5rem;
`;

const Bttn_container = styled.div`
    border-radius: 50%;
`;

const Explore_bttn = styled.div`
    font-size: 32px;
    font-family: 'Bellefair', serif;
    letter-spacing: 4.75;
    background-color: #FFFFFF;
    color: #0B0D17;
    width: 17rem;
    height: 17rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Bttn_hover = styled.div`
    position: absolute;
    background-color: rgba(255, 255, 255, 0.1);
    width: 17rem;
    height: 17rem;
    border-radius: 50%;
    top: 0;
    transition: transform 200ms linear;

    ${Bttn_container}:hover & {
        transform: scale(1.65);
    }
`;


function Home() {
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
            <Main_container>
                <Home_container>
                    <Left_container>
                        <Main_p>
                            SO, YOU WANT TO TRAVEL TO
                        </Main_p>
                        <Main_h1>
                            SPACE
                        </Main_h1>
                        <p id="information">
                            Let’s face it; if you want to go to space, you might as well genuinely go to 
                            outer space and not hover kind of on the edge of it. Well sit back, and relax 
                            because we’ll give you a truly out of this world experience!
                        </p>
                    </Left_container>
                    <Right_container>
                        <Link to="/destination">
                            <Bttn_container>
                                    <Explore_bttn>
                                        EXPLORE
                                    </Explore_bttn>
                                <Bttn_hover></Bttn_hover>
                            </Bttn_container>
                        </Link>
                    </Right_container>
                </Home_container>
            </Main_container>
        </>
    );
}

export default Home;