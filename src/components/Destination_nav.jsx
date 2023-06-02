import React, { useState } from 'react';
import styled from 'styled-components';

const Nav_list = styled.ul`
    width: fit-content;
    height: max-content;
    list-style: none;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1025px) {
		margin: 0 auto;
    }
`

const Item = styled.li`
    height: 1rem;
    margin-right: 2rem;

    @media (max-width: 1025px) {
        margin: 0 1rem;
    }
`

const Bttn = styled.button`
    border: none;
    background: none;
    font-weight: 500px;
    margin-bottom: .5rem;
    font-size: 16px;
    letter-spacing: 2.7px;
    color: ${({ isActive, isHovered }) => (isActive || isHovered) ? '#FFFFFF' : '#D0D6F9'};
	font-family: 'Barlow Condensed', sans-serif;
`

const Underline = styled.div`
	width: 85%;
	display: ${({ isActive, isHovered }) => (isActive || isHovered) ? 'block' : 'none'};
    border-bottom: ${({ isActive }) => isActive ? '2px solid #FFFFFF' : '2px solid #ffffff86'};
`
    

function DestNav({ onDestinationChange }) {
    const [activeDest, setActiveDest] = useState('moon');
    const [hoveredDest, setHoveredDest] = useState(null);

    const handleButtonClick = (destination) => {
        setActiveDest(destination);
        onDestinationChange(destination);
    };

    return (
        <>
            <Nav_list id="dest-nav">
                <Item className="navButton">
                    <Bttn
                        id="moonBttn"
                        isActive={activeDest === 'moon'}
                        isHovered={hoveredDest === 'moon'}
                        onClick={() => handleButtonClick('moon')}
                        onMouseEnter={() => setHoveredDest('moon')}
                        onMouseLeave={() => setHoveredDest(null)}
                    >
                        MOON
                    </Bttn>
                    <Underline
                        id="moon-ul"
                        isActive={activeDest === 'moon'}
                        isHovered={hoveredDest === 'moon'}
                    ></Underline>
                </Item>
                <Item className="navButton">
                    <Bttn
                        id="marsBttn"
                        isActive={activeDest === 'mars'}
                        isHovered={hoveredDest === 'mars'}
                        onClick={() => handleButtonClick('mars')}
                        onMouseEnter={() => setHoveredDest('mars')}
                        onMouseLeave={() => setHoveredDest(null)}
                    >
                        MARS
                    </Bttn>
                    <Underline
                        id="mars-ul"
                        isActive={activeDest === 'mars'}
                        isHovered={hoveredDest === 'mars'}
                    ></Underline>
                </Item>
                <Item className="navButton">
                    <Bttn
                        id="europaBttn"
                        isActive={activeDest === 'europa'}
                        isHovered={hoveredDest === 'europa'}
                        onClick={() => handleButtonClick('europa')}
                        onMouseEnter={() => setHoveredDest('europa')}
                        onMouseLeave={() => setHoveredDest(null)}
                    >
                        EUROPA
                    </Bttn>
                    <Underline
                        id="europa-ul"
                        isActive={activeDest === 'europa'}
                        isHovered={hoveredDest === 'europa'}
                    ></Underline>
                </Item>
                <Item className="navButton">
                    <Bttn
                        id="titanBttn"
                        isActive={activeDest === 'titan'}
                        isHovered={hoveredDest === 'titan'}
                        onClick={() => handleButtonClick('titan')}
                        onMouseEnter={() => setHoveredDest('titan')}
                        onMouseLeave={() => setHoveredDest(null)}
                    >
                        TITAN
                    </Bttn>
                    <Underline
                        id="titan-ul"
                        isActive={activeDest === 'titan'}
                        isHovered={hoveredDest === 'titan'}
                    ></Underline>
                </Item>
            </Nav_list>
        </>
    );
}

export default DestNav;