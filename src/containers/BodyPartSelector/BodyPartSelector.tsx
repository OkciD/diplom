import * as React from 'react';
import { BodyPartsState, selectBodyPartAction } from '../../modules/bodyParts';
import { connect } from 'react-redux';
import { StoreState } from '../../modules/index';
import { Dispatch } from 'redux';

interface OwnProps {

}

interface StoreProps extends BodyPartsState {

}

interface DispatchProps {
	selectBodyPart: (bodyPartId: number) => void;
}

type Props = OwnProps & StoreProps & DispatchProps;

class BodyPartSelector extends React.Component<Props> {
	public render(): React.ReactElement | null {
		return null;
	}
}

function mapStateToProps(state: StoreState): StoreProps {
	return state.bodyParts;
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
	return {
		selectBodyPart: (bodyPartId: number) => dispatch(selectBodyPartAction({ bodyPartId }))
	};
}

export default connect<StoreProps, DispatchProps, any, any>(mapStateToProps, mapDispatchToProps)(BodyPartSelector);
