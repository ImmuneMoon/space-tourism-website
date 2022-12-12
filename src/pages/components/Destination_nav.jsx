import React from 'react';
import styled from 'styled-components';

const Pg_nav = styled.nav`
    display: flex;
    justify-content: center;
`

const Nav_list = styled.ul`
    margin-left: 28rem;
    width: 18rem;
    height: max-content;
    list-style: none;
    display: flex;
    justify-content: space-between;
`
const Item = styled.li`
    height: 1rem;
`

const Location = styled.p`
    margin-bottom: .5rem;
    font-size: 16px;
    letter-spacing: 2.7;
`

const Underline = styled.div`
	width: 85%;
	border-bottom: 3px solid #ffffff86;
	display: none;
	${Item}:hover & {
		display: block;
	}
`

function destNav() {
    return (
        <>
            <Pg_nav>
                <Nav_list>
                    <Item>
                        <Location>
                            MOON
                        </Location>
                        <Underline></Underline>
                    </Item>
                    <Item>
                        <Location>
                            MARS
                        </Location>
                        <Underline></Underline>
                    </Item>
                    <Item>
                        <Location>
                            EUROPA
                        </Location>
                        <Underline></Underline>
                    </Item>
                    <Item>
                        <Location>
                            TITAN
                        </Location>
                        <Underline></Underline>
                    </Item>
                </Nav_list>
            </Pg_nav>
        </>
    );
}

export default destNav;