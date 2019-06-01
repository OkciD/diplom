import * as React from 'react';
import {Content, Text, ListItem, Left, Right, Radio, View, Icon, Fab} from 'native-base';
import styles from './Survey.styles';
import { StoreState } from '../../modules/index';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import Slider from '@react-native-community/slider';
import commonColor from '../../../native-base-theme/variables/commonColor';

interface OwnProps {

}

interface StoreProps {

}

interface DispatchProps {

}

type Props = OwnProps & StoreProps & DispatchProps;

interface State {
	showAge: number;
}

class Survey extends React.Component<Props, State> {
	public state: State = {
		showAge: 18
	};

	private readonly questions: string[] = [
		'Ожирение', 'Курение', 'Высокий уровень холестерина', 'Гипертензия', 'Диабет'
	];

	public render(): React.ReactNode {
		return (
			<View style={styles.container}>
				<Content>
					<View>
						<Text style={styles.question}>Возраст: {this.state.showAge}</Text>
						<Slider
							minimumValue={0}
							maximumValue={100}
							step={1}
							value={this.state.showAge}
							minimumTrackTintColor={commonColor.brandPrimary}
							maximumTrackTintColor={commonColor.brandPrimary}
							thumbTintColor={commonColor.brandPrimary}
							onValueChange={(value) => this.setState({ showAge: value })}
						/>
					</View>
					<View>
						<Text style={styles.question}>Пол</Text>
						<ListItem>
							<Left>
								<Text>Мужчина</Text>
							</Left>
							<Right>
								<Radio selected={false} />
							</Right>
						</ListItem>
						<ListItem>
							<Left>
								<Text>Женщина</Text>
							</Left>
							<Right>
								<Radio selected={true} />
							</Right>
						</ListItem>
					</View>
					{this.questions.map((question) => (
						<View key={question}>
							<Text style={styles.question}>{question}</Text>
							<ListItem>
								<Left>
									<Text>Да</Text>
								</Left>
								<Right>
									<Radio selected={true} />
								</Right>
							</ListItem>
							<ListItem>
								<Left>
									<Text>Нет</Text>
								</Left>
								<Right>
									<Radio selected={false} />
								</Right>
							</ListItem>
							<ListItem>
								<Left>
									<Text>Не знаю</Text>
								</Left>
								<Right>
									<Radio selected={false} />
								</Right>
							</ListItem>
						</View>
					))}
				</Content>
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
	return {};
}

export default connect<StoreProps, DispatchProps, OwnProps, any>(mapStateToProps, mapDispatchToProps)(Survey);
