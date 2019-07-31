import * as React from 'react';
import { Button, Icon } from 'native-base';
import { StoreState } from '../../modules/index';
import { Dispatch } from 'redux';
import { BodyPartsState, setGenderAction } from '../../modules/bodyParts';
import { Router } from 'react-native-easy-router';

type RenderFunction = (state: StoreState, dispatch: Dispatch, router: Router) => React.ReactElement;

interface HeaderContents {
	[route: string]: Partial<{
		title: string;
		back: boolean;
		renderLeft: RenderFunction;
		renderRight: RenderFunction;
	}>;
}

const renderBackButton: RenderFunction = (state: StoreState, dispatch: Dispatch, router: Router) => (
	<Button transparent>
		<Icon
			type="MaterialCommunityIcons"
			name="arrow-left"
			onPress={() => router.pop() }
		/>
	</Button>
);

const headerContents: HeaderContents = {
	BodyPartSelector: {
		renderLeft: (state: StoreState, dispatch: Dispatch, router: Router) => (
			<Button transparent>
				<Icon
					type="MaterialCommunityIcons"
					name="account"
					onPress={() => router.push.Counter({}, { type: 'top' })}
				/>
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
	},
	SymptomsSelector: {
		title: 'Выбор симптомов', // TODO: название выбранной части тела
		renderLeft: renderBackButton
	}
};

export default headerContents;
