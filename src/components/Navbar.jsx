import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import logo from './assets/logo.svg'
import hamburger from './assets/icon-hamburger.svg';
import close from './assets/icon-close.svg';

const Global = createGlobalStyle`
	* {
		color: #FFFFFF;
    	text-decoration: none;
	}
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
	margin: 2.5rem 0 0 3.7rem;
	position: relative;

	@media (max-width: 1025px) {
		margin: 0;
	}
`;

const Logo_img = styled.img`
    width: 47px;
	@media (max-width: 1025px) {
		margin: 0 0 0 2rem;
	}
`;

const Line = styled.div`
	display: ${({ theme }) => {
      switch (theme) {
        case 'mobile':
          return 'none';
        case 'tablet':
          return 'none';
        case 'desktop':
        default:
          return 'block';
      }
    }};
	border: .5px solid rgba(128, 128, 128, 0.548);
	width: 34%;
	height: 0%;
	transform: translateX(3rem);
	z-index: 1;
`;

const MenuBttn = styled.button`
  	display: none;
	width: fit-content;
	height: fit-content;
	margin: 2rem;
	background: none;
	border: none;

	@media (max-width: 650px) {
		display: block;
		visibility: ${({ isOpen }) => (isOpen ? 'hidden' : 'visible')};
	}
`;

const CloseBttn = styled.button`
	display: none;
	width: fit-content;
	height: fit-content;
	background: none;
	border: none;
	justify-self: flex-end;

	@media (max-width: 650px) {
		display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
	}
`;

const Nav = styled.nav`
	display: block;
	height: ${({ theme }) => {
      switch (theme) {
        case 'mobile':
          return '100vh';
        case 'tablet':
          return '6rem';
        case 'desktop':
        default:
          return '5.5rem';
      }
    }};
    width: ${({ theme }) => {
      switch (theme) {
        case 'mobile':
          return 'fit-content';
        case 'tablet':
          return '65%';
        case 'desktop':
        default:
          return '60%';
      }
    }};
    background-color: rgba(208, 214, 249, 0.04);
	backdrop-filter: blur(50px);

	@media (max-width: 650px) {
		display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
		flex-direction: row-reverse;
		position: absolute;
		top: 0;
		right: 0;
		padding: 2rem;
		z-index: 1;
	}
`;

const List_container = styled.div`
	display: flex;
	justify-content: ${({ theme }) => {
      switch (theme) {
        case 'mobile':
          return '';
        case 'tablet':
          return 'center';
        case 'desktop':
        default:
          return '';
      }
    }};
	height: 100%;
	margin-left: ${({ theme }) => {
		switch (theme) {
		case 'mobile':
			return '0';
		case 'tablet':
			return '0';
		case 'desktop':
			return '15%';
		default:
			return '0';
		}
	}};
	align-items: center;
`;

const Nav_list = styled.ul`
	height: 100%;
	display: flex;
	flex-direction: ${({ theme }) => {
    switch (theme) {
        case 'mobile':
          	return 'column';
		case 'tablet':
			return 'row';
		case 'desktop':
        default:
          	return 'row';
      }
    }};
    justify-content: space-between;
	align-items: center;
    list-style: none;
    width: 75%;

	@media (max-width: 1025px) {
		margin: 0 auto;
		width: 80%;
	}

	@media (max-width: 650px) {
		margin: 20rem 3rem 3rem 3rem;
		align-items: start;
		justify-content: start;
	}

`;

const Item = styled.li`
	display: flex;
	align-items: center;
	height: 100%;
	margin: ${({ theme }) => {
      switch (theme) {
        case 'mobile':
          return '0 0 3rem 0';
        case 'tablet':
          return '0 .5rem';
        case 'desktop':
        default:
          return '0 1rem 0 0';
      }
    }};
	@media (max-width: 650px) {
		height: fit-content;
	}
`;

const Nav_link = styled.div`
	height: 96.2%;
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	align-items: center;
	@media (max-width: 650px) {
		height: fit-content;
	}
`;

const Page_num = styled.p`
	display: ${({ theme }) => {
      switch (theme) {
        case 'mobile':
          return 'block';
        case 'tablet':
          return 'none';
        case 'desktop':
        default:
          return 'block';
      }
    }};
	font-family: 'Barlow Condensed', sans-serif;
	margin: auto .5rem auto 0;
	font-weight: bolder;
    font-size: 18px;
    letter-spacing: 2.7px;
	@media (max-width: 650px) {
		margin: 0 .5rem 0 0;
	}
`;

const Page_name = styled.p`
	font-family: 'Barlow Condensed', sans-serif;
    font-size: 18px;
    letter-spacing: 2.7px;
	font-weight: 400px;
	margin-top: auto;
	margin-bottom: auto;
	@media (max-width: 650px) {
		margin: 0;
	}
`;

const Underline = styled.div`
	width: 90%;
	${Item}:not([style*="border-bottom: 3px solid #FFFFFF"]):hover & {
		border-bottom: 3px solid #FFFFFF86;
	}	
	@media (max-width: 650px) {
		display: none;
	}
`;

function Navbar() {
	const [path, setPath] = useState(window.location.pathname);
	let activeHome = '';
	let activeDest = '';
	let activeCrew = '';
	let activeTech = '';
  
	useEffect(() => {
	  const handleWindowClick = () => {
		setPath(window.location.pathname);
	  };
  
	  window.addEventListener('click', handleWindowClick);
  
	  return () => {
		window.removeEventListener('click', handleWindowClick);
	  };
	}, []);
	
	switch (path) {
		case '/':
			activeHome = "active-nav-item";
			activeDest = '';
			activeCrew = '';	
			activeTech = '';
			break;
		case '/destination':
			activeHome = '';
			activeDest = "active-nav-item";
			activeCrew = '';
			activeTech = '';
			break;
		case '/crew':
			activeHome = '';
			activeDest = '';
			activeCrew = "active-nav-item";
			activeTech = '';
			break;
		case '/technology':
			activeHome = '';
			activeDest = '';
			activeCrew = '';
			activeTech = "active-nav-item";
			break;
		default:
		  	break;
	  }

	const [theme, setTheme] = useState('desktop');

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth <= 650) {
        	setTheme('mobile');
	  		setIsOpen(false);
        } 
		else if (window.innerWidth > 650 && window.innerWidth <= 1025) {
          	setTheme('tablet');
			setIsOpen(true);
        } 
		else {
          	setTheme('desktop');
        }
      };
  
      handleResize();
      window.addEventListener('resize', handleResize);
  
      return () => {
        	window.removeEventListener('resize', handleResize);
      };
    }, []);


	const [isOpen, setIsOpen] = useState(false);

	const OpenNav = () => {
	  	setIsOpen(true);
	};
  
	const CloseNav = () => {
	  	setIsOpen(false);
	};

	return (
		<>
			<Global/>
			<Container>
				<Logo_img src={logo} alt="Logo" />
				<Line theme={theme}/>
				<MenuBttn isOpen={isOpen} onClick={OpenNav}>
					<img width="35px" src={hamburger} alt="Menu" />
				</MenuBttn>
				<Nav theme={theme} isOpen={isOpen}>
					<CloseBttn theme={theme} isOpen={isOpen} onClick={CloseNav}>
						<img width="27px" src={close} alt="Close" />
					</CloseBttn>
					<List_container theme={theme}>
						<Nav_list theme={theme}>
							<Item theme={theme}>
								<Link className="link" to="/">
									<Nav_link id="home">
										<Page_num theme={theme}>00</Page_num>
										<Page_name theme={theme}>HOME</Page_name>
									</Nav_link>
									<Underline id={activeHome}></Underline>
								</Link>
							</Item>
							<Item theme={theme}>
								<Link className="link" to="/destination">
									<Nav_link id="dest">
										<Page_num theme={theme}>01</Page_num>
										<Page_name theme={theme}>DESTINATION</Page_name>
									</Nav_link>
									<Underline id={activeDest}></Underline>
								</Link>
							</Item>
							<Item theme={theme}>
								<Link className="link" to="/crew">
									<Nav_link id="crew">
										<Page_num theme={theme}>02</Page_num>
										<Page_name theme={theme}>CREW</Page_name>
									</Nav_link>
									<Underline id={activeCrew}></Underline>
								</Link>
							</Item>
							<Item theme={theme}>
								<Link className="link" to="/technology">
									<Nav_link id="tech">
										<Page_num theme={theme}>03</Page_num>
										<Page_name theme={theme}>TECHNOLOGY</Page_name>
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