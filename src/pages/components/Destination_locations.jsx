import React from 'react';
import styled from 'styled-components';
import moon from './assets/destination/image-moon.png'

const Dest_container = styled.section`
    
`

let Dest_img = styled.img`
    
`

let alt = ''

function location() {
    return(
        <>
            <Dest_container>
                <Dest_img src={moon} alt={alt} />

            </Dest_container>
        </>
    );
}

export default location;