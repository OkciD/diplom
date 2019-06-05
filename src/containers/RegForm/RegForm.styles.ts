import { StyleSheet } from 'react-native';
import commonColor from '../../../native-base-theme/variables/commonColor';

const styles = StyleSheet.create({
	button: {
		marginTop: 20,
		margin: 15
	},
	errorInput: {
		color: commonColor.inputErrorBorderColor
	},
	errorText: {
		color: commonColor.inputErrorBorderColor,
		marginLeft: 15
	}
});

export default styles;
