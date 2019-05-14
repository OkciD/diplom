import * as React from 'react';
import { RouterProps } from '../Router';
import styles from './Header.styles';
import { Body, Header as NativeBaseHeader, Left, Right, Title } from 'native-base';
import { headerContents } from './';
import { StoreState } from '../../modules/index';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

interface OwnProps {

}

interface StoreProps {
	state: StoreState;
}

interface DispatchProps {
	dispatch: Dispatch;
}

type Props = OwnProps & StoreProps & DispatchProps & RouterProps;

class Header extends React.Component<Props> {
	public render(): React.ReactElement | null {
		const { state, dispatch } = this.props;
		const { currentRoute } = state.routing;

		if (!currentRoute) {
			return null;
		}

		// @ts-ignore
		const { title, renderLeft, renderRight } = headerContents[currentRoute!.route] || {};

		return (
			<NativeBaseHeader style={styles.header}>
				<Left>
					{renderLeft && renderLeft(state, dispatch)}
				</Left>
				<Body>
					{title && (<Title>{title}</Title>)}
				</Body>
				<Right>
					{renderRight && renderRight(state, dispatch)}
				</Right>
			</NativeBaseHeader>
		);
	}
}

function mapStateToProps(state: StoreState): StoreProps {
	return { state };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
	return { dispatch };
}

export default connect<StoreProps, DispatchProps, any, any>(mapStateToProps, mapDispatchToProps)(Header);
