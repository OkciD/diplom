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
	rotate: () => void;
}

type Props = OwnProps & StoreProps & DispatchProps & RouterProps;

class BodyPartSelector extends React.Component<Props> {
	private readonly gestureRecognizerConfig = {
		velocityThreshold: 0.3,
		directionalOffsetThreshold: 80
	};

	private readonly onSwipe = (gestureName: string) => {
		const { SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
		const { rotate } = this.props;

		switch (gestureName) {
			case SWIPE_LEFT:
			case SWIPE_RIGHT: {
				rotate();
				break;
			}
			default: {
				return;
			}
		}
	};

	private readonly onFabPress = () => {
		// TODO: temporary
		this.props.router.push.AuthForm({}, { type: 'right' });
	};

	private readonly onBodyPartPress = (chosenBodyPartId: number) => {
		this.props.router.push.SymptomsSelector({ chosenBodyPartId }, { type: 'right' });
	};

	public render(): React.ReactElement | null {
		const { gender, position, rotate } = this.props;

		return (
			<View style={styles.container}>
				<GestureRecognizer config={this.gestureRecognizerConfig} onSwipe={this.onSwipe}>
					<HumanBody
						gender={gender}
						position={position}
						onBodyPartPress={this.onBodyPartPress}
					/>
				</GestureRecognizer>
				<View style={styles.rotateButtonContainer}>
					<RotateButton onPress={rotate}/>
				</View>
				{/*TODO: render if at least one symptom is selected*/}
				<Fab position="bottomRight" style={styles.fab} onPress={this.onFabPress}>
					<Icon
						type="MaterialCommunityIcons"
						name="arrow-right"
					/>
				</Fab>
			</View>
		);
	}
}

function mapStateToProps(state: StoreState): StoreProps {
	return state.bodyParts;
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
	return {
		rotate: () => dispatch(switchPositionAction())
	};
}

export default connect<StoreProps, DispatchProps, OwnProps, any>(mapStateToProps, mapDispatchToProps)(BodyPartSelector);
