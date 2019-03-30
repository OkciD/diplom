import * as React from 'react';
import { Button, Text, View, TextInput } from 'react-native';
import styles from '../Counter/Counter.styles';

export default class AuthForm extends React.Component<{}> {
	public render(): React.ReactNode {
		return (
			<View style={styles.container}>
				<TextInput placeholder={'Логин'} />
				<TextInput placeholder={'Пароль'} />
				<Button title={'Вход'} onPress={() => {}}/>
			</View>
		);
	}
}
