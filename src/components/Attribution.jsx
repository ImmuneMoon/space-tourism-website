import React from "react";
import styled from 'styled-components';


const Footer = styled.footer`
    width: 100%;
    justify-content: center;
    margin: auto;
`

const Credits = styled.div`
    width: 100%;
    font-size: 12px; text-align: center;
`

const Anchor = styled.a`
    color: hsl(178, 44%, 44%);
`

function Attribution() {
    return (
        <>
            <Footer>
                <Credits>
                    Challenge by <Anchor href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor </Anchor> 
                    Coded by <Anchor href="https://www.frontendmentor.io/profile/ImmuneMoon">ImmuneMoon</Anchor>
                </Credits>
            </Footer>
        </>
    );
}

export default Attribution;