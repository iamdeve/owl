import React from 'react';
import vect from '../asserts/Vector.png';
import { Navbar, Nav, Button } from 'react-bootstrap';

function NavBar() {
	return (
		<>
			<Navbar collapseOnSelect container expand='lg' bg='dark' variant='dark'>
				<Navbar.Brand to='' style={{ color: 'red', fontFamily: 'Lato', fontWeight: '600', fontSize: '14px' }}>
					<img src={vect} /> OWL
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' style={{ color: 'red' }} />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='mr-auto'>
						<Nav.Link to='' style={{ color: 'white', fontSize: '14px', fontFamily: 'Lato', fontWeight: '400' }}>
							SOLUTIONS
						</Nav.Link>
						<Nav.Link to='' style={{ color: 'white', fontSize: '14px', fontFamily: 'Lato', fontWeight: '400' }}>
							WHO WE ARE
						</Nav.Link>
						<Nav.Link to='' style={{ color: 'white', fontSize: '14px', fontFamily: 'Lato', fontWeight: '400' }}>
							BLOG
						</Nav.Link>
					</Nav>
					<Nav>
						<div className='start-now'>
							<Button size='md' variant='secondary' className='light-shadow'>
								START TODAY
							</Button>
						</div>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
}

export default NavBar;
