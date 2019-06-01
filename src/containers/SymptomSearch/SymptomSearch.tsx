import * as React from 'react';
import { StoreState } from '../../modules/index';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouterProps } from '../Router';
// @ts-ignore
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import { Badge, Icon, Input, Item, View, Text } from 'native-base';
import styles from './SymptomSearch.styles';

interface OwnProps {

}

interface StoreProps {

}

interface DispatchProps {

}

type Props = OwnProps & StoreProps & DispatchProps & RouterProps;

class SymptomSearch extends React.Component<Props> {
	private readonly gestureRecognizerConfig = {
		velocityThreshold: 0.3,
		directionalOffsetThreshold: 80
	};

	private readonly suggestions: string[] = [];
	private readonly selectedSymptoms: string[] = ['Озноб', 'Недосып', 'Потеря в весе', 'Боль в руке'];

	private readonly onSwipe = (gestureName: string) => {
		const { SWIPE_LEFT } = swipeDirections;
		const { router } = this.props;

		switch (gestureName) {
			case SWIPE_LEFT: {
				router.push.BodyPartSelector({}, { type: 'right' });
				return;
			}
			default: {
				return;
			}
		}
	};

	public render(): React.ReactNode {
		return (
			<GestureRecognizer config={this.gestureRecognizerConfig} onSwipe={this.onSwipe}>
				<View style={styles.container}>
					<Item style={styles.searchBarContainer}>
						<Input placeholder="Поиск" />
						<Icon
							type="MaterialCommunityIcons"
							name="magnify"
						/>
					</Item>
					{this.selectedSymptoms.map((symptom) => (
						<Badge primary key={symptom}>
							<Text>
								{symptom}
								<Icon
									style={{ fontSize: 18, color: '#FFF', lineHeight: 25 }}
									type="MaterialCommunityIcons"
									name="close-circle"
								/>
							</Text>
						</Badge>
					))}
				</View>
			</GestureRecognizer>
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

export default connect<StoreProps, DispatchProps, OwnProps, any>(mapStateToProps, mapDispatchToProps)(SymptomSearch);
