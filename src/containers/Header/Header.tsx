import * as React from 'react';
import styles from './Header.styles';
import { Body, Header as NativeBaseHeader, Left, Right, Title } from 'native-base';
import { headerContents } from './';
import { StoreState } from '../../modules/index';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Router } from 'react-native-easy-router';

interface OwnProps {
	router: Router;
}

interface StoreProps {
	state: StoreState;
}

interface DispatchProps {
	dispatch: Dispatch;
}

type Props = OwnProps & StoreProps & DispatchProps;

class Header extends React.Component<Props> {
	public render(): React.ReactElement | null {
		const { state, dispatch, router } = this.props;
		const { currentRoute } = state.routing;

		if (!currentRoute) {
			return null;
		}

		// @ts-ignore
		const { title, renderLeft, renderRight } = headerContents[currentRoute!.route] || {};

		return (
			<NativeBaseHeader style={styles.header}>
				<Left>
					{renderLeft && renderLeft(state, dispatch, router)}
				</Left>
				<Body style={{ flex: 2 }}>
					{title && (<Title>{title}</Title>)}
				</Body>
				<Right>
					{renderRight && renderRight(state, dispatch, router)}
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

export default connect<StoreProps, DispatchProps, OwnProps, any>(mapStateToProps, mapDispatchToProps)(Header);
