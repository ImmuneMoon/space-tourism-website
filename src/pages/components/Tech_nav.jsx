import React from 'react';
import styled from 'styled-components';

const Nav_container = styled.section`
    display: flex;
    flex-direction: column;
`
// should probably add a style sheet for similar buttons to reduce redundant styles here.
// should do the same for other repeating components too
const Button_1 = styled.button`
    @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bellefair&display=swap');

    font-family: 'Barlow Condensed', sans-serif;
    background: none;
    border: solid 1.5px rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    font-size: 25px;
`

const Button_2 = styled.button`
    @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bellefair&display=swap');

    font-family: 'Barlow Condensed', sans-serif;
    background: none;
    border: solid 1.5px rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    font-size: 25px;
`

const Button_3 = styled.button`
    @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bellefair&display=swap');

    font-family: 'Barlow Condensed', sans-serif;
    background: none;
    border: solid 1.5px rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
`

function Tech_nav() {
    return (
        <>
            <Nav_container>
                <Button_1>
                    1
                </Button_1>
                <Button_2>
                    2
                </Button_2>
                <Button_3>
                    3
                </Button_3>
            </Nav_container>
        </>
    );
}

export default Tech_nav