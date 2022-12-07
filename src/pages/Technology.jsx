import React from 'react';
import { createGlobalStyle } from 'styled-components';
import bkgrnd from './components/assets/technology/background-technology-desktop.jpg';

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


function Technology() {
    return (
        <>
            <Content></Content>
            <div className="tech_container">
                <main>
                    <h1>this is the technology page</h1>
                </main>
            </div>
        </>
    );
}

export default Technology;