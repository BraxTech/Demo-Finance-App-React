import React from 'react';
import NavLink from '@components/common/NavLink';
function Navbar() {
	return (
		<>
			<div className='p-4 rounded-lg bg-[#F49D37] w-full  flex justify-between'>
				<p>Logo</p>

				<div className='flex justify-between w-full'>
					<ul className='flex gap-[30px] '>
						<NavLink
							name='Home'
							active={false}
							link=''
						/>
						<NavLink
							name='Resources'
							active={false}
							link=''
						/>
					</ul>
					<div className='flex gap-[10px]'>
						<div className='border rounded-3xl'>ico</div>
						<div className='border rounded-3xl'>ico</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Navbar;
