import { all } from 'redux-saga/effects';

import salao from '../modules/Salao/sagas';

export default function* rootSaga() {
    return yield all([salao]);
}