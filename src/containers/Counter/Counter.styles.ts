import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	counterValueContainer: {
		marginTop: 60,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'flex-start'
	},
	counterValue: {
		fontSize: 30,
		color: '#000000'
	},
	buttonsContainer: {
		marginTop: 30,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'flex-start',
		width: '40%'
	}
});

export default styles;
