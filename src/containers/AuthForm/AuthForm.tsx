import * as React from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import styles from './AuthForm.styles';

export default class AuthForm extends React.Component<{}> {
	public render(): React.ReactNode {
		return (
			<Container>
				<Header />
				<Content>
					<Form>
						<Item floatingLabel>
							<Label>Username</Label>
							<Input />
						</Item>
						<Item floatingLabel>
							<Label>Password</Label>
							<Input secureTextEntry/>
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
