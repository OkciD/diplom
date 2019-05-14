import * as React from 'react';
import { Button, Icon } from 'native-base';
import { StoreState } from '../../modules/index';
import { Dispatch } from 'redux';
import { BodyPartsState, setGenderAction } from '../../modules/bodyParts';

type RenderFunction = (state: StoreState, dispatch: Dispatch) => React.ReactElement;

interface HeaderContents {
	[route: string]: Partial<{
		title: string;
		back: boolean;
		renderLeft: RenderFunction;
		renderRight: RenderFunction;
	}>;
}

const headerContents: HeaderContents = {
	BodyPartSelector: {
		renderLeft: () => (
			<Button transparent>
				<Icon type="MaterialCommunityIcons" name="account" />
			</Button>
		),
		renderRight: ({ bodyParts }: StoreState, dispatch: Dispatch) => {
			const oppositeGender: BodyPartsState['gender'] = (bodyParts.gender === 'male') ? 'female' : 'male';

			return (
				<Button transparent>
					<Icon
						type="MaterialCommunityIcons"
						name={`gender-${oppositeGender}`}
						onPress={() => dispatch(setGenderAction({ gender: oppositeGender }))}
					/>
				</Button>
			);
		}
	}
};

export default headerContents;
