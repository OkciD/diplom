import * as React from 'react';
import { StoreState } from '../../modules/index';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouterProps } from '../Router';
// @ts-ignore
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import { Badge, Icon, Input, Item, View, Text } from 'native-base';
import styles from './SymptomSearch.styles';
import { SymptomsList } from '../../components/SymptomsList';
import commonColor from '../../../native-base-theme/variables/commonColor';

interface OwnProps {

}

interface StoreProps {

}

interface DispatchProps {

}

type Props = OwnProps & StoreProps & DispatchProps & RouterProps;

interface State {
	showSuggestions: boolean;
}

class SymptomSearch extends React.Component<Props, State> {
	public state: State = {
		showSuggestions: false
	};

	private readonly gestureRecognizerConfig = {
		velocityThreshold: 0.3,
		directionalOffsetThreshold: 80
	};

	private readonly suggestions: { name: string, isCritical: boolean }[] = [
		{ name: 'Невозможность двигать рукой или боль остается сильной даже в покое', isCritical: true },
		{ name: 'Ощущение болезненности в глазу', isCritical: true },
		{ name: 'Рвота, не снявшая боль', isCritical: true },

		{ name: 'Зубная боль держится несколько минут', isCritical: false },
		{ name: 'Слабость', isCritical: false },
		{ name: 'Беспрерывная напряженная работа в течение нескольких дней', isCritical: false },
		{ name: 'Внезапная спазматическая боль в икроножной мышце', isCritical: false },
		{ name: 'Выздоровление после перенесенной болезни', isCritical: false },
		{ name: 'Длительная зубная боль', isCritical: false },
		{ name: 'Запломбировали один или несколько зубов на протяжении последних недель', isCritical: false },
		{ name: 'Зуб болит при нажатии', isCritical: false },
		{ name: 'Зубная боль', isCritical: false },
		{ name: 'Небольшой  участок на голени покраснел и стал болезненным', isCritical: false },
		{ name: 'Периодические схваткообразные боли', isCritical: false },
		{ name: 'Повторяющаяся боль в животе', isCritical: false },
		{ name: 'Повторяющиеся головные боли', isCritical: false },
		{ name: 'Повторяющиеся приступы пульсирующей зубной боли', isCritical: false },
		{ name: 'Приступы боли в течении нескольких дней за последнюю неделю', isCritical: false },
		{ name: 'Раздражение и боль в глазе', isCritical: false },
		{ name: 'Сильная боль в животе продолжается более часа', isCritical: false },
		{ name: 'Слабость или дрожь', isCritical: false },
		{ name: 'Тупая сжимающая боль распространяется вверх по грудной клетке и вниз вдоль рук', isCritical: false }
	];
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

	private renderSelectedSymptoms(): React.ReactNode {
		return (
			<View style={styles.selectedSymptomsContainer}>
				{this.selectedSymptoms.map((symptom) => (
					<Badge primary key={symptom} style={styles.selectedSymptomBadge}>
						<Text style={styles.selectedSymptomBadgeText}>
							{symptom}
						</Text>
						<Icon
							style={styles.selectedSymptomBadgeDeleteIcon}
							type="MaterialCommunityIcons"
							name="close-circle"
						/>
					</Badge>
				))}
			</View>
		);
	}

	public render(): React.ReactNode {
		return (
			<GestureRecognizer config={this.gestureRecognizerConfig} onSwipe={this.onSwipe}>
				<View style={styles.container}>
					<Item style={styles.searchBarContainer}>
						<Input
							placeholder="Поиск"
							onFocus={() => { this.setState({ showSuggestions: true }); }}
							// TODO: bug on blur
							onBlur={() => { this.setState({ showSuggestions: false }); }}
							{ ...(this.state.showSuggestions) && { value: 'бо' } }
						/>
						<Icon
							type="MaterialCommunityIcons"
							name="magnify"
						/>
					</Item>
					{this.state.showSuggestions ? (
						<SymptomsList
							symptoms={this.suggestions}
							renderRightComponent={({ isCritical }) => (
								<Icon
									type="MaterialCommunityIcons"
									name="arrow-right"
									{...isCritical && { style: { color: commonColor.inputErrorBorderColor } }}
								/>
							)}
						/>
					) : (
						this.renderSelectedSymptoms()
					)}

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
