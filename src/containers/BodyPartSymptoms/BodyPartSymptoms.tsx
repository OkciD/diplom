import * as React from 'react';
import { StoreState } from '../../modules/index';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouterProps } from '../Router';
import { CheckBox, Fab, Icon, Input, Item, View } from 'native-base';
import styles from './BodyPartSymptoms.styles';
import { SymptomsList } from '../../components/SymptomsList';
import commonColor from '../../../native-base-theme/variables/commonColor';

interface OwnProps {

}

interface StoreProps {

}

interface DispatchProps {

}

type Props = OwnProps & StoreProps & DispatchProps & RouterProps;

class BodyPartSymptoms extends React.Component<Props> {
	private readonly symptoms: { name: string, isCritical: boolean, selected?: boolean }[] = [
		{ name: 'Рвота, не снявшая боль', isCritical: true },
		{ name: 'Болезненный вздутый живот', isCritical: true, selected: true },

		{ name: 'Понос', isCritical: false },
		{ name: 'Боль в животе', isCritical: false },
		{ name: 'Приступы боли в течении нескольких дней за последнюю неделю', isCritical: false, selected: true },
		{ name: 'Сильная боль в животе продолжается более часа', isCritical: false }
	];

	public render(): React.ReactNode {
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
					symptoms={this.symptoms}
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
	return {};
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
	return {

	};
}

export default connect<StoreProps, DispatchProps, OwnProps, any>(mapStateToProps, mapDispatchToProps)(BodyPartSymptoms);
