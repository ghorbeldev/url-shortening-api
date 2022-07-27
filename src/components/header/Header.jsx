import React, { useState } from 'react';
import Button from '../button/Button';
const item = 'p-3 text-xs font-bold cursor-pointer';
const Header = () => {
	const [open, setOpen] = useState(false);
	return (
		<div className='header relative'>
			<div className='container flex py-8 justify-between items-stretch relative'>
				<h1 className='text-3xl font-semibold text-neutral-veryDarkViolet'>
					Shortly
				</h1>
				<div className='toggle-sidebar' onClick={() => setOpen(prev => !prev)}>
					<span className='bar'></span>
					<span className='bar'></span>
					<span className='bar'></span>
				</div>
				<div
					className={`sidebar w-[400px] max-w-[calc(100%-2rem)] z-50 absolute p-8 rounded-md text-center text-white bg-primary-darkViolet divide-y-2 left-2/4 -translate-x-2/4 transition-all duration-500 ${
						open ? 'top-full' : '-top-[100vh]'
					}`}
				>
					<ul className='flex flex-col items-center'>
						<li>Features</li>
						<li>Pricing</li>
						<li>Resources</li>
					</ul>
					<div className='flex flex-col justify-center items-center'>
						<Button light className='text-white'>
							Login
						</Button>
						<Button>Sign Up</Button>
					</div>
				</div>
				<ul className='hidden invisible sm:visible mr-auto sm:flex text-neutral-grayishViolet items-center ml-6'>
					<li className={item}>Features</li>
					<li className={item}>Pricing</li>
					<li className={item}>Resources</li>
				</ul>
				<div className='hidden invisible sm:visible sm:flex justify-center items-center gap-4'>
					<Button light>Login</Button>
					<Button>Sign Up</Button>
				</div>
			</div>
		</div>
	);
};

export default Header;
