import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import dsktop_bkgrnd from './assets/homepage/background-home-desktop.jpg';
import tablet_bkgrnd from './assets/homepage/background-home-tablet.jpg';
import mobile_bkgrnd from './assets/homepage/background-home-mobile.jpg';


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
    align-items: center;
    padding: ${({ theme }) => {
      switch (theme) {
        case 'mobile':
          return '0 2rem';
        case 'tablet':
          return '0 2rem';
        case 'desktop':
        default:
          return '';
      }
    }};

    @media (max-width: 1025px) {
      width: 100%;
      margin: auto;
	}
`;

const Home_container = styled.div`
    width: ${({ theme }) => {
      switch (theme) {
        case 'mobile':
          return 'fit-content';
        case 'tablet':
          return 'fit-content';
        case 'desktop':
        default:
          return '70rem';
      }
    }};
    margin: ${({ theme }) => {
      switch (theme) {
        case 'mobile':
          return '7rem 0';
        case 'tablet':
          return '3rem 0';
        case 'desktop':
        default:
          return '0 5rem';
      }
    }};
    height: fit-content;
    display: flex;
    justify-content: space-between;
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
`;

const Left_container = styled.div`
    width: fit-content;
    height: fit-content;
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
    flex-direction: column;
    justify-content: center;
`;

const Right_container = styled.div`
    margin: ${({ theme }) => {
      switch (theme) {
        case 'mobile':
          return '9rem auto 0 auto';
        case 'tablet':
          return '9rem auto 0 auto';
        case 'desktop':
        default:
          return '7rem 0 0 0';
      }
    }};
    position: relative;
    width: fit-content;
    height: fit-content;
`;

const Main_p = styled.p`
    font-size: ${({ theme }) => {
      switch (theme) {
        case 'mobile':
          return '23px';
        case 'tablet':
          return '18px';
        case 'desktop':
        default:
          return '28px';
      }
    }};
    font-weight: normal;
    color: #D0D6F9;
    letter-spacing: 4.75px;
    font-family: 'Barlow Condensed', sans-serif;
    text-align: ${({ theme }) => {
      switch (theme) {
        case 'mobile':
          return 'center';
        case 'tablet':
          return 'center';
        case 'desktop':
        default:
          return '';
      }
    }};;
`;

const Main_h1 = styled.h1`
    font-family: 'Bellefair', serif;
    font-weight: 400;
    font-size: ${({ theme }) => {
      switch (theme) {
        case 'mobile':
          return '125px';
        case 'tablet':
          return '125px';
        case 'desktop':
        default:
          return '150px';
      }
    }};
    color: #FFFFFF;
    width: fit-content;
    margin-top: 2rem;
    margin-bottom: .5rem;
    margin: ${({ theme }) => {
      switch (theme) {
        case 'mobile':
          return '2rem auto .5rem auto';
        case 'tablet':
          return '2rem auto .5rem auto';
        case 'desktop':
        default:
          return '2rem 0 .5rem 0';
      }
    }};
    text-align: ${({ theme }) => {
      switch (theme) {
        case 'mobile':
          return 'center';
        case 'tablet':
          return 'center';
        case 'desktop':
        default:
          return '';
      }
    }};
`;

const Main_p2 = styled.p`
    font-size: ${({ theme }) => {
      switch (theme) {
        case 'mobile':
          return '12px';
        case 'tablet':
          return '16px';
        case 'desktop':
        default:
          return '16px';
      }
    }};
    text-align: ${({ theme }) => {
      switch (theme) {
        case 'mobile':
          return 'center';
        case 'tablet':
          return 'center';
        case 'desktop':
        default:
          return '';
      }
    }};
    width: ${({ theme }) => {
      switch (theme) {
        case 'mobile':
          return '23rem';
        case 'tablet':
          return '29rem';
        case 'desktop':
        default:
          return '25.6rem';
      }
    }};
`;

const Bttn_container = styled.div`
    border-radius: 50%;
`;

const Explore_bttn = styled.div`
    font-size: ${({ theme }) => {
      switch (theme) {
        case 'mobile':
          return '28px';
        case 'tablet':
          return '28px';
        case 'desktop':
        default:
          return '32px';
      }
    }};
    font-family: 'Bellefair', serif;
    letter-spacing: 4.75;
    background-color: #FFFFFF;
    color: #0B0D17;
    width: ${({ theme }) => {
      switch (theme) {
        case 'mobile':
          return '14rem';
        case 'tablet':
          return '14rem';
        case 'desktop':
        default:
          return '17rem';
      }
    }};
    height: ${({ theme }) => {
      switch (theme) {
        case 'mobile':
          return '14rem';
        case 'tablet':
          return '14rem';
        case 'desktop':
        default:
          return '17rem';
      }
    }};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Bttn_hover = styled.div`
    position: absolute;
    background-color: rgba(255, 255, 255, 0.1);
    width: ${({ theme }) => {
      switch (theme) {
        case 'mobile':
          return '14rem';
        case 'tablet':
          return '14rem';
        case 'desktop':
        default:
          return '17rem';
      }
    }};
    height: ${({ theme }) => {
      switch (theme) {
        case 'mobile':
          return '14rem';
        case 'tablet':
          return '14rem';
        case 'desktop':
        default:
          return '17rem';
      }
    }};
    border-radius: 50%;
    top: 0;
    transition: transform 200ms linear;

    ${Bttn_container}:hover & {
        transform: scale(1.65);
    }
`;


function Home() {
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
            <Main theme={theme}>
                <Home_container theme={theme}>
                    <Left_container theme={theme}>
                        <Main_p theme={theme}>
                            SO,&nbsp;YOU&nbsp;WANT&nbsp;TO&nbsp;TRAVEL&nbsp;TO
                        </Main_p>
                        <Main_h1 theme={theme}>
                            SPACE
                        </Main_h1>
                        <Main_p2 id="information" theme={theme}>
                            Let’s face it; if you want to go to space, you might as well genuinely go to 
                            outer space and not hover kind of on the edge of it. Well sit back, and relax 
                            because we’ll give you a truly out of this world experience!
                        </Main_p2>
                    </Left_container>
                    <Right_container theme={theme}>
                        <Link to="/destination">
                            <Bttn_container>
                                    <Explore_bttn theme={theme}>
                                        EXPLORE
                                    </Explore_bttn>
                                <Bttn_hover theme={theme}/>
                            </Bttn_container>
                        </Link>
                    </Right_container>
                </Home_container>
            </Main>
        </>
    );
}

export default Home;