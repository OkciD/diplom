import { StyleSheet } from 'react-native';
import commonColor from '../../../native-base-theme/variables/commonColor';

const styles = StyleSheet.create({
	container: {
		marginLeft: 15,
		marginRight: 15
	},
	diagnosisName: {
		marginTop: 15,
		textAlign: 'center',
		marginBottom: 20,
		color: commonColor.inputErrorBorderColor
	},
	paragraph: {
		fontSize: 21,
		textAlign: 'justify',
		marginBottom: 10
	}
});

export default styles;
