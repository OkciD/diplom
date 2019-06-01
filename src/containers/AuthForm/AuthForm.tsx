import * as React from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import styles from './AuthForm.styles';
import { StoreState } from '../../modules/index';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { setFieldAction, AuthState } from '../../modules/auth';

interface OwnProps {

}

interface StoreProps extends AuthState {

}

interface DispatchProps {
	setLogin: (login: string) => void;
	setPassword: (password: string) => void;
}

type Props = OwnProps & StoreProps & DispatchProps;

class AuthForm extends React.Component<Props> {
	public render(): React.ReactNode {
		const { login, password, setLogin, setPassword } = this.props;

		return (
			<Container>
				<Header />
				<Content>
					<Form>
						<Item floatingLabel>
							<Label>Username</Label>
							<Input
								value={login}
								onChangeText={setLogin}
							/>
						</Item>
						<Item floatingLabel>
							<Label>Password</Label>
							<Input
								secureTextEntry
								value={password}
								onChangeText={setPassword}
							/>
						</Item>
					</Form>
					<Button hasText block style={styles.button}>
						<Text>Submit</Text>
					</Button>
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
