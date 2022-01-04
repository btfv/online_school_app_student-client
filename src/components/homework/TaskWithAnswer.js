import React from 'react';

import withStyles from '@mui/styles/withStyles';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';

const WrongAnswerCheckbox = withStyles({
  root: {
    color: '#ff1744',
    '&$checked': {
      color: '#ff1744',
    },
  },
  checked: {},
})((props) => <Checkbox color='default' {...props} />);

const RightAnswerCheckbox = withStyles({
  root: {
    color: '#4caf50',
    '&$checked': {
      color: '#4caf50',
    },
  },
  checked: {},
})((props) => <Checkbox color='default' {...props} />);

const TaskWithAnswer = (props) => {
  const { task, taskIndex, answer } = props;

  var optionsForm = (optionLabels, studentAnswers, rightAnswers) => {
    return optionLabels.map((option, index) => {
      return (
        <FormControlLabel
          control={(() => {
            if (rightAnswers[index] !== Boolean(studentAnswers[index])) {
              return <WrongAnswerCheckbox checked={rightAnswers[index]} />;
            } else {
              return <RightAnswerCheckbox checked={rightAnswers[index]} />;
            }
          })()}
          label={option}
        />
      );
    });
  };

  let stringAnswerForm = (rightAnswer, userAnswer) => {
    return (
      <React.Fragment>
        <TextField
          label='Right answer'
          color='primary'
          value={rightAnswer}
          variant='outlined'
        />
        <TextField
          label='Your answer'
          color='primary'
          value={userAnswer}
          variant='outlined'
        />
      </React.Fragment>
    );
  };

  let detailedAnswerForm = (studentAnswer) => {
    return (
      <TextField
        label='Your answer'
        color='primary'
        value={studentAnswer}
        variant='outlined'
        multiline
      />
    );
  };
  return (
    <div>
      <Typography variant='h6'>Task #{taskIndex + 1}</Typography>
      <Typography variant='body1'>{task.condition}</Typography>
      <FormGroup>
        {(() => {
          switch (task.taskType) {
            case 1:
              return optionsForm(
                task.optionLabels,
                answer.optionAnswers,
                task.optionAnswers
              );
            case 2:
              return stringAnswerForm(task.stringAnswer, answer.stringAnswer);
            case 3:
              return detailedAnswerForm(answer.detailedAnswer);
          }
        })()}
      </FormGroup>
      <div>
        <Typography variant='body1'>
          You get <b>{answer.points + '/' + task.maxPoints}</b> points
        </Typography>
      </div>
    </div>
  );
};

export default TaskWithAnswer;
