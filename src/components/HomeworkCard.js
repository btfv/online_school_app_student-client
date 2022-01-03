import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
	root: {
		flex: '1 1 20%',
		margin: '10px',
		minWidth: 275,
		maxWidth: 350,
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
});

export default function HomeworkCard(props) {
	const classes = useStyles();
	const {
		title,
		description,
		solutionPublicId,
		homeworkPublicId,
		subject,
		creatorName,
		creatorPublicId,
	} = props;
	const hasSolution = Boolean(props.hasSolution);
	const isChecked = Boolean(props.isChecked);
	const homeworkHref = !hasSolution
		? '/dashboard/homework/' + homeworkPublicId
		: '/dashboard/homework/' +
		  homeworkPublicId +
		  '/solution/' +
		  solutionPublicId;

	return (
		<Card className={classes.root} variant='outlined'>
			<CardContent>
				<Typography
					className={classes.title}
					color='textSecondary'
					gutterBottom
				>
					{subject}
				</Typography>
				<Typography variant='h5' component='h2'>
					{title}
				</Typography>
				<Typography className={classes.pos} color='textSecondary'>
					by {creatorName}
				</Typography>
				<Typography variant='body2' component='p'>
					{description}
				</Typography>
			</CardContent>
			<CardActions>
				<Button
					size='small'
					component={Link}
					to={homeworkHref}
					disabled={hasSolution && !isChecked}
				>
					{hasSolution && !isChecked
						? 'Checking...'
						: 'Open ' + (hasSolution ? 'Solution' : 'Homework')}
				</Button>
			</CardActions>
		</Card>
	);
}
