import * as React from 'react';
import { Button, Text, View, TextInput } from 'react-native';

export default class AuthForm extends React.Component<{}> {
	public render(): React.ReactNode {
		return (
			<View>
				<TextInput />
				<TextInput />
				<Button title={'Вход'} onPress={() => {}}/>
			</View>
		);
	}
}
