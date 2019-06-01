import * as React from 'react';
import { Content, Text, ListItem, Left, Right, Radio, View, Icon, Fab } from 'native-base';
import styles from './Account.styles';
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

class Account extends React.Component<Props> {

	private readonly qa: { question: string, answer: string }[] = [
		{ question: 'Имя пользователя', answer: 'Тамара' },
		{ question: 'E-mail', answer: 'tamara2046@yandex.ru' },
		{ question: 'Пол', answer: 'Женщина' },
		{ question: 'Возраст', answer: '18' },
		{ question: 'Ожирение', answer: 'Да' },
		{ question: 'Курение', answer: 'Да' },
		{ question: 'Высокий уровень холестерина', answer: 'Да' },
		{ question: 'Гипертензия', answer: 'Да' },
		{ question: 'Диабет', answer: 'Да' }
	];

	public render(): React.ReactNode {
		return (
			<View style={styles.container}>
				<Content>
					{this.qa.map(({ question, answer }) => (
						<View key={question}>
							<Text style={styles.question}>{question}</Text>
							<ListItem>
								<Left>
									<Text>{answer}</Text>
								</Left>
							</ListItem>
						</View>
					))}
					<View style={styles.spacer} />
				</Content>
				<Fab position="bottomRight" style={styles.fab}>
					<Icon
						type="MaterialCommunityIcons"
						name="pencil"
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

export default connect<StoreProps, DispatchProps, OwnProps, any>(mapStateToProps, mapDispatchToProps)(Account);
