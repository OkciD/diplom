import { call, put, takeLatest } from 'redux-saga/effects';
import { Action } from 'redux-actions';
import { ActionTypes, ChooseBodyPartPayload, getBodyPartName, setChosenBodyPartNameAction } from './';

/**
 * Достёт имя выбранной части тела из базы и кладёт в стор
 * @return {IterableIterator<any>}
 */
function * chooseBodyPartSaga(action: Action<ChooseBodyPartPayload>): any {
	const { bodyPartId } = action.payload!;
	const bodyPartName: string = yield call(getBodyPartName, bodyPartId!);

	if (bodyPartName) {
		yield put(setChosenBodyPartNameAction({ name: bodyPartName }));
	}
}

export default function * bodyPartsRootSaga(): any {
	yield takeLatest(ActionTypes.ChooseBodyPart, chooseBodyPartSaga);
}
