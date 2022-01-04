import React from 'react';
import { IconButton } from '@mui/material';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function BackLink(props) {
  const { history } = props;

  return (
    <div>
      <IconButton
        onClick={() => {
          history.goBack();
        }}
        size='large'
      >
        <ArrowBackIosIcon fontSize='large' />
      </IconButton>
    </div>
  );
}
