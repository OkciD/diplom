import * as React from 'react';
import { Content, Text, ListItem, Left, Right, Radio, View, Icon, Fab, Label, Input, Item } from 'native-base';
import styles from './AccountEdit.styles';
import { StoreState } from '../../modules/index';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Survey } from '../Survey';

interface OwnProps {

}

interface StoreProps {

}

interface DispatchProps {

}

type Props = OwnProps & StoreProps & DispatchProps;

class AccountEdit extends React.Component<Props> {

	private readonly qa: { question: string, answer: string }[] = [
		{ question: 'Имя пользователя', answer: 'Тамара' },
		{ question: 'E-mail', answer: 'tamara2046@yandex.ru' },
		{ question: 'Пароль', answer: '1amaraSpar0l' }
	];

	public render(): React.ReactNode {
		return (
			<View style={styles.container}>
				<Content>
					{this.qa.map(({ question, answer }) => (
						<View key={question}>
							<Text style={styles.question}>{question}</Text>
							<Item>
								<Input
									value={answer}
								/>
							</Item>
						</View>
					))}
					<View style={{ marginLeft: -10 }}>
						<Survey />
					</View>
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

export default connect<StoreProps, DispatchProps, OwnProps, any>(mapStateToProps, mapDispatchToProps)(AccountEdit);
