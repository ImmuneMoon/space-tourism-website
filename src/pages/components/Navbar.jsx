import React, {useEffect} from "react";
import { Link, useRoutes, useMatch } from "react-router-dom";
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
	color: #FFFFFF86;
	display: none;
`


/*
	window.addEventListener('click', () => {
		path = window.location.pathname;
		console.log('working');
		console.log('path',path);

		if (path === '/') {
			homeUL.style.display = 'block';
			homeUL.style.borderBottom = '3px solid #FFFFFF';

			destUL.style.display = 'none';
			destUL.style.borderBottom = '3px solid #ffffff86';

			crewUL.style.display = 'none';
			crewUL.style.borderBottom = '3px solid #ffffff86';

			techUL.style.display = 'none';
			techUL.style.borderBottom = '3px solid #ffffff86';
		}

		else if (path.includes('/destination')) {
			destUL.style.display = 'block';
			destUL.style.borderBottom = '3px solid #FFFFFF';

			homeUL.style.display = 'none';
			homeUL.style.borderBottom = '3px solid #ffffff86';

			crewUL.style.display = 'none';
			crewUL.style.borderBottom = '3px solid #ffffff86';

			techUL.style.display = 'none';
			techUL.style.borderBottom = '3px solid #ffffff86';
		}

		else if (path.includes('/crew')) {
			crewUL.style.display = 'block';
			crewUL.style.borderBottom = '3px solid #FFFFFF';

			homeUL.style.display = 'none';
			homeUL.style.borderBottom = '3px solid #ffffff86';

			destUL.style.display = 'none';
			destUL.style.borderBottom = '3px solid #ffffff86';

			techUL.style.display = 'none';
			techUL.style.borderBottom = '3px solid #ffffff86';
		}

		else if (path.includes('/technology')) {
			techUL.style.display = 'block';
			techUL.style.borderBottom = '3px solid #FFFFFF';

			homeUL.style.display = 'none';
			homeUL.style.borderBottom = '3px solid #ffffff86';

			destUL.style.display = 'none';
			destUL.style.borderBottom = '3px solid #ffffff86';

			crewUL.style.display = 'none';
			crewUL.style.borderBottom = '3px solid #ffffff86';
		}
	});

	document.addEventListener('mouseover', (event) => {
		// Gets the element that is being hovered over
		let element = event.target;
		console.log('element',element);
		if (element == home) {
			if (!homeUL.style.includes('3px solid rgb(255, 255, 255)')) {
				homeUL.style.display = 'block';
			}
		}
		else if (element == dest) {
			if (!destUL.style.includes('3px solid rgb(255, 255, 255)')) {
				destUL.style.display = 'block';
			}
		}
		else if (element == crew) {
			if (!destUL.style.includes('3px solid rgb(255, 255, 255)')) {
				crewUL.style.display = 'block';
			}
		}
		else if(element == tech) {
			if (!destUL.style.includes('3px solid rgb(255, 255, 255)')) {
				techUL.style.display = 'block';
			}
		}
	  });
	  
	document.addEventListener('mouseout', (event) => {
		// Gets the element that is being hovered out of
		let element = event.target;
		if (element == home) {
			if (!homeUL.style.includes('3px solid rgb(255, 255, 255)')) {
				homeUL.style.display = 'none';
			}
		}
		else if (element == dest) {
			if (!destUL.style.includes('3px solid rgb(255, 255, 255)')) {
				destUL.style.display = 'none';
			}
		}
		else if (element == crew) {
			if (!destUL.style.includes('3px solid rgb(255, 255, 255)')) {
				crewUL.style.display = 'none';
			}
		}
		else if(element == tech) {
			if (!destUL.style.includes('3px solid rgb(255, 255, 255)')) {
				techUL.style.display = 'none';
			}
		}
	});
*/

let activeHome = '';
let activeDest = '';
let activeCrew = '';
let activeTech = '';
	

function Navbar() {
	useEffect(() => {
		// This code will run when the component mounts
		console.log("Component mounted");

		// This code will run when the component unmounts
		return () => {
			console.log("Component unmounted");
		};
		}, []);

		useEffect(() => {
			let path = window.location.pathname;
			console.log(path);
			
			if (path.includes('/') && !path.includes('dest') && !path.includes('crew') && !path.includes('tech')) {
				console.log('home working');
				activeHome = "active-nav-item";
				activeDest = '';
				activeCrew = '';
				activeTech = '';
			}
			else if (path == '/destination') {
				console.log('dest working');
				activeHome = '';
				activeDest = "active-nav-item";
				activeCrew = '';
				activeTech = '';
			}
			else if (path.includes('/crew')) {
				console.log('crew working');
				activeHome = '';
				activeDest = '';
				activeCrew = "active-nav-item";
				activeTech = '';
			}
			else if (path.includes('/technology')) {
				console.log('tech working');
				activeHome = '';
				activeDest = '';
				activeCrew = '';
				activeTech = "active-nav-item";
			}
			// This code will run whenever the page loads
			console.log("Page loaded");
		}, []);

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
									<Nav_link id="home">
										<Page_num>00</Page_num>
										<Page_name>HOME</Page_name>
									</Nav_link>
									<Underline id="homeUL" name={activeHome}></Underline>
								</Link>
							</Item>
							<Item>
								<Link to="/destination">
									<Nav_link id="dest">
										<Page_num>01</Page_num>
										<Page_name>DESTINATION</Page_name>
									</Nav_link>
									<Underline id="destUL" name={activeDest}></Underline>
								</Link>
							</Item>
							<Item>
								<Link to="/crew">
									<Nav_link id="crew">
										<Page_num>02</Page_num>
										<Page_name>CREW</Page_name>
									</Nav_link>
									<Underline id="crewUL" name={activeCrew}></Underline>
								</Link>
							</Item>
							<Item>
								<Link to="/technology">
									<Nav_link id="tech">
										<Page_num>03</Page_num>
										<Page_name>TECHNOLOGY</Page_name>
									</Nav_link>
									<Underline id="techUL" name={activeTech}></Underline>
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