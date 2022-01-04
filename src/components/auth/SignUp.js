import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '../redux-form_wrappers/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '../redux-form_wrappers/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CustomLink from '../CustomLink';
import Copyright from '../Copyright';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { userActions } from '../../redux/actions/userActions';

var SignUp = (props) => {
  const { handleSubmit, signup } = props;

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <Box component='form' onSubmit={handleSubmit(signup)} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Field
                autoComplete='given-name'
                name='firstname'
                required
                fullWidth
                id='firstName'
                label='First Name'
                autoFocus
                component={TextField}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                required
                fullWidth
                id='lastName'
                label='Last Name'
                name='lastname'
                autoComplete='family-name'
                component={TextField}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                name='age'
                required
                fullWidth
                id='age'
                label='Age'
                type='number'
                step={1}
                min='6'
                component={TextField}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                autoComplete='given-name'
                name='username'
                required
                fullWidth
                id='userName'
                label='User Name'
                component={TextField}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                component={TextField}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='new-password'
                component={TextField}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Field
                    value='allowExtraEmails'
                    color='primary'
                    name='allowEmail'
                    component={Checkbox}
                  />
                }
                label='I want to receive inspiration, marketing promotions and updates via email.'
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <CustomLink to='/signin' variant='body2'>
                Already have an account? Sign in
              </CustomLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
};
SignUp = reduxForm({
  form: 'signUpForm',
})(SignUp);

const actionCreators = {
  signup: userActions.signup,
};

SignUp = connect(() => ({}), actionCreators)(SignUp);
export default SignUp;
