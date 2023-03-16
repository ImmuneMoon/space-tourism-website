import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import bkgrnd from './components/assets/homepage/background-home-desktop.jpg';


const Content = createGlobalStyle`
    body {
        background-image: url(${bkgrnd});
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -ms-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background-color: black;
        background-repeat: no-repeat;

    } 
`

const Main_container = styled.main`
    margin: 0 0 5rem 0;
`

const Home_container = styled.div`
    width: 100%;
    height: 95vh;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin: 0;
`

const Left_container = styled.div`
    width: fit-content;
    height: fit-content;
    margin: 0;
    margin-top: 16.5rem;
    margin-left: 10.5rem;
    
`

const Right_container = styled.div`
    position: relative;
    min-width: 35%;
    height: fit-content;
    margin: 0;
`

const Main_p1 = styled.p`
    font-weight: 400;
    font-size: 28px;
    letter-spacing: 4.75;
    color: #D0D6F9;
    width: fit-content;
    margin: 0;
`

const Main_h1 = styled.h1`
    font-weight: 400;
    font-size: 150px;
    color: #FFFFFF;
    width: fit-content;
    margin: 0;
    margin-top: 2rem;
    margin-bottom: .5rem;
    
`

const Main_p2 = styled.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 1.75;
    color: #D0D6F9;
    width: 29rem;
    margin: 0;
`

const Bttn_container = styled.div`
    margin: 0;
    margin-top: 22.5rem;
    margin-right: 9.5em;
    border-radius: 50%;
`

const Main_bttn = styled.div`
    font-size: 32px;
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
    top: 57%;
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
                                    <Main_bttn>
                                        EXPLORE
                                    </Main_bttn>
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