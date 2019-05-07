import * as React from 'react';
import { BodyPartsState, selectBodyPartAction, switchPositionAction } from '../../modules/bodyParts';
import { connect } from 'react-redux';
import { StoreState } from '../../modules/index';
import { Dispatch } from 'redux';
import { HumanBody } from '../../components/HumanBody';
import { View } from 'native-base';
import styles from './BodyPartSelector.styles';
import RotateButton from '../../components/RotateButton/RotateButton';

interface OwnProps {

}

interface StoreProps extends BodyPartsState {

}

interface DispatchProps {
	selectBodyPart: (bodyPartId: number) => void;
	rotate: () => void;
}

type Props = OwnProps & StoreProps & DispatchProps;

class BodyPartSelector extends React.Component<Props> {
	public render(): React.ReactElement | null {
		const { selectedBodyPartId, gender, position, selectBodyPart, rotate } = this.props;

		return (
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
			</View>
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

export default connect<StoreProps, DispatchProps, any, any>(mapStateToProps, mapDispatchToProps)(BodyPartSelector);
