import React from 'react';

import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Field } from 'redux-form';
import TextField from './redux-form_wrappers/TextField';
import Checkbox from './redux-form_wrappers/Checkbox';

const Task = (props) => {
  const { task, taskIndex } = props;

  const optionsForm = (options) => {
    return (
      <FormControl required component='fieldset'>
        <FormGroup>
          {options.map((option, index) => {
            const checkboxName = task.publicId + '.' + index;
            return (
              <FormControlLabel
                control={
                  <Field
                    component={Checkbox}
                    name={checkboxName}
                    type='checkbox'
                  />
                }
                label={option}
              />
            );
          })}
        </FormGroup>
      </FormControl>
    );
  };

  const stringAnswerForm = () => {
    return (
      <Field
        name={task.publicId}
        id='outlined-basic'
        label='Answer'
        variant='outlined'
        component={TextField}
      />
    );
  };

  const bigAnswerForm = () => {
    return (
      <Field
        name={task.publicId}
        id='outlined-basic'
        label='Answer'
        variant='outlined'
        multiline
        component={TextField}
      />
    );
  };

  return (
    <React.Fragment>
      <Typography variant='h6'>Task #{taskIndex + 1}</Typography>
      <Typography variant='body1'>{task.condition}</Typography>
      {(function () {
        switch (task.taskType) {
          case 1:
            return optionsForm(task.optionLabels);
          case 2:
            return stringAnswerForm();
          case 3:
            return bigAnswerForm();
          default:
            return ' ';
        }
      })()}
    </React.Fragment>
  );
};

export default Task;
