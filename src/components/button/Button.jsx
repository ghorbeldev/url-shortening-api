import React from 'react';

const Button = ({ children, light, className, ...rest }) => {
	return (
		<button
			className={`${
				light
					? 'text-neutral-grayishViolet'
					: 'bg-primary-cyan text-white shadow-sm'
			} px-4 py-2 font-medium text-sm rounded-full cursor-pointer w-fit hover:brightness-[.95] transition-all ${className}`}
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
