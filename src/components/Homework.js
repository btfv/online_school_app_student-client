import React, { useEffect } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { connect } from 'react-redux';
import { homeworkActions } from '../redux/actions/homeworkActions';
import { CircularProgress, Fab } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Copyright from './Copyright';
import AttachmentPanel from './AttachmentPanel';
import Task from './Task';
import { reduxForm, FieldArray, Field } from 'redux-form';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
import { homeworkListActions } from '../redux/actions/homeworkListActions';
import TeacherInfoBox from './TeacherInfoBox';

const useStyles = makeStyles((theme) => ({
	root: {
		'flex-wrap': 'wrap',
		width: '100%',
		display: 'flex',
		'justify-content': 'center',
	},
	centerCircle: {
		position: 'fixed',
		'align-items': 'center',
		display: 'flex',
		padding: 0,
		height: '90%',
	},
	icon: {
		marginRight: theme.spacing(2),
	},
	heroContent: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(6, 0, 6),
	},
	heroButtons: {
		marginTop: theme.spacing(4),
	},
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
	cardContent: {
		flexGrow: 1,
	},
	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(6),
	},
	tasks: {},
	backLink: { display: 'flex', position: 'absolute', 'margin-left': 30 },
	sendHomework: {
		marginTop: theme.spacing(4),
		'min-width': 200,
		'max-width': 300,
	},
	arrowIcon: {
		'padding-left': 6,
	},
}));

var Homework = (props) => {
	const {
		handleSubmit,
		homework,
		gettingHomework,
		sendSolution,
		sendingSolution,
		getHomework,
		solutionSended,
		clearHomeworkList,
	} = props;
	const { publicId } = props.match.params;
	const classes = useStyles();

	if (solutionSended) {
		clearHomeworkList();
	}
	if (!gettingHomework && !homework && !solutionSended) {
		getHomework(publicId);
		return (
			<div className={classes.root}>
				<div className={classes.centerCircle}>
					<CircularProgress />
				</div>
			</div>
		);
	}
	if (gettingHomework || sendingSolution) {
		return (
			<div className={classes.root}>
				<div className={classes.centerCircle}>
					<CircularProgress />
				</div>
			</div>
		);
	}
	if (homework)
		return (
            <React.Fragment>
				<CssBaseline />
				<main>
					{/* Hero unit */}
					<div className={classes.heroContent}>
						<div className={classes.backLink}>
							<IconButton component={Link} to='/dashboard/homeworks' size="large">
								<ArrowBackIosIcon
									fontSize='large'
									className={classes.arrowIcon}
								/>
							</IconButton>
						</div>
						<Container maxWidth='sm'>
							<Typography
								component='h2'
								variant='h3'
								align='center'
								color='textPrimary'
								gutterBottom
							>
								{homework.title}
							</Typography>
							<Typography
								variant='h5'
								align='center'
								color='textSecondary'
								paragraph
							>
								{homework.description}
							</Typography>
							<TeacherInfoBox profile={homework.creatorInfo} text="Homework created by" />
							<div className={classes.heroButtons}>
								{homework.attachments.map((attachment) => {
									return (
										<AttachmentPanel
											name={attachment.name}
											reference={attachment.reference}
										/>
									);
								})}
							</div>
							<div className={classes.tasks}>
								<Typography
									variant='h4'
									align='center'
									paragraph
								>
									Tasks
								</Typography>
								{!homework.tasks ||
								homework.tasks.length == 0 ? (
									<Typography
										variant='body1'
										color='error'
										align='center'
										paragraph
									>
										There is no tasks
									</Typography>
								) : (
									''
								)}
								<form
									noValidate
									onSubmit={handleSubmit(sendSolution)}
								>
									<div>
										{homework.tasks.map((task, index) => {
											return (
												<Task
													taskIndex={index}
													task={task}
												/>
											);
										})}
									</div>
									<Button
										type='submit'
										fullWidth
										variant='contained'
										color='primary'
										className={classes.sendHomework}
									>
										Send Homework
									</Button>
								</form>
							</div>
						</Container>
					</div>
				</main>
				{/* Footer */}
				<footer className={classes.footer}>
					<Copyright />
				</footer>
				{/* End footer */}
			</React.Fragment>
        );
	return '';
};
Homework = reduxForm({ form: 'homeworkForm' })(Homework);

const mapStateToProps = (state) => {
	const {
		homework,
		gettingHomework,
		firstAttempt,
		sendingSolution,
		solutionSended,
	} = state.homeworkReducer;
	return {
		homework,
		gettingHomework,
		firstAttempt,
		sendingSolution,
		solutionSended,
	};
};

const actionCreators = {
	getHomework: homeworkActions.getHomework,
	sendSolution: homeworkActions.sendSolution,
	clearHomeworkList: homeworkListActions.clearHomeworkList,
};

export default connect(mapStateToProps, actionCreators)(Homework);
