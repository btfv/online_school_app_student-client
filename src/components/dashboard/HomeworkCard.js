import React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function HomeworkCard(props) {
  const {
    title,
    description,
    solutionPublicId,
    homeworkPublicId,
    subject,
    creatorName,
    creatorPublicId,
  } = props;
  const hasSolution = Boolean(props.hasSolution);
  const isChecked = Boolean(props.isChecked);
  const homeworkHref = !hasSolution
    ? '/dashboard/homework/' + homeworkPublicId
    : '/dashboard/homework/' +
      homeworkPublicId +
      '/solution/' +
      solutionPublicId;

  return (
    <Card
      variant='outlined'
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography color='textSecondary' gutterBottom>
          {subject}
        </Typography>
        <Typography variant='h5' component='h2'>
          {title}
        </Typography>
        <Typography color='textSecondary'>by {creatorName}</Typography>
        <Typography variant='body2' component='p'>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size='small'
          component={Link}
          to={homeworkHref}
          disabled={hasSolution && !isChecked}
        >
          {hasSolution && !isChecked
            ? 'Checking...'
            : 'Open ' + (hasSolution ? 'Solution' : 'Homework')}
        </Button>
      </CardActions>
    </Card>
  );
}
