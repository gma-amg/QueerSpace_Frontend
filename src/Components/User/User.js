import React from 'react';

const User = ({name}) => {
	return(
			<div>
				<div className='black f3'>
					{`Welcome ${name}`}
				</div>
			</div>
	);
}

export default User;