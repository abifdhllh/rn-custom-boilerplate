import {takeLatest, all} from 'redux-saga/effects';

// Types
import {SampleTypes} from 'shared-state/reducers/sample';

// Sagas
import {sagaGetSampleNews} from 'shared-state/sagas/sample';

// Connect Types to Sagas
export default function* rootSagas() {
  yield all([
    takeLatest(SampleTypes.GET_SAMPLE_NEWS_REQUEST, sagaGetSampleNews),
  ]);
}
