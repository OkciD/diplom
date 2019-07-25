export default interface BodyPartsState {
	chosenBodyPartId: number | null; // id части тела, для которой показан список симптомов (после клика на неё)
	// selectedBodyPartsIds: number[]; // id частей тела, симптомы которых значатся среди выбранных
	gender: 'male' | 'female'; // пол
	position: 'front' | 'back'; // положение модели человека (спереди/сзади)
}

export interface ChooseBodyPartPayload {
	bodyPartId: BodyPartsState['chosenBodyPartId'];
}

export interface SetGenderPayload {
	gender: BodyPartsState['gender'];
}
