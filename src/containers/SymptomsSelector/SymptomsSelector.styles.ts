import { StyleSheet } from 'react-native';
import commonColor from '../../../native-base-theme/variables/commonColor';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginRight: 10,
		marginLeft: 10,
		height: '100%'
	},
	searchBarContainer: {
		marginTop: 2,
		paddingTop: 0
	},
	fab: {
		backgroundColor: commonColor.brandPrimary
	}
});

export default styles;
