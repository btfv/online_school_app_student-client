import { Avatar, Box, Typography, Container } from '@mui/material';

import React from 'react';
import config from '../../config';

const TeacherInfoBox = function (props) {
  const { profile, text } = props;

  return (
    <Box
      border={2}
      borderColor='text.secondary'
      borderRadius='16px'
      display={'inline-flex'}
      alignItems={'center'}
      sx={{ padding: 1 }}
    >
      <Avatar
        sx={{ float: 'left' }}
        src={config.API_URL + '/api/get_avatar/' + profile.profilePictureRef}
      />
      <Container sx={{ float: 'right' }}>
        <Typography variant='subtitle2'>{text}</Typography>
        <Typography variant='h5' color='textSecondary'>
          {profile.firstname + ' ' + profile.lastname}
        </Typography>
      </Container>
    </Box>
  );
};

export default TeacherInfoBox;
