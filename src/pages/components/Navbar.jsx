import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Logo from './assets/logo.svg'

let location = window.location.pathname;

const Global = createGlobalStyle`
	* {
		color: #FFFFFF;
    	text-decoration: none;
	}
`

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2.5rem;
    margin-left: 3.7rem;
`

const Logo_img = styled.img`
    width: 47px;
`

const Line = styled.div`
	border: .5px solid rgba(128, 128, 128, 0.548);
	width: 34%;
	height: 0%;
	transform: translateX(3rem);
`

const Nav = styled.nav`
	height: 6rem;
    width: 60%;
    background-color: rgba(128, 128, 128, 0.1);
`

const List_container = styled.div`
	display: flex;
    margin-top: 1.75rem;
	margin-left: 17%;
`

const Nav_list = styled.ul`
	height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
    width: 75%;
`
const Item = styled.li`
	height: 100%;
`

const Nav_link = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	align-items: center;
	padding-top: .9rem;
	padding-bottom: 2.1rem;
`

const Page_num = styled.p`
	font-family: sans-serif;
	margin-right: .5rem;
	font-weight: bold;
    font-size: 16px;
    letter-spacing: 2.7;
`

const Page_name = styled.p`
	font-family: sans-serif;
    font-size: 16px;
    letter-spacing: 2.7;
`

const Underline = styled.div`
	width: 95%;
	border-bottom: 3px solid #ffffff86;
	display: none;
	${Item}:hover & {
		display: block;
	}
`

function Navbar() {
  return (
    <>
		<Global></Global>
		<Container>
			<Logo_img src={Logo} alt="logo" />
			<Line></Line>
			<Nav>
				<List_container>
					<Nav_list>
						<Item>
							<Link to="/">
								<Nav_link>
									<Page_num>00</Page_num>
									<Page_name>HOME</Page_name>
								</Nav_link>
								<Underline></Underline>
							</Link>
						</Item>
						<Item>
							<Link to="/destination">
								<Nav_link>
									<Page_num>01</Page_num>
									<Page_name>DESTINATION</Page_name>
								</Nav_link>
								<Underline></Underline>
							</Link>
						</Item>
						<Item>
							<Link to="/crew">
								<Nav_link>
									<Page_num>02</Page_num>
									<Page_name>CREW</Page_name>
								</Nav_link>
								<Underline></Underline>
							</Link>
						</Item>
						<Item>
							<Link to="/technology">
								<Nav_link>
									<Page_num>03</Page_num>
									<Page_name>TECHNOLOGY</Page_name>
								</Nav_link>
								<Underline></Underline>
							</Link>
						</Item>
					</Nav_list>
				</List_container>
			</Nav>
		</Container>
    </>
  );
}

export default Navbar;