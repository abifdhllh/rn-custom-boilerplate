import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

// ========= Types & Actions ========= //
const {Types, Creators} = createActions({
  // Get Sample News Action
  getSampleNewsRequest: ['param'],
  getSampleNewsSuccess: ['payload'],
  getSampleNewsFailure: ['error'],
});
export const SampleTypes = Types;
export default Creators;

// ========= Initial State ========= //
const INITIAL_STATE = Immutable({
  sampleNews: [],
  loading: false,
  error: null,
});

// ========= Selectors ========= //
export const SampleSelectors = {
  getSampleNews: (state) => state.sample.sampleNews,
  getLoading: (state) => state.sample.loading,
};

// ========= Reducers ========= //
const reducerGetSampleNewsRequest = (state, {param}) => {
  return {
    ...state,
    loading: true,
    sampleNews: [],
  };
};
const reducerGetSampleNewsSuccess = (state, {payload}) => {
  return {
    ...state,
    loading: false,
    sampleNews: payload,
  };
};
const reducerGetSampleNewsFailure = (state, {error}) => {
  return {...state, loading: false, error};
};
// ========= Reducers ========= //

// ========= Hook Reducer to Types ========= //
export const reducer = createReducer(INITIAL_STATE, {
  // Get Sample News Reducer
  [Types.GET_SAMPLE_NEWS_REQUEST]: reducerGetSampleNewsRequest,
  [Types.GET_SAMPLE_NEWS_SUCCESS]: reducerGetSampleNewsSuccess,
  [Types.GET_SAMPLE_NEWS_FAILURE]: reducerGetSampleNewsFailure,
});
