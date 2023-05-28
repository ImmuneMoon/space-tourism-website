import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import bkgrnd from './assets/homepage/background-home-desktop.jpg';


const Content = createGlobalStyle`
    body {
        background-image: url(${bkgrnd});
        background-repeat: no-repeat;
        height: 100%;
        background-position: center;
        background-size: cover;
    } 
`

const Main_container = styled.main`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Home_container = styled.div`
    width: 80%;
    margin-top: 5rem;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`

const Left_container = styled.div`
    width: fit-content;
    height: fit-content;
`

const Right_container = styled.div`
    margin-top: 7rem;
    position: relative;
    min-width: min-content;
    height: fit-content;
`

const Main_p1 = styled.p`
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 400;
    font-size: 28px;
    letter-spacing: 4.75;
    color: #D0D6F9;
    width: fit-content;
`

const Main_h1 = styled.h1`
    font-family: 'Bellefair', serif;
    font-weight: 400;
    font-size: 150px;
    color: #FFFFFF;
    width: fit-content;
    margin-top: 2rem;
    margin-bottom: .5rem;
`

const Main_p2 = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.75;
    color: #D0D6F9;
    width: 26rem;
`

const Bttn_container = styled.div`
    border-radius: 50%;
`

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
`

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
`


function Home() {
    return (
        <>
            <Content></Content>
            <Main_container>
                <Home_container>
                    <Left_container>
                        <Main_p1>
                            SO, YOU WANT TO TRAVEL TO
                        </Main_p1>
                        <Main_h1>
                            SPACE
                        </Main_h1>
                        <Main_p2>
                            Let’s face it; if you want to go to space, you might as well genuinely go to 
                            outer space and not hover kind of on the edge of it. Well sit back, and relax 
                            because we’ll give you a truly out of this world experience!
                        </Main_p2>
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