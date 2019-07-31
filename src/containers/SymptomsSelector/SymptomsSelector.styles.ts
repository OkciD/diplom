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
	selectedSymptomsContainer: {
		marginTop: 20,

		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		flexWrap: 'wrap',
		alignContent: 'space-around'
	},
	selectedSymptomBadge: {
		marginBottom: 10,
		marginRight: 10,

		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	selectedSymptomBadgeText: {
		fontSize: 20,
		lineHeight: 22
	},
	selectedSymptomBadgeDeleteIcon: {
		marginLeft: 3,
		fontSize: 20,
		color: '#FFFFFF'
	},
	fab: {
		backgroundColor: commonColor.brandPrimary
	}
});

export default styles;
