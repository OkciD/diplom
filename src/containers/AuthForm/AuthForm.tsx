import * as React from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import styles from './AuthForm.styles';
import AuthState from '../../modules/auth/auth.types';
import { StoreState } from '../../modules/index';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { setFieldAction } from '../../modules/auth';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

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
		return (
			<Container>
				<Header />
				<Content>
					<Form>
						<Item floatingLabel>
							<Label>Username</Label>
							<Input value={this.props.login} onChange={(event: NativeSyntheticEvent<TextInputChangeEventData>) => {
								// @ts-ignore
								console.warn(event.target.text);
							}} />
						</Item>
						<Item floatingLabel>
							<Label>Password</Label>
							<Input secureTextEntry value={this.props.password}/>
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
		setLogin: login => dispatch(setFieldAction({ login })),
		setPassword: password => dispatch(setFieldAction({ password }))
	};
}

export default connect<StoreProps, DispatchProps, any, any>(mapStateToProps, mapDispatchToProps)(AuthForm);
