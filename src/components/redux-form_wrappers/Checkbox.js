import Checkbox from '@mui/material/Checkbox';
import createComponent from './createComponent';

export default createComponent(
  Checkbox,
  ({
    input: { onChange, value, ...inputProps },
    meta,
    onCheck,
    defaultChecked,
    ...props
  }) => ({
    ...inputProps,
    ...props,
    checked: value ? true : false,
    onChange: (event, isInputChecked) => {
      onChange(isInputChecked);
      if (onCheck) {
        onCheck(isInputChecked);
      }
    },
  })
);
