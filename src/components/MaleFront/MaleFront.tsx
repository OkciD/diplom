import Svg, { G, Path } from 'react-native-svg';
import React from 'react';
import { MaleFrontBodyParts, maleFrontBodyPath, maleFrontBodyPaths } from './index';

type Props = Partial<{
	width: number | string;
	height: number | string;
	onBodyPartPress: (bodyPart: MaleFrontBodyParts) => void;
}>;

interface State {
	selectedBodyPart: MaleFrontBodyParts | null;
}

/* tslint:disable:max-line-length */
export default class MaleFront extends React.Component<Props, State> {
	public state: State = {
		selectedBodyPart: null
	};

	public static defaultProps: Props = {
		width: '100%',
		height: '100%'
	};

	private onBodyPartPress = (bodyPart: MaleFrontBodyParts) => {
		this.setState({ selectedBodyPart: bodyPart });

		const { onBodyPartPress } = this.props;
		onBodyPartPress && onBodyPartPress(bodyPart);
	};

	public render(): React.ReactNode {
		const { width, height } = this.props;

		return (
			<Svg viewBox="0 0 168 320" width={width} height={height}>
				<G
					fill="#3F51B5"
					fillRule="evenodd"
					strokeLinejoin="round"
					strokeMiterlimit="1.414"
				>
					<Path d={maleFrontBodyPath}/>
				</G>
				<G fill="none">
					{maleFrontBodyPaths.map(([bodyPart, path]) => {
						const isSelected: boolean = (this.state.selectedBodyPart === bodyPart);

						return (
							<Path
								key={bodyPart}
								d={path}
								{...(isSelected) && { // стили, "подсвечивающие" кликнутую часть тела
									fill: '#3F51B5',
									fillOpacity: '0.3'
								}}
								onPress={() => this.onBodyPartPress(bodyPart)}
							/>
						);
					})}
				</G>
			</Svg>
		);
	}
}
