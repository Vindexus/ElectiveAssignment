import {ReactNode} from "react";

type AlertProps = {
	type: 'error' | 'success'
	children: ReactNode
	size?: string
}

export default function Alert ({type, children,size='1em'}: AlertProps) {
	let icon : ReactNode

	const svgClasses = 'me-1'

	if (type === 'error') {
		icon = <svg
			className={svgClasses}
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			width={size}
			height={size}
			viewBox="0 0 16 16"
			version="1.1">
			<rect width="16" height="16" id="icon-bound" fill="none" />
			<polygon
				fill={"currentColor"}
				points="14.707,2.707 13.293,1.293 8,6.586 2.707,1.293 1.293,2.707 6.586,8 1.293,13.293 2.707,14.707 8,9.414   13.293,14.707 14.707,13.293 9.414,8 "/>
		</svg>
	}
	else if (type === 'success') {
		icon = <svg
			className={svgClasses}
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none">
				<path d="M17.8086 9.70558C18.1983 9.31421 18.1969 8.68105 17.8056 8.29137C17.4142 7.90169 16.781 7.90305 16.3913 8.29442L10.6215 14.0892L7.30211 10.816C6.90886 10.4283 6.27571 10.4327 5.88793 10.8259C5.50015 11.2192 5.50459 11.8524 5.89784 12.2401L9.92581 16.212C10.3177 16.5985 10.9482 16.5956 11.3366 16.2056L17.8086 9.70558Z" fill="currentColor"/>
				<path fillRule="evenodd" clipRule="evenodd" d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z" fill="currentColor"/>
		</svg>

	}

	return <div className={'text-sm flex items-center ' +
		(type === 'error' ? 'text-red-500' : '') +
		(type === 'success' ? 'text-green-500' : '')
	}>
		{icon}
		<div>
			{children}
		</div>
	</div>
}
