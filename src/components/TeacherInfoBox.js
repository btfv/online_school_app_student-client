import { Avatar, Box, Typography } from '@mui/material';

import React from 'react';
import config from '../config';

const TeacherInfoBox = function (props) {
  const { profile, text } = props;

  return (
    <Box border={2} borderColor='text.secondary' borderRadius='16px'>
      <div>
        <Avatar
          src={config.API_URL + '/api/get_avatar/' + profile.profilePictureRef}
        />
      </div>
      <div>
        <Typography variant='subtitle1'>{text}</Typography>
        <Typography variant='h5' align='center' color='textSecondary' paragraph>
          {profile.firstname + ' ' + profile.lastname}
        </Typography>
      </div>
    </Box>
  );
};

export default TeacherInfoBox;
