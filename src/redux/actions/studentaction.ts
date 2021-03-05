import {FETCH_STUDENTS} from './types';
import {getStudents} from '../../data';
export const fetchStudents = () => (dispatch) => {
  const students = getStudents();
  dispatch({
    type: FETCH_STUDENTS,
    payload: students,
  });
};
