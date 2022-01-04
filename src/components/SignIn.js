import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from './redux-form_wrappers/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Copyright from './Copyright';
import Link from '@mui/material/Link';
import { Field, reduxForm } from 'redux-form';
import { userActions } from '../redux/actions/userActions';
import { connect } from 'react-redux';

let SignIn = (props) => {
  const { handleSubmit, loggingIn } = props;

  return (
    <React.Fragment>
      <Backdrop open={loggingIn}>
        <CircularProgress color='inherit' />
      </Backdrop>
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
            Sign in
          </Typography>
          <Box
            component='form'
            noValidate
            onSubmit={handleSubmit(props.login)}
            sx={{ mt: 1 }}
          >
            <Field
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='username'
              label='Username'
              name='username'
              autoComplete='username'
              autoFocus
              component={TextField}
            />
            <Field
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              component={TextField}
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>

            {/* <Grid container>
              <Grid item xs>
                <Typography variant='body2'>Login: root</Typography>
              </Grid>
              <Grid item xs>
                <Typography variant='body2'>Password: 12345</Typography>
              </Grid>
            </Grid> */}
            <Grid container>
              <Grid item xs>
                <Link href='#' variant='body2'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href='#' variant='body2'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    loggingIn: state.authReducer.loggingIn,
    error: state.authReducer.error,
  };
};
const actionCreators = {
  login: userActions.login,
};

SignIn = reduxForm({
  form: 'signInForm',
})(SignIn);
SignIn = connect(mapStateToProps, actionCreators)(SignIn);
export default SignIn;
