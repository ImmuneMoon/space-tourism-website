import React from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import bkgrnd from './assets/technology/background-technology-desktop.jpg';
import Tech_nav from './Tech_nav';
import launch_vehicle from './Launch_vehicle';

let Vehicle = launch_vehicle;

const Content = createGlobalStyle`
    body {
        background-image: url(${bkgrnd});
    }
`

const Main = styled.main`
    height: 100%;
`

const Heading = styled.div`
    margin-top: 3rem;
    margin-left: 10.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 20rem;
`

const Three = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bellefair&display=swap');

    font-family: 'Barlow Condensed', sans-serif;
    font-size: 28px;
    font-weight: bold;
    color: #4b5560;
    letter-spacing: 4.75;
`

const Launch = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bellefair&display=swap');

    font-family: 'Barlow Condensed', sans-serif;
    font-size: 28px;
    font-weight: 500;
    color: #FFFFFF;
    letter-spacing: 4.75;
`

const Tech_section = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const L_container = styled.div`
    
`

const R_container = styled.div`
    display: flex;
    flex-direction: column;
`

const Terms = styled.p`
    width: fit-content;
`

function Technology() {
    return (
        <>
            <Content></Content>
            <Main>
                <Heading>
                    <Three>
                        03
                    </Three>
                    <Launch>
                        SPACE LAUNCH 101
                    </Launch>
                </Heading>
                <Tech_section>
                    <L_container>
                        <Tech_nav/>
                    </L_container>
                    <R_container>
                        <Terms>
                            THE TERMINOLOGY...
                        </Terms>
                        <Vehicle/>
                    </R_container>
                </Tech_section>
            </Main>
        </>
    );
}

export default Technology;