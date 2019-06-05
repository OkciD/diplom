import * as React from 'react';
import { Content, Form, Item, Input, Label, Button, Text, Icon, View } from 'native-base';
import styles from './RegForm.styles';
import { StoreState } from '../../modules/index';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import commonColor from '../../../native-base-theme/variables/commonColor';

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
		const nameHasError: boolean = true;
		const emailHasError: boolean = true;
		const passwordHasError: boolean = true;

		return (
			<Content>
				<Form>
					<Item floatingLabel error={nameHasError}>
						<Label>Имя пользователя</Label>
						<Input
							style={nameHasError ? styles.errorInput : {}}
							onChangeText={() => {}}
						/>
					</Item>
					{nameHasError && (<Text style={styles.errorText}>
						Поле обязательно для заполнения
					</Text>)}
					<Item floatingLabel error={emailHasError}>
						<Label>E-mail</Label>
						<Input
							style={emailHasError ? styles.errorInput : {}}
							onChangeText={() => {}}
						/>
					</Item>
					{emailHasError && (<Text style={styles.errorText}>
						Поле обязательно для заполнения
					</Text>)}
					<Item floatingLabel error={passwordHasError}>
						<Label>Пароль</Label>
						<Input
							secureTextEntry={!this.state.showPassword}
							style={passwordHasError ? styles.errorInput : {}}
							onChangeText={() => {}}
						/>
						<Icon
							onPress={this.onEyeClick}
							type="MaterialCommunityIcons"
							name={this.state.showPassword ? 'eye-off-outline' : 'eye-outline'}
						/>
					</Item>
					{passwordHasError && (<Text style={styles.errorText}>
						Поле обязательно для заполнения
					</Text>)}
				</Form>
				<Button hasText block style={styles.button}>
					<Text>Зарегистрироваться</Text>
				</Button>
				<View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
					<Text style={{ color: commonColor.brandInfo, marginBottom: 10, marginTop: 15 }}>Авторизация</Text>
					<Text style={{ color: commonColor.brandInfo }}>Продолжить без регистрации</Text>
				</View>
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
