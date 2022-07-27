import React from 'react';
import { ReactComponent as BrandRecognition } from '../../assets/images/icon-brand-recognition.svg';
import { ReactComponent as DetailedRecords } from '../../assets/images/icon-detailed-records.svg';
import { ReactComponent as FullyCustomizable } from '../../assets/images/icon-fully-customizable.svg';
import Button from '../button/Button';
const data = [
	{
		icon: <BrandRecognition />,
		title: 'Brand Recognition',
		desc: "Boost your brand recognition with earn click. Generic links don't mean a thing. Branded links help instil confidence in your content",
	},
	{
		icon: <DetailedRecords />,
		title: 'Detailed Records',
		desc: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
	},
	{
		icon: <FullyCustomizable />,
		title: 'Fully Customizable',
		desc: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement ',
	},
];
const Statistics = ({ shortenedLinks }) => {
	const copyToClipboard = (e, value) => {
		e.target.textContent = 'Copied!';
		e.target.classList.add('copied');
		setTimeout(function () {
			e.target.textContent = 'Copy';
			e.target.classList.remove('copied');
		}, 750);
		navigator.clipboard.writeText(value);
	};
	return (
		<div className={`bg-neutral-gray bg-opacity-[0.15]`}>
			<div className={`container pt-24 pb-8`}>
				<div className='links'>
					{shortenedLinks.length
						? shortenedLinks.map((shortenLink, i) => (
								<div
									key={i}
									className='bg-white text-center sm:text-left flex-col sm:flex-row py-6 sm:p-5 flex justify-center sm:justify-between items-center rounded-lg mb-5  mx-auto w-80 max-w-full sm:w-4/5 md:w-9/12 lg:w-3/4'
								>
									<span className=' text-neutral-veryDarkViolet text-base text-ellipsis whitespace-nowrap overflow-hidden w-full sm:w-64 border-b-2 sm:border-none pb-4  px-4 sm:p-0 mb-3 sm:mb-0'>
										{shortenLink.originalLink}
									</span>
									<a
										href={shortenLink.shortLink}
										className='text-primary-cyan text-base sm:ml-auto mb-4 sm:mb-0'
									>
										{shortenLink.shortLink}
									</a>
									<Button
										className='rounded-md sm:ml-4'
										onClick={e => copyToClipboard(e, shortenLink.shortLink)}
									>
										Copy
									</Button>
								</div>
						  ))
						: null}
				</div>
				<div
					className={` flex flex-col m-auto max-w-md text-center mt-10 mb-20`}
				>
					<h2 className='font-bold text-3xl text-neutral-800 leading-[1.15] mb-5'>
						Advanced Statistics
					</h2>
					<p className='text-neutral-grayishViolet font-medium text-base leading-relaxed'>
						Track how your links are perforùming across the web with our
						advanced statistics dashboard
					</p>
				</div>
				<div className='box-wrapper relative justify-center place-items-center grid grid-cols-[minmax(0,400px)] gap-20 mb-20 lg:mb-40 lg:grid-cols-3 lg:gap-12 lg:items-stretch'>
					{data.map((box, index) => (
						<div
							key={index}
							className='box flex items-center justify-start text-center relative flex-col px-5 pt-[4.5rem] pb-6 bg-white rounded-md '
						>
							<div className='absolute left-2/4 top-0 -translate-x-2/4 -translate-y-2/4 p-6 bg-primary-darkViolet rounded-full w-fit'>
								{box.icon}
							</div>
							<h3 className='text-neutral-veryDarkViolet font-semibold text-2xl mb-3'>
								{box.title}
							</h3>
							<p className='text-neutral-grayishViolet font-medium text-base leading-relaxed'>
								{box.desc}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Statistics;
