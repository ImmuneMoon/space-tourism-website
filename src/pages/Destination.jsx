import React from 'react';
import { createGlobalStyle } from 'styled-components';
import bkgrnd from './components/assets/destination/background-destination-desktop.jpg';

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

function Destination() {
    return (
        <>
            <Content></Content>
            <div className="destination_container">
                <main>
                    <h1>this is the destination page</h1>
                </main>
            </div>
        </>
    );
}

export default Destination;