export default interface BodyPartsState {
	chosenBodyPart: {
		id: number | null;
		name?: string
	};
	gender: 'male' | 'female'; // пол
	position: 'front' | 'back'; // положение модели человека (спереди/сзади)
}

export interface ChooseBodyPartPayload {
	bodyPartId: number | null;
}

export interface SetChosenBodyPartNamePayload {
	name: string;
}

export interface SetGenderPayload {
	gender: BodyPartsState['gender'];
}
