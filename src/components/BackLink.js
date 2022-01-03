import React from 'react';
import { IconButton } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const useStyles = makeStyles((theme) => ({
	backLink: { display: 'flex', position: 'absolute', 'margin-left': 30 },
}));

export default function BackLink(props) {
	const { history } = props;
	const classes = useStyles();
	return (
        <div className={classes.backLink}>
			<IconButton
                onClick={() => {
					history.goBack();
				}}
                size="large">
				<ArrowBackIosIcon
					fontSize='large'
					className={classes.arrowIcon}
				/>
			</IconButton>
		</div>
    );
}
