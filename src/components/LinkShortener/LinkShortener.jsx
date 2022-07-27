import React, { useState } from 'react';
import { shortLink } from '../../config/api';
import Button from '../button/Button';
const LinkShortener = ({ setShortenedLinks }) => {
	const [value, setValue] = useState('');
	const onChange = e => {
		setValue(e.target.value);
	};
	const onClick = async () => {
		try {
			const { data } = await shortLink(value);
			setShortenedLinks(prev => [
				{
					originalLink: data.result.original_link,
					shortLink: data.result.full_short_link,
				},
				...prev.slice(0, 2),
			]);
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<div
			className={`flex-wrap sm:flex-nowrap flex justify-center items-stretch py-6 px-4 rounded-lg sm:p-8 bg-[url(./assets/images/bg-shorten-mobile.svg)] bg-primary-darkViolet md:bg-[url(./assets/images/bg-shorten-desktop.svg)] absolute top-full left-2/4 -translate-x-2/4 -translate-y-2/4 w-[calc(100%-1rem)] sm:w-4/5 md:w-9/12 lg:w-2/4`}
			style={{ backgroundSize: '100% 100%' }}
		>
			<input
				type='url'
				name='url'
				id='url'
				value={value}
				onChange={onChange}
				className={`outline-none border-none rounded-md w-full sm:w-auto sm:flex-1  p-4  placeholder:text-opacity-80 placeholder:text-neutral-grayishViolet font-normal text-base `}
				placeholder='Shorten a link here...'
			/>

			<Button
				onClick={onClick}
				className='w-full mt-4 sm:mt-0 sm:w-fit rounded-md sm:ml-3 text-lg flex justify-center items-center font-bold'
			>
				Shorten it!
			</Button>
		</div>
	);
};

export default LinkShortener;
