import { StyleSheet } from 'react-native';
import commonColor from '../../../native-base-theme/variables/commonColor';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		flex: 1,
		marginTop: 15
	},
	rotateButtonContainer: {
		marginTop: 15
	},
	fab: {
		backgroundColor: commonColor.brandPrimary
	}
});

export default styles;
