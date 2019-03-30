import * as React from 'react';
import { Button, Text, View, TextInput } from 'react-native';
import styles from '../Counter/Counter.styles';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';

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
						<Item floatingLabel last>
							<Label>Password</Label>
							<Input />
						</Item>
					</Form>
				</Content>
			</Container>
		);
	}
}
