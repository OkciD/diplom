import * as React from 'react';
import { BodyPartsState, selectBodyPartAction, switchPositionAction } from '../../modules/bodyParts';
import { connect } from 'react-redux';
import { StoreState } from '../../modules/index';
import { Dispatch } from 'redux';
import { HumanBody } from '../../components/HumanBody';
import { View, Fab, Icon } from 'native-base';
import styles from './BodyPartSelector.styles';
import { RotateButton } from '../../components/RotateButton';
// @ts-ignore
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import { RouterProps } from '../Router';

interface OwnProps {

}

interface StoreProps extends BodyPartsState {

}

interface DispatchProps {
	selectBodyPart: (bodyPartId: number) => void;
	rotate: () => void;
}

type Props = OwnProps & StoreProps & DispatchProps & RouterProps;

class BodyPartSelector extends React.Component<Props> {
	private readonly gestureRecognizerConfig = {
		velocityThreshold: 0.3,
		directionalOffsetThreshold: 80
	};

	private readonly onSwipe = (gestureName: string) => {
		const { SWIPE_RIGHT } = swipeDirections;
		const { router } = this.props;

		switch (gestureName) {
			case SWIPE_RIGHT: {
				router.push.SymptomSearch({}, { type: 'left' });
				return;
			}
			default: {
				return;
			}
		}
	};

	private readonly onFabPress = () => {
		this.props.router.push.Counter({}, { type: 'right' });
	};

	public render(): React.ReactElement | null {
		const { selectedBodyPartId, gender, position, selectBodyPart, rotate } = this.props;

		return (
			<GestureRecognizer config={this.gestureRecognizerConfig} onSwipe={this.onSwipe}>
				<View style={styles.container}>
					<HumanBody
						selectedBodyPartId={selectedBodyPartId}
						gender={gender}
						position={position}
						onBodyPartPress={selectBodyPart}
					/>
					<View style={styles.rotateButtonContainer}>
						<RotateButton onPress={rotate}/>
					</View>
					{/* TODO: render if at least one symptom is selected */}
					<Fab position="bottomRight" style={styles.fab} onPress={this.onFabPress}>
						<Icon
							type="MaterialCommunityIcons"
							name="arrow-right"
						/>
					</Fab>
				</View>
			</GestureRecognizer>
		);
	}
}

function mapStateToProps(state: StoreState): StoreProps {
	return state.bodyParts;
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
	return {
		selectBodyPart: (bodyPartId: number) => dispatch(selectBodyPartAction({ bodyPartId })),
		rotate: () => dispatch(switchPositionAction())
	};
}

export default connect<StoreProps, DispatchProps, OwnProps, any>(mapStateToProps, mapDispatchToProps)(BodyPartSelector);
