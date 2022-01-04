import React, { useEffect } from 'react';

import HomeworkCard from './HomeworkCard';
import { connect } from 'react-redux';
import { homeworkListActions } from '../redux/actions/homeworkListActions';
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
    const homeworks = homeworkPreviews.map((preview) => {
      return (
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
      );
    });
    return <div>{homeworks}</div>;
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
