import React from 'react';
import Button from '../button/Button';
import LinkShortener from '../LinkShortener/LinkShortener';
import Working from '../../assets/images/illustration-working.svg';
const Hero = ({ setShortenedLinks }) => {
	return (
		<div className='hero'>
			<div className='container relative pb-24 justify-between flex flex-col-reverse lg:flex-row lg:h-[calc(100vh-104px)]'>
				<div className='text-center lg:text-left m-auto intro max-w-md flex flex-col justify-center items-center lg:items-start'>
					<h1 className='font-bold text-4xl mt-8 lg:mt-0 sm:text-6xl mb-4 text-neutral-800 leading-[1.15]'>
						More than just shorter links
					</h1>
					<p className='text-neutral-grayishViolet mb-6 font-medium text-base leading-relaxed'>
						Build your brands recognition and get detailed insights on how your
						links are performing
					</p>
					<Button>Get Started</Button>
				</div>
				<div className='intro-image flex justify-center items-center lg:pl-10 xl:pl-20 '>
					<img src={Working} alt='Illustration' />
				</div>
				<LinkShortener setShortenedLinks={setShortenedLinks} />
			</div>
		</div>
	);
};

export default Hero;
