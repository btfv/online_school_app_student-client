import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { homeworkActions } from '../../redux/actions/homeworkActions';
import { CircularProgress, Fab } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Copyright from '../Copyright';
import AttachmentPanel from './AttachmentPanel';
import Task from './Task';
import { reduxForm, FieldArray, Field } from 'redux-form';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link, useParams } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
import { homeworkListActions } from '../../redux/actions/homeworkListActions';
import TeacherInfoBox from './TeacherInfoBox';
import NotFound from '../NotFound';
import Box from '@mui/material/Box';
import MainContainerStyles from '../../styles/container';

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
  const { publicId } = useParams();

  if (!publicId) {
    return <NotFound />;
  }

  if (solutionSended) {
    clearHomeworkList();
  }
  if (!gettingHomework && !homework && !solutionSended) {
    getHomework(publicId);
    return (
      <div>
        <div>
          <CircularProgress />
        </div>
      </div>
    );
  }
  if (gettingHomework || sendingSolution) {
    return (
      <div>
        <div>
          <CircularProgress />
        </div>
      </div>
    );
  }
  if (homework)
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth='md' sx={MainContainerStyles}>
          <Box sx={{ m: 2 }}>
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
            <TeacherInfoBox
              profile={homework.creatorInfo}
              text='Homework created by'
            />
            <Box>
              {homework.attachments.map((attachment) => {
                return (
                  <AttachmentPanel
                    name={attachment.name}
                    reference={attachment.reference}
                  />
                );
              })}
            </Box>
          </Box>
          <Box sx={{ m: 2 }}>
            <Typography variant='h4' align='center'>
              Tasks
            </Typography>
            {!homework.tasks || homework.tasks.length == 0 ? (
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
            <Box
              component='form'
              noValidate
              onSubmit={handleSubmit(sendSolution)}
              sx={{ m: 1 }}
            >
              <div>
                {homework.tasks.map((task, index) => {
                  return <Task taskIndex={index} task={task} />;
                })}
              </div>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
              >
                Send Homework
              </Button>
            </Box>
          </Box>
        </Container>
        <Copyright />
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
