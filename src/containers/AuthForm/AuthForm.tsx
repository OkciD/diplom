import * as React from 'react';
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
							<Input secureTextEntry/>
						</Item>
					</Form>
				</Content>
			</Container>
		);
	}
}
