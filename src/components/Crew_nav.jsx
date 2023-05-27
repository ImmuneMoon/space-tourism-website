import React, { useState } from 'react';
import styled from 'styled-components';

const Nav_list = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    width: fit-content;
`

const Nav_item = styled.li`
    margin: 0 .5rem 0 .5rem;
`

const Nav_dot = styled.div`
    background-color: ${({ isActive }) => isActive ? 'rgba(255, 255, 255, 0.5)' : 'rgba(128, 128, 128, 0.35)'};
    border-radius: 50%;
    width: 11px;
    height: 11px;
`

function crewNav({ onCrewChange }) {

    const [activeCrew, setActiveCrew] = useState('doug');
    const [hoveredCrew, setHoveredCrew] = useState(null);

    const handleButtonClick = (Crewmember) => {
        setActiveCrew(Crewmember);
        onCrewChange(Crewmember);
    };

    return(
        <>
            <Nav_list>
                <Nav_item>
                    <Nav_dot 
                        id="dougDot"
                        isActive={activeCrew === 'doug'}
                        isHovered={hoveredCrew === 'doug'}
                        onClick={() => handleButtonClick('doug')}
                        onMouseEnter={() => setHoveredCrew('doug')}
                        onMouseLeave={() => setHoveredCrew(null)}
                        >
                    </Nav_dot>
                </Nav_item>
                <Nav_item>
                    <Nav_dot 
                        id="markDot"
                        isActive={activeCrew === 'mark'}
                        isHovered={hoveredCrew === 'mark'}
                        onClick={() => handleButtonClick('mark')}
                        onMouseEnter={() => setHoveredCrew('mark')}
                        onMouseLeave={() => setHoveredCrew(null)}
                        >
                    </Nav_dot>
                </Nav_item>
                <Nav_item>
                    <Nav_dot 
                        id="victorDot"
                        isActive={activeCrew === 'victor'}
                        isHovered={hoveredCrew === 'victor'}
                        onClick={() => handleButtonClick('victor')}
                        onMouseEnter={() => setHoveredCrew('victor')}
                        onMouseLeave={() => setHoveredCrew(null)}
                        >
                    </Nav_dot>
                </Nav_item>
                <Nav_item>
                    <Nav_dot 
                        id="anousheDot"
                        isActive={activeCrew === 'anoushe'}
                        isHovered={hoveredCrew === 'anoushe'}
                        onClick={() => handleButtonClick('anoushe')}
                        onMouseEnter={() => setHoveredCrew('anoushe')}
                        onMouseLeave={() => setHoveredCrew(null)}
                        >
                    </Nav_dot>
                </Nav_item>
            </Nav_list>
        </>
    );
}

export default crewNav;