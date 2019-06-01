import * as React from 'react';
import { counterDecAction, counterIncAction, CounterState, resetAction } from '../../modules/counter';
import { StoreState } from '../../modules/index/';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';
import styles from './Counter.styles';
import { RouterProps } from '../Router';

interface OwnProps {

}

interface StoreProps extends CounterState{

}

interface DispatchProps {
	incCounter: () => void;
	decCounter: () => void;
	resetCounter: () => void;
}

type Props = OwnProps & StoreProps & DispatchProps & RouterProps;

class Counter extends React.Component<Props> {
	public render(): React.ReactNode {
		const { counter, incCounter, decCounter, resetCounter } = this.props;

		return (
			<View style={styles.container}>
				<View style={styles.counterValueContainer}>
					<Text style={styles.counterValue}>{counter}</Text>
				</View>
				<View style={styles.buttonsContainer}>
					<Button title="Inc" onPress={incCounter} />
					<Button title="Dec" onPress={decCounter} />
					<Button title="Reset" onPress={resetCounter} />
				</View>
			</View>
		);
	}
}

function mapStateToProps(state: StoreState): StoreProps {
	const { counter } = state;

	return counter;
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
	return {
		incCounter: () => dispatch(counterIncAction()),
		decCounter: () => dispatch(counterDecAction()),
		resetCounter: () => dispatch(resetAction())
	};
}

export default connect<StoreProps, DispatchProps, OwnProps, any>(mapStateToProps, mapDispatchToProps)(Counter);
