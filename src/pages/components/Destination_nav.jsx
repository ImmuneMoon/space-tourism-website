import React from 'react';
import styled from 'styled-components';

const Nav_list = styled.ul`
    margin-left: 50rem;
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
    margin: 0;
    padding: 0;
`

const Location = styled.p`
    font-weight: 500;
    margin-bottom: .5rem;
    font-size: 16px;
    letter-spacing: 2.7;
    color: #D0D6F9;
	${Item}:hover & {
		color: #FFFFFF;
	}
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
            <Nav_list>
                <Item>
                    <Bttn id="moon">
                        <Location>
                            MOON
                        </Location>
                        <Underline></Underline>
                    </Bttn>
                </Item>
                <Item>
                    <Bttn id="mars">
                        <Location>
                            MARS
                        </Location>
                        <Underline></Underline>
                    </Bttn>
                </Item>
                <Item>
                    <Bttn id="europa">
                        <Location>
                            EUROPA
                        </Location>
                        <Underline></Underline>
                    </Bttn>
                </Item>
                <Item>
                    <Bttn id="titan">
                        <Location>
                            TITAN
                        </Location>
                        <Underline></Underline>
                    </Bttn>
                </Item>
            </Nav_list>
        </>
    );
}

export default destNav;