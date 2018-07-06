import React from 'react';
import './Message.scss';
interface ComponentProps {
	error?: boolean;
	message: string;
}
export default ({error, message}: ComponentProps) => (
	<div className={`message mx-2 col-md-8 text-center text-muted alert alert-${error ? 'dark' : 'info'}`}>
		{message}
	</div>);
