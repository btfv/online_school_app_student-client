import React from 'react';
import { IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Box from '@mui/material/Box';

export default function BackLink(props) {
  const { onClick } = props;
  return (
    <Box position='absolute' float='left' sx={{ ml: 4, mt: 4 }}>
      <IconButton onClick={onClick} size='large'>
        <ArrowBackIosIcon fontSize='large' />
      </IconButton>
    </Box>
  );
}
