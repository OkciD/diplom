import * as React from 'react';
import { Container, Content, Form, Item, Input, Label, Button, Text, Icon, View } from 'native-base';
import styles from './AuthForm.styles';
import { StoreState } from '../../modules/index';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { setFieldAction, AuthState } from '../../modules/auth';
// @ts-ignore
import Hyperlink from 'react-native-hyperlink';
import commonColor from '../../../native-base-theme/variables/commonColor';

interface OwnProps {

}

interface StoreProps extends AuthState {

}

interface DispatchProps {
	setLogin: (login: string) => void;
	setPassword: (password: string) => void;
}

type Props = OwnProps & StoreProps & DispatchProps;

interface State {
	showPassword: boolean;
}

class AuthForm extends React.Component<Props> {
	public state: State = {
		showPassword: false
	};

	private readonly onEyeClick = () => {
		this.setState({
			showPassword: !this.state.showPassword
		});
	};

	public render(): React.ReactNode {
		const { login, password, setLogin, setPassword } = this.props;

		return (
			<Container>
				<Content>
					<Form>
						<Item floatingLabel>
							<Label>Имя пользователя</Label>
							<Input
								value={login}
								onChangeText={setLogin}
							/>
						</Item>
						<Item floatingLabel>
							<Label>Пароль</Label>
							<Input
								secureTextEntry={!this.state.showPassword}
								value={password}
								onChangeText={setPassword}
							/>
							<Icon
								onPress={this.onEyeClick}
								type="MaterialCommunityIcons"
								name={this.state.showPassword ? 'eye-off-outline' : 'eye-outline'}
							/>
						</Item>
					</Form>
					<Button hasText block style={styles.button}>
						<Text>Авторизация</Text>
					</Button>
					<View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
						<Text style={{ color: commonColor.brandInfo, marginBottom: 10, marginTop: 15 }}>Регистрация</Text>
						<Text style={{ color: commonColor.brandInfo }}>Продолжить без авторизации</Text>
					</View>
				</Content>
			</Container>
		);
	}
}

function mapStateToProps(state: StoreState): StoreProps {
	return state.auth;
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
	return {
		setLogin: (login: string) => dispatch(setFieldAction({ login })),
		setPassword: (password: string) => dispatch(setFieldAction({ password }))
	};
}

export default connect<StoreProps, DispatchProps, OwnProps, any>(mapStateToProps, mapDispatchToProps)(AuthForm);
