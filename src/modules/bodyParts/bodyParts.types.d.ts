export default interface BodyPartsState {
	selectedBodyPartId: number | null;
	gender: 'male' | 'female';
	position: 'front' | 'back';
}

export interface SelectBodyPartPayload {
	bodyPartId: number;
}

export interface SetGenderPayload {
	gender: BodyPartsState['gender'];
}
