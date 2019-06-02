import * as React from 'react';
import { Button, Icon, Segment, Text } from 'native-base';
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
		renderBody: RenderFunction;
		renderRight: RenderFunction;
	}>;
}

const renderBackButton: RenderFunction = (state: StoreState, dispatch: Dispatch, router: Router) => (
	<Button transparent>
		<Icon
			type="MaterialCommunityIcons"
			name="arrow-left"
			onPress={() => router.pop()}
		/>
	</Button>
);

const BodyPartSelector = {
	renderLeft: (state: StoreState, dispatch: Dispatch, router: Router) => (
		<Button transparent>
			<Icon
				type="MaterialCommunityIcons"
				name="account"
				onPress={() => router.push.Counter({}, { type: 'top' })}
			/>
		</Button>
	),
	renderBody: (state: StoreState, dispatch: Dispatch, router: Router) => {
		return (
			<Segment>
				<Button
					first
					onPress={() => router.push.SymptomSearch({}, { type: 'left' })}
				>
					<Text>Поиск</Text>
				</Button>
				<Button last active>
					<Text>Часть тела</Text>
				</Button>
			</Segment>
		);
	},
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
};

const headerContents: HeaderContents = {
	BodyPartSelector,
	Counter: {
		title: 'Счётчик',
		renderLeft: renderBackButton
	},
	// TODO: параметризовать renderBody у BodyPartSelector и звать его с bind
	SymptomSearch: {
		...BodyPartSelector,
		renderBody: (state: StoreState, dispatch: Dispatch, router: Router) => {
			return (
				<Segment>
					<Button first active>
						<Text>Поиск</Text>
					</Button>
					<Button
						last
						onPress={() => router.push.BodyPartSelector({}, { type: 'right' })}
					>
						<Text>Часть тела</Text>
					</Button>
				</Segment>
			);
		}
	},
	Survey: {
		title: 'Опрос',
		renderLeft: renderBackButton
	}
};

export default headerContents;
