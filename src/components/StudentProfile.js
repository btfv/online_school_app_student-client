import React, { useState } from 'react';
import { CssBaseline, Typography, Container, Button } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import BackLink from './BackLink';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { userActions } from '../redux/actions/userActions';
import TextField from './redux-form_wrappers/TextField';

const THIS_FORM_NAME = 'changePasswordForm';

const useStyles = makeStyles((theme) => ({
	heroContent: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(2, 0, 6),
	},
	formFields: {
		margin: theme.spacing(2),
	},
	formSymbitButton: {
		minWidth: 200,
	},
}));

const validate = (values) => {
	const errors = {};
	if (values.newPassword !== values.newPasswordRepeat) {
		errors.newPasswordRepeat = 'Values are different!';
	}
	return errors;
};

let StudentProfile = (props) => {
	const { history, handleSubmit, changePassword, error } = props;
	const classes = useStyles();
	const student = JSON.parse(localStorage.getItem('user'));
	return (
		<React.Fragment>
			<CssBaseline />
			<main>
				<div className={classes.heroContent}>
					<BackLink history={history} />
					<Container maxWidth='sm'>
						<Typography
							component='h2'
							variant='h3'
							align='center'
							color='textPrimary'
							gutterBottom
						>
							Student Profile
						</Typography>
						<div>
							<Typography
								variant='h6'
								align='center'
								color='textPrimary'
								gutterBottom
							>
								Your name
							</Typography>
							<Typography
								variant='body1'
								align='center'
								color='textPrimary'
								gutterBottom
							>
								{student.name}
							</Typography>
						</div>

						<div>
							<Typography
								variant='h6'
								align='center'
								color='textPrimary'
								gutterBottom
							>
								Change Password
							</Typography>
							<form onSubmit={handleSubmit(changePassword)}>
								<div className={classes.formFields}>
									<Field
										required
										type='password'
										name='oldPassword'
										component={TextField}
										label='Current Password'
										variant='outlined'
									/>
								</div>
								<div className={classes.formFields}>
									<Field
										required
										type='password'
										name='newPassword'
										component={TextField}
										label='New Password'
										variant='outlined'
									/>
								</div>
								<div className={classes.formFields}>
									<Field
										required
										type='password'
										name='newPasswordRepeat'
										component={TextField}
										label='New Password Again'
										variant='outlined'
									/>
								</div>
								<div className={classes.formFields}>
									<Button
										type='submit'
										variant='contained'
										color='primary'
										className={classes.formSymbitButton}
									>
										Change Password
									</Button>
								</div>
							</form>
						</div>
					</Container>
				</div>
			</main>
		</React.Fragment>
	);
};
StudentProfile = reduxForm({ form: THIS_FORM_NAME, validate })(StudentProfile);

const mapStateToProps = (state) => {
	const { changingPassword } = state.authReducer;
	return { changingPassword };
};

const actionCreators = {
	changePassword: userActions.changePassword,
};

export default connect(mapStateToProps, actionCreators)(StudentProfile);
