import React, { useState } from 'react';
import styled from 'styled-components';

const Nav_list = styled.ul`
    width: 18rem;
    height: max-content;
    list-style: none;
    display: flex;
    justify-content: space-between;
`

const Item = styled.li`
    height: 1rem;
`

const Bttn = styled.button`
    border: none;
    background: none;
    font-weight: 500;
    margin-bottom: .5rem;
    font-size: 16px;
    letter-spacing: 2.7;
    color: ${({ isActive, isHovered }) => (isActive || isHovered) ? '#FFFFFF' : '#D0D6F9'};
`

const Underline = styled.div`
	width: 85%;
	display: ${({ isActive, isHovered }) => (isActive || isHovered) ? 'block' : 'none'};
    border-bottom: ${({ isActive }) => isActive ? '3px solid #FFFFFF' : '3px solid #ffffff86'};
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
            <Nav_list>
                <Item>
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
                <Item>
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
                <Item>
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
                <Item>
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