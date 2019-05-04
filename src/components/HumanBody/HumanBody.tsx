import Svg, { G, Path } from 'react-native-svg';
import React from 'react';
import { MaleFrontBodyParts, maleFrontBodyPaths, maleFrontBodyPath } from './index';

type Props = Partial<{
	width: number | string;
	height: number | string;
	selectedBodyPart: MaleFrontBodyParts | null;
	onBodyPartPress: (bodyPart: MaleFrontBodyParts) => void;
}>;

export default function HumanBody(props: Props): JSX.Element {
	const { width = '100%', height = '100%', onBodyPartPress = () => {}, selectedBodyPart = null } = props;

	return (
		<Svg viewBox="0 0 168 320" width={width} height={height}>
			<G
				fill="#3F51B5"
				fillRule="evenodd"
				strokeLinejoin="round"
				strokeMiterlimit="1.414"
			>
				<Path d={maleFrontBodyPath} />
			</G>
			<G fill="none">
				{maleFrontBodyPaths.map(([bodyPart, path]) => {
					const isSelected: boolean = (selectedBodyPart === bodyPart);

					return (
						<Path
							key={bodyPart}
							d={path}
							{...(isSelected) && { // стили, "подсвечивающие" кликнутую часть тела
								fill: '#3F51B5',
								fillOpacity: '0.3'
							}}
							onPress={() => onBodyPartPress(bodyPart)}
						/>
					);
				})}
			</G>
		</Svg>
	);
}
