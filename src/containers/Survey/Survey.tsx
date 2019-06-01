import * as React from 'react';
import { Content, Text, ListItem, Left, Right, Radio, View } from 'native-base';
import styles from './Survey.styles';
import { StoreState } from '../../modules/index';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

interface OwnProps {

}

interface StoreProps {

}

interface DispatchProps {

}

type Props = OwnProps & StoreProps & DispatchProps;

interface State {
	showPassword: boolean;
}

class Survey extends React.Component<Props, State> {
	public state: State = {
		showPassword: false
	};

	private readonly questions: string[] = [
		'Ожирение', 'Курение', 'Высокий уровень холестерина', 'Гипертензия', 'Диабет'
	];

	public render(): React.ReactNode {
		return (
			<Content style={styles.container}>
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

export default connect<StoreProps, DispatchProps, OwnProps, any>(mapStateToProps, mapDispatchToProps)(Survey);
