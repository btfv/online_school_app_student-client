import React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      {'Online School App '}
      {new Date().getFullYear()}
      {'. Alpha version.'}
    </Typography>
  );
}
