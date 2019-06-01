import * as React from 'react';
import { Content, Form, Item, Input, Label, Button, Text, Icon } from 'native-base';
import styles from './RegForm.styles';
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

class RegForm extends React.Component<Props, State> {
	public state: State = {
		showPassword: false
	};

	private readonly onEyeClick = () => {
		this.setState({
			showPassword: !this.state.showPassword
		});
	};

	public render(): React.ReactNode {
		return (
			<Content>
				<Form>
					<Item floatingLabel>
						<Label>Имя пользователя</Label>
						<Input
							onChangeText={() => {}}
						/>
					</Item>
					<Item floatingLabel>
						<Label>E-mail</Label>
						<Input
							onChangeText={() => {}}
						/>
					</Item>
					<Item floatingLabel>
						<Label>Пароль</Label>
						<Input
							secureTextEntry={!this.state.showPassword}
							onChangeText={() => {}}
						/>
						<Icon
							onPress={this.onEyeClick}
							type="MaterialCommunityIcons"
							name={this.state.showPassword ? 'eye-off-outline' : 'eye-outline'}
						/>
					</Item>
				</Form>
				<Button hasText block style={styles.button}>
					<Text>Зарегистрироваться</Text>
				</Button>
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

export default connect<StoreProps, DispatchProps, OwnProps, any>(mapStateToProps, mapDispatchToProps)(RegForm);
