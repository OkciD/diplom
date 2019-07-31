import * as React from 'react';
import { StoreState } from '../../modules/index';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouterProps } from '../Router';
import { CheckBox, Fab, Icon, Input, Item, View } from 'native-base';
import styles from './SymptomsSelector.styles';
import { SymptomsList } from '../../components/SymptomsList';
import commonColor from '../../../native-base-theme/variables/commonColor';
import { Symptom } from '../../modules/symptoms';

interface OwnProps {

}

interface StoreProps {
	symptoms: Symptom[];
}

interface DispatchProps {

}

type Props = OwnProps & StoreProps & DispatchProps & RouterProps;

class SymptomsSelector extends React.Component<Props> {
	public render(): React.ReactNode {
		const { symptoms } = this.props;

		return (
			<View style={styles.container}>
				<Item style={styles.searchBarContainer}>
					<Input placeholder="Поиск" />
					<Icon
						type="MaterialCommunityIcons"
						name="magnify"
					/>
				</Item>
				<SymptomsList
					symptoms={symptoms}
					renderRightComponent={({ isCritical, selected }) => (
						<CheckBox
							checked={selected}
							{...isCritical && { color: commonColor.inputErrorBorderColor } }
						/>
					)}
				/>
				<Fab position="bottomRight" style={styles.fab}>
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
	return {
		symptoms: state.symptoms.symptomsForChosenBodyPart
	};
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
	return {

	};
}

export default connect<StoreProps, DispatchProps, OwnProps, any>(mapStateToProps, mapDispatchToProps)(SymptomsSelector);
