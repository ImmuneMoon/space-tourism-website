import React from 'react';
import styled from 'styled-components';

const Nav_container = styled.section`
    
`

const Nav_module = styled.nav`
    
`

const Nav_list = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
`

const Nav_item = styled.li`
    margin: 0 .5rem 0 .5rem;
`

const Nav_dot = styled.div`
    background-color: rgba(128, 128, 128, 0.35);
    border-radius: 50%;
    width: 11px;
    height: 11px;
    ${Nav_item}:hover & {
        background-color: rgba(255, 255, 255, 0.5);
    }
`

function crewNav() {
    return(
        <>
            <Nav_container>
                <Nav_module>
                    <Nav_list>
                        <Nav_item>
                            <Nav_dot></Nav_dot>
                        </Nav_item>
                        <Nav_item>
                            <Nav_dot></Nav_dot>
                        </Nav_item>
                        <Nav_item>
                            <Nav_dot></Nav_dot>
                        </Nav_item>
                        <Nav_item>
                            <Nav_dot></Nav_dot>
                        </Nav_item>
                    </Nav_list>
                </Nav_module>
            </Nav_container>
        </>
    );
}

export default crewNav;