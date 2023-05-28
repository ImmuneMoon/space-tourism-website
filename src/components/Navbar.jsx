import React, { useState} from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Logo from './assets/logo.svg'

const Global = createGlobalStyle`
	* {
		color: #FFFFFF;
    	text-decoration: none;
	}
`

const Container = styled.div`
    display: flex;
    justify-content: space-between;
	gap: 1rem;
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
	height: 100%;
	margin-left: 17%;
	align-items: center;
`

const Nav_list = styled.ul`
	height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
	align-items: center;
    list-style: none;
    width: 75%;
`
const Item = styled.li`
	display: flex;
	align-items: center;
	height: 100%;
`

const Nav_link = styled.div`
	height: 97%;
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	align-items: center;
`

const Page_num = styled.p`
	font-family: 'Barlow Condensed', sans-serif;
	margin-top: auto;
	margin-right: .5rem;
	margin-bottom: auto;
	font-weight: bold;
    font-size: 18px;
    letter-spacing: 2.7;
`

const Page_name = styled.p`
	font-family: 'Barlow Condensed', sans-serif;
    font-size: 18px;
    letter-spacing: 2.7;
	margin-top: auto;
	margin-bottom: auto;
`

const Underline = styled.div`
	width: 90%;
	${Item}:not([style*="border-bottom: 3px solid #FFFFFF"]):hover & {
		border-bottom: 3px solid #FFFFFF86;
	}
`

function Navbar() {
	let [path, setPath] = useState(window.location.pathname);
	let activeHome = '';
	let activeDest = '';
	let activeCrew = '';
	let activeTech = '';
	window.addEventListener('click', () => {
		setPath(window.location.pathname);
	});
	console.log(path);
	if (path === ('/') && !path.includes('dest') && !path.includes('crew') && !path.includes('tech')) {
		activeHome = "active-nav-item";
		activeDest = '';
		activeCrew = '';
		activeTech = '';
	}
	else if (path === '/destination') {
		activeHome = '';
		activeDest = "active-nav-item";
		activeCrew = '';
		activeTech = '';
	}
	else if (path === '/crew') {
		activeHome = '';
		activeDest = '';
		activeCrew = "active-nav-item";
		activeTech = '';
	}
	else if (path === '/technology') {
		activeHome = '';
		activeDest = '';
		activeCrew = '';
		activeTech = "active-nav-item";
	}
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
								<Link className="link" to="/">
									<Nav_link id="home">
										<Page_num>00</Page_num>
										<Page_name>HOME</Page_name>
									</Nav_link>
									<Underline id={activeHome}></Underline>
								</Link>
							</Item>
							<Item>
								<Link className="link" to="/destination">
									<Nav_link id="dest">
										<Page_num>01</Page_num>
										<Page_name>DESTINATION</Page_name>
									</Nav_link>
									<Underline id={activeDest}></Underline>
								</Link>
							</Item>
							<Item>
								<Link className="link" to="/crew">
									<Nav_link id="crew">
										<Page_num>02</Page_num>
										<Page_name>CREW</Page_name>
									</Nav_link>
									<Underline id={activeCrew}></Underline>
								</Link>
							</Item>
							<Item>
								<Link className="link" to="/technology">
									<Nav_link id="tech">
										<Page_num>03</Page_num>
										<Page_name>TECHNOLOGY</Page_name>
									</Nav_link>
									<Underline id={activeTech}></Underline>
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