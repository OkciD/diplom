import * as React from 'react';
import { Container, Content, Form, Item, Input, Label, Button, Text, Icon, View } from 'native-base';
import styles from './AuthForm.styles';
import { StoreState } from '../../modules/index';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { setFieldAction, AuthState } from '../../modules/auth';
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
		const loginHasError: boolean = false;
		const passwordHasError: boolean = false;

		return (
			<Container>
				<Content>
					<Form>
						<Item floatingLabel error={loginHasError}>
							<Label>Имя пользователя</Label>
							<Input
								value={login}
								onChangeText={setLogin}
								style={loginHasError ? styles.errorInput : {}}
							/>
						</Item>
						{loginHasError && (<Text style={styles.errorText}>
							Данный аккаунт не зарегистрирован
						</Text>)}
						<Item floatingLabel error={passwordHasError}>
							<Label>Пароль</Label>
							<Input
								secureTextEntry={!this.state.showPassword}
								value={password}
								onChangeText={setPassword}
								style={passwordHasError ? styles.errorInput : {}}
							/>
							<Icon
								onPress={this.onEyeClick}
								type="MaterialCommunityIcons"
								name={this.state.showPassword ? 'eye-off-outline' : 'eye-outline'}
							/>
						</Item>
						{passwordHasError && (<Text style={styles.errorText}>
							Неверный пароль
						</Text>)}
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
