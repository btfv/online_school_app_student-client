import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import HomeworkCard from './HomeworkCard';
import { connect } from 'react-redux';
import { homeworkListActions } from '../../redux/actions/homeworkListActions';
import { CircularProgress } from '@mui/material';

const HomeworksList = (props) => {
  const {
    homeworkPreviews,
    loadingHomeworkPreviews,
    loadedHomeworkPreviews,
    getListOfHomeworks,
  } = props;
  if (!loadingHomeworkPreviews && !loadedHomeworkPreviews) {
    getListOfHomeworks(0);
  }
  if (loadingHomeworkPreviews) {
    return (
      <div>
        <div>
          <CircularProgress />
        </div>
      </div>
    );
  }
  if (loadedHomeworkPreviews) {
    const homeworks = homeworkPreviews.map((preview, index) => {
      return (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <HomeworkCard
            title={preview.title}
            description={preview.description}
            homeworkPublicId={preview.homeworkPublicId}
            subject={preview.subject}
            hasSolution={preview.hasSolution}
            solutionPublicId={preview.solutionPublicId}
            creatorName={preview.creatorName}
            creatorPublicId={preview.creatorPublicId}
            isChecked={preview.isChecked}
          />
        </Grid>
      );
    });
    return (
      <Container sx={{ py: 8 }} maxWidth='md'>
        <Grid container spacing={4}>
          {homeworks}
        </Grid>
      </Container>
    );
  }
  return <div></div>;
};

const mapStateToProps = (state) => {
  const { homeworkPreviews, loadedHomeworkPreviews, loadingHomeworkPreviews } =
    state.homeworkListReducer;
  return {
    homeworkPreviews,
    loadedHomeworkPreviews,
    loadingHomeworkPreviews,
  };
};

const actionCreators = {
  getListOfHomeworks: homeworkListActions.getListOfHomeworks,
};

export default connect(mapStateToProps, actionCreators)(HomeworksList);
