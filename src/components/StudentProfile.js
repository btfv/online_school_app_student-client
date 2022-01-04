import React, { useState } from 'react';
import { CssBaseline, Typography, Container, Button } from '@mui/material';

import BackLink from './BackLink';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { userActions } from '../redux/actions/userActions';
import TextField from './redux-form_wrappers/TextField';

const THIS_FORM_NAME = 'changePasswordForm';

const validate = (values) => {
  const errors = {};
  if (values.newPassword !== values.newPasswordRepeat) {
    errors.newPasswordRepeat = 'Values are different!';
  }
  return errors;
};

let StudentProfile = (props) => {
  const { history, handleSubmit, changePassword, error } = props;

  const student = JSON.parse(localStorage.getItem('user'));
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div>
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
                <div>
                  <Field
                    required
                    type='password'
                    name='oldPassword'
                    component={TextField}
                    label='Current Password'
                    variant='outlined'
                  />
                </div>
                <div>
                  <Field
                    required
                    type='password'
                    name='newPassword'
                    component={TextField}
                    label='New Password'
                    variant='outlined'
                  />
                </div>
                <div>
                  <Field
                    required
                    type='password'
                    name='newPasswordRepeat'
                    component={TextField}
                    label='New Password Again'
                    variant='outlined'
                  />
                </div>
                <div>
                  <Button type='submit' variant='contained' color='primary'>
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
