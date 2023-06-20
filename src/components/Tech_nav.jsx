import React, { useState } from 'react';
import styled from 'styled-components';

const Nav_container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: fit-content;

    @media (max-width: 1025px) {
        flex-direction: row;
    }
`

// should probably add a style sheet for similar buttons to reduce redundant styles here.
// should do the same for other repeating components too
const Button = styled.button`
    background: ${({ isActive }) => (isActive ? '#FFFFFF' : 'none')};
    border: ${({ isActive, isHovered }) => (isActive || isHovered) ? '1px solid #FFFFFF' : (isActive ? '1.5px solid rgba(128, 128, 128, 0.35)' : '1.5px solid rgba(255, 255, 255, 0.5)')};
    color: ${({ isActive }) => (isActive ? 'black' : '#FFFFFF')};
    border-radius: 50%;
    width: 4.5rem;
    height: 4.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    font-size: 32px;
    font-family: 'Bellefair', serif;

    @media (max-width: 1025px) {
        margin-bottom: 0;
        margin: 3rem 1rem;
    }
`

function Tech_nav({ onTechChange }) {    
    const [activeTech, setActiveTech] = useState('launch');
    const [hoveredTech, setHoveredTech] = useState(null);

    const handleButtonClick = (Technology) => {
        setActiveTech(Technology);
        onTechChange(Technology);
    };

    return (
        <>
            <Nav_container>
                <Button
                    className="navButton"
                    isActive={activeTech === 'launch'}
                    isHovered={hoveredTech === 'launch'}
                    onClick={() => handleButtonClick('launch')}
                    onMouseEnter={() => setHoveredTech('launch')}
                    onMouseLeave={() => setHoveredTech(null)}
                    >
                    1
                </Button>
                <Button             
                    className="navButton"
                    isActive={activeTech === 'port'}
                    isHovered={hoveredTech === 'port'}
                    onClick={() => handleButtonClick('port')}
                    onMouseEnter={() => setHoveredTech('port')}
                    onMouseLeave={() => setHoveredTech(null)}
                >
                    2
                </Button>
                <Button
                    className="navButton"
                    isActive={activeTech === 'capsule'}
                    isHovered={hoveredTech === 'capsule'}
                    onClick={() => handleButtonClick('capsule')}
                    onMouseEnter={() => setHoveredTech('capsule')}
                    onMouseLeave={() => setHoveredTech(null)}
                >
                    3
                </Button>
            </Nav_container>
        </>
    );
}

export default Tech_nav