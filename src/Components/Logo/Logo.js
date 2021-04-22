import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import rainbow from './rainbow.png';

const Logo = () => {
	return(
			<div className='ma4 mt0'>
				<Tilt className="Tilt" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
 				<div className="Tilt-inner pa3">
 					<img style={{paddingTop:'5px'}} src={rainbow} alt='logo'/> 
 				</div>
				</Tilt>
			</div>
	);
}

export default Logo;