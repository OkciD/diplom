import { StyleSheet } from 'react-native';
import commonColor from '../../../native-base-theme/variables/commonColor';

const styles = StyleSheet.create({
	container: {
		marginLeft: 10,
		flex: 1
	},
	question: {
		marginTop: 10,
		fontSize: 20
	},
	fab: {
		backgroundColor: commonColor.brandPrimary
	},
	list: {
		marginBottom: 100
	}
});

export default styles;
