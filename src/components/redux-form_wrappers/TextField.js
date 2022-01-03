import { TextField } from '@mui/material';
import createComponent from './createComponent';
import mapError from './mapError';

export default createComponent(TextField, ({ defaultValue, ...props }) =>
  mapError(props)
);
