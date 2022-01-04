import React, { useState } from 'react';
import { CssBaseline, Typography, Container, Button } from '@mui/material';

import BackLink from '../BackLink';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { userActions } from '../../redux/actions/userActions';
import TextField from '../redux-form_wrappers/TextField';
import MainContainerStyles from '../../styles/container';
import Box from '@mui/material/Box';

const THIS_FORM_NAME = 'changePasswordForm';

const validate = (values) => {
  const errors = {};
  if (values.newPassword !== values.newPasswordRepeat) {
    errors.newPasswordRepeat = 'Values are different!';
  }
  return errors;
};

let StudentProfile = (props) => {
  const { handleSubmit, changePassword } = props;

  const student = JSON.parse(localStorage.getItem('user'));
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='md' sx={MainContainerStyles}>
        <Typography
          component='h2'
          variant='h3'
          align='center'
          color='textPrimary'
          gutterBottom
        >
          Student Profile
        </Typography>
        <Box sx={{ mb: 2 }}>
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
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography
            variant='h6'
            align='center'
            color='textPrimary'
            gutterBottom
          >
            Change Password
          </Typography>
          <Box component='form' onSubmit={handleSubmit(changePassword)}>
            <Box sx={{ mb: 1 }}>
              <Field
                required
                type='password'
                name='oldPassword'
                component={TextField}
                label='Current Password'
                variant='outlined'
              />
            </Box>
            <Box sx={{ mb: 1 }}>
              <Field
                required
                type='password'
                name='newPassword'
                component={TextField}
                label='New Password'
                variant='outlined'
              />
            </Box>
            <Box sx={{ mb: 1 }}>
              <Field
                required
                type='password'
                name='newPasswordRepeat'
                component={TextField}
                label='New Password Again'
                variant='outlined'
              />
            </Box>
            <Box sx={{ mb: 1 }}>
              <Button type='submit' variant='contained' color='primary'>
                Change Password
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
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
