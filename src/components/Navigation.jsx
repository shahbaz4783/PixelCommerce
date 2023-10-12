import { NavLink } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';
import { useState } from 'react';

export const Navigation = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);

	const toggleNavbar = () => {
		setIsNavOpen(!isNavOpen);

		if (!isNavOpen) {
			document.body.classList.add('no-scroll');
		} else {
			document.body.classList.remove('no-scroll');
		}
	};

	const closeNavbar = () => {
		setIsNavOpen(false);
		document.body.classList.remove('no-scroll');
	};

	const navLinkStyle = ({ isActive }) => ({
		color: isActive ? '#f26419' : 'inherit',
		paddingBottom: isActive ? '0.2em' : 'inherit',
		borderBottom: isActive ? '2px solid' : 'inherit',
		transition: isActive ? 'all 0.25s ease-in' : 'inherit',
	});

	return (
		<header>
			<div className='logo'>
				<NavLink to='/' end onClick={closeNavbar}>
				</NavLink>
			</div>

			<nav className={isNavOpen ? 'responsive_nav' : ''}>
				<ul>
					<li>
						<NavLink to='/' style={navLinkStyle} end onClick={closeNavbar}>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to='/marketplace' style={navLinkStyle} onClick={closeNavbar}>
							Marketplace
						</NavLink>
					</li>
					<li>
						<NavLink to='/profile' style={navLinkStyle} onClick={closeNavbar}>
							Profile
						</NavLink>
					</li>
				</ul>
			</nav>

			<div className='right-content'>
				<NavLink to='/profile'>
					<button className='contactBtn'>
						<span>Profile</span>
					</button>
				</NavLink>

				<button className='nav-btn' onClick={toggleNavbar}>
					{isNavOpen ? <FaTimes /> : <FaBars />}
				</button>
			</div>
		</header>
	);
};
