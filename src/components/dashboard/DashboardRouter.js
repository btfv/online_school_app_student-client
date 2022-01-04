import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import StudentProfile from '../profile/StudentProfile';
import HomeworksList from './HomeworksList';
import Homework from '../homework/Homework';
import Solution from '../homework/Solution';

export default function DashboardRouter() {
  return (
    <Routes>
      <Route path='homeworks' element={<HomeworksList />} />
      <Route path='homework/'>
        <Route path=':publicId' element={<Homework />} />
        <Route
          path=':homeworkPublicId/solution/:solutionPublicId'
          element={<Solution />}
        />
      </Route>

      <Route path='profile' element={<StudentProfile />} />
      <Route path='*' render={() => <Navigate to='homeworks' />} />
    </Routes>
  );
}
