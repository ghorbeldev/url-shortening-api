import React from 'react';
import Button from '../button/Button';
import { ReactComponent as Facebook } from '../../assets/images/icon-facebook.svg';
import { ReactComponent as Twitter } from '../../assets/images/icon-twitter.svg';
import { ReactComponent as Instagram } from '../../assets/images/icon-instagram.svg';
import { ReactComponent as Pinterest } from '../../assets/images/icon-pinterest.svg';
const h5 = `text-base font-light mb-6`;
const ul = `mb-8 md:mb-0`;
const li = `text-neutral-gray text-[.95rem] mb-2`;
const Footer = () => {
	return (
		<>
			<div className='flex text-center py-16 px-8 md:py-14 flex-col items-center justify-center bg-primary-darkViolet bg-[url(./assets/images/bg-boost-mobile.svg)] md:bg-[url(./assets/images/bg-boost-desktop.svg)] w-full'>
				<h3 className='text-white font-semibold text-3xl mb-3'>
					Boost your links today
				</h3>
				<Button className='mt-3 text-lg font-semibold px-8 py-3'>
					Get Started
				</Button>
			</div>
			<div className='bg-neutral-veryDarkViolet'>
				<div className='container py-10  flex flex-col md:flex-row items-center justify-center text-center md:text-left md:items-stretch md:justify-between text-white '>
					<h3 className='text-3xl font-semibold mb-10 md:mb-0'>Shortly</h3>
					<ul className={ul}>
						<h5 className={h5}>Features</h5>
						<li className={li}>Link Shortening</li>
						<li className={li}>Branded links</li>
						<li className={li}>Analytics</li>
					</ul>
					<ul className={ul}>
						<h5 className={h5}>Resources</h5>
						<li className={li}>Blog</li>
						<li className={li}>Developers</li>
						<li className={li}>Support</li>
					</ul>
					<ul className={ul}>
						<h5 className={h5}>Company</h5>
						<li className={li}>About</li>
						<li className={li}>Our Team</li>
						<li className={li}>Careers</li>
						<li className={li}>Contact</li>
					</ul>
					<ul className='flex'>
						<li className='mx-3'>
							<a href='www.facebook.com'>
								<Facebook />
							</a>
						</li>
						<li className='mx-3'>
							<a href='www.twitter.com'>
								<Twitter />
							</a>
						</li>
						<li className='mx-3'>
							<a href='www.pinterest.com'>
								<Pinterest />
							</a>
						</li>
						<li className='mx-3'>
							<a href='www.instagram.com'>
								<Instagram />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Footer;
