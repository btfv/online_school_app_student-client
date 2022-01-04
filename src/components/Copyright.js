import React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Copyright() {
  return (
    <Container sx={{ mb: 4, mt: 4 }}>
      <Typography variant='body2' color='textSecondary'>
        {'Copyright © '}
        {'Online School App '}
        {new Date().getFullYear()}
        {'. Alpha version.'}
      </Typography>
    </Container>
  );
}
