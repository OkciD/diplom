import { call, put, takeLatest, select } from 'redux-saga/effects';
import { ActionTypes } from './';
import { StoreState } from '../index';
import { selectBodyPartAction } from '../bodyParts';
import { loadSymptomsSaga } from '../symptoms';

function * routeSaga(): any {
	const { route, params } = yield select<SelectFn<StoreState>>(({ routing }: StoreState) => routing.currentRoute);

	switch (route) {
		case 'SymptomsSelector':
			yield call(initSymptomsSelector, params);
			return;
	}
}

// TODO: refactor
function * initSymptomsSelector(params: { chosenBodyPartId: number }): any {
	const { chosenBodyPartId } = params;

	yield put(selectBodyPartAction({ bodyPartId: params.chosenBodyPartId }));
	yield call(loadSymptomsSaga, chosenBodyPartId);
}

export default function * routingRootSaga(): any {
	yield takeLatest(ActionTypes.Route, routeSaga);
}
