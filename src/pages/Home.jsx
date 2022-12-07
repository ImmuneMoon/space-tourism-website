import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import bkgrnd from './components/assets/homepage/background-home-desktop.jpg';

const Global = createGlobalStyle`
    * {
    }
`

const Content = createGlobalStyle`
    body {
        background-image: url(${bkgrnd});
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -ms-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background-color: black;
    } 
`

const Home_container = styled.div`
    
`

const Main_p1 = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bellefair&display=swap');

    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 400;
    font-size: 28px;
    color: #D0D6F9;
`

const Main_h1 = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bellefair&display=swap');

    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 400;
    font-size: 150px;
    color: #FFFFFF;
    
`

const Main_p2 = styled.p`
    color: #D0D6F9;
`

const Main_bttn = styled.button`
    
`

function Home() {
    return (
        <>
            <Content></Content>
            <Home_container>
                <main>
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
                    <Main_bttn>
                        Explore
                    </Main_bttn>
                </main>
            </Home_container>
        </>
    );
}

export default Home;