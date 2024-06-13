import React from "react";

import localFont from "next/font/local";
import { twMerge } from "tailwind-merge";

export const Heading = ({
	className,
	children,
	as: Tag = "h1",
}: {
	className?: string;
	children: React.ReactNode;
	as?: keyof JSX.IntrinsicElements;
}) => {
	return (
		<Tag
			className={twMerge(
				className,
				"text-base md:text-xl lg:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
			)}>
			{children}
		</Tag>
	);
};
