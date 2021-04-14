import React from 'react';
import { Zoom, useScrollTrigger } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	position: 'fixed',
		bottom: theme.spacing(2),
		right: theme.spacing(2),
}));

const ScrollToTop = ({ children }) => {
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 100,
	});
	const classes = useStyles();

	const handleClick = (e) => {
		const anchor = (e.target.ownerDocument || document).querySelector(
			'#back-to-top-anchor'
		);

		if (anchor) anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
	};

	return (
		<Zoom in={trigger}>
			<div
				onClick={handleClick}
				role="presentation"
				className={classes.scrollTop}
			>
				{children}
			</div>
		</Zoom>
	);
};

export default ScrollToTop;