import React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AttachmentIcon from '@mui/icons-material/Attachment';
import config from '../config';
import Link from '@mui/material/Link';

export default function AttachmentPanel(props) {
  let attachmentHref = config.API_URL + '/api/upload_files/' + props.reference;
  return (
    <Card variant='outlined'>
      <div>
        <AttachmentIcon fontSize='large' />
      </div>
      <div>
        <Link href={attachmentHref}>
          <Typography variant='body1' align='center' color='textSecondary'>
            {props.name}
          </Typography>
        </Link>
      </div>
    </Card>
  );
}
