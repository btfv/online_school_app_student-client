import React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function Copyright() {
	return (
		<Typography variant='body2' color='textSecondary' align='center'>
			{'Copyright © '}
			<Link color='inherit' href='https://material-ui.com/'>
				Online School App
			</Link>{' '}
			{new Date().getFullYear()}
			{'. Alpha version.'}
		</Typography>
	);
}