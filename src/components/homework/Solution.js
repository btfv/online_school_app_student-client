import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { solutionActions } from '../../redux/actions/solutionActions';
import { CircularProgress } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Copyright from '../Copyright';
import AttachmentPanel from './AttachmentPanel';
import TaskWithAnswer from './TaskWithAnswer';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import TeacherInfoBox from './TeacherInfoBox';

let Solution = (props) => {
  const { solutionData, gettingSolution, getSolution } = props;
  const { homeworkPublicId, solutionPublicId } = props.match.params;

  if (!solutionData && !gettingSolution) {
    getSolution(homeworkPublicId, solutionPublicId);
  }
  if (solutionData) {
    const { solution, homework } = solutionData;
    return (
      <React.Fragment>
        <CssBaseline />
        <main>
          {/* Hero unit */}
          <div>
            <div>
              <IconButton
                component={Link}
                to='/dashboard/solutions'
                size='large'
              >
                <ArrowBackIosIcon fontSize='large' />
              </IconButton>
            </div>
            <Container maxWidth='sm'>
              <div>
                <Typography
                  variant='h6'
                  align='center'
                  color='textSecondary'
                  paragraph
                >
                  {homework.subject}
                </Typography>
              </div>
              <div>
                <Typography
                  component='h2'
                  variant='h3'
                  align='center'
                  color='textPrimary'
                  gutterBottom
                >
                  {homework.title}
                </Typography>
              </div>
              <div>
                <Typography
                  variant='h5'
                  align='center'
                  color='textSecondary'
                  paragraph
                >
                  {homework.description}
                </Typography>
              </div>
              <div>
                <TeacherInfoBox
                  profile={homework.creatorInfo}
                  text='Homework created by'
                />
              </div>
              <div>
                <TeacherInfoBox
                  profile={solution.checkedByInfo}
                  text='Solution reviewed by'
                />
              </div>
              <div>
                {homework.attachments.map((attachment) => {
                  return (
                    <AttachmentPanel
                      name={attachment.name}
                      reference={attachment.reference}
                    />
                  );
                })}
              </div>
              <div>
                <Typography variant='h4' align='center' paragraph>
                  Tasks
                </Typography>
                {homework.tasks.map((task, index) => {
                  const answer = solution.answers.filter((answer) => {
                    return task.publicId == answer.taskPublicId;
                  })[0];
                  return (
                    <TaskWithAnswer
                      taskIndex={index}
                      task={task}
                      answer={answer}
                    />
                  );
                })}
              </div>
              <Typography variant='h6' align='center' paragraph>
                Totally you get {solution.totalPoints}/
                {homework.homeworkMaxPoints} points for this homework
              </Typography>
            </Container>
          </div>
        </main>
        {/* Footer */}
        <footer>
          <Copyright />
        </footer>
        {/* End footer */}
      </React.Fragment>
    );
  }
  return <CircularProgress />;
};

const mapStateToProps = (state) => {
  const { solutionData, gettingSolution } = state.solutionReducer;
  return {
    solutionData,
    gettingSolution,
  };
};

const actionCreators = {
  getSolution: solutionActions.getSolution,
};

export default connect(mapStateToProps, actionCreators)(Solution);
