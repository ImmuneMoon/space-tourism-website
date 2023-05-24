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
	border-bottom: 3px solid #FFFFFF;
	display: none;
`
    

function destNav() {

    return (
        <>
            <Nav_list>
                <Item>
                    <Bttn id="moon">
                        MOON
                    </Bttn>
                    <Underline id="moon-ul"></Underline>
                </Item>
                <Item>
                    <Bttn id="mars">
                        MARS
                    </Bttn>
                    <Underline id="mars-ul"></Underline>
                </Item>
                <Item>
                    <Bttn id="europa">
                        EUROPA
                    </Bttn>
                    <Underline id="europa-ul"></Underline>
                </Item>
                <Item>
                    <Bttn id="titan">
                        TITAN
                    </Bttn>
                    <Underline id="titan-ul"></Underline>
                </Item>
            </Nav_list>
        </>
    );
}

export default destNav;