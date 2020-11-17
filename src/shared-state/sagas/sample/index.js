import {call, put} from 'redux-saga/effects';
import SampleActions from 'shared-state/reducers/sample';
import {apiGetSampleNews} from 'utils/Api';

export function* sagaGetSampleNews({param}) {
  const response = yield call(apiGetSampleNews, param);

  if (response.status >= 200 && response.status < 300) {
    yield put(SampleActions.getSampleNewsSuccess(response));
  } else {
    yield put(SampleActions.getSampleNewsFailure(response));
  }
}
