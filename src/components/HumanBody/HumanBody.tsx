import Svg, { G, Path } from 'react-native-svg';
import React from 'react';
import { MaleFrontPaths, MaleBackPaths } from './';
import commonColor from '../../../native-base-theme/variables/commonColor';

type Props = Partial<{
	width: number | string;
	height: number | string;
	onBodyPartPress: (bodyPartId: number) => void;
	selectedBodyPartsIds?: number[];
	gender: 'male' | 'female';
	position: 'front' | 'back';
}>;

interface Paths {
	wholePath: string;
	bodyPartsPaths: [number, string][];
}

// tslint:disable-next-line:function-name
export default function HumanBody(props: Props): React.ReactElement {
	const {
		width = 1.65 * 168,
		height = 1.65 * 320,
		onBodyPartPress = () => {},
		selectedBodyPartsIds = [],
		gender = 'male',
		position = 'front'
	} = props;

	let paths: Paths;

	switch (true) {
		case ((gender === 'male') && (position === 'front')): {
			paths = MaleFrontPaths;
			break;
		}
		case ((gender === 'male') && (position === 'back')): {
			paths = MaleBackPaths;
			break;
		}
		case ((gender === 'female') && (position === 'front')): {
			paths = MaleFrontPaths; // TODO: FemaleFrontPaths
			break;
		}
		case ((gender === 'female') && (position === 'back')): {
			paths = MaleFrontPaths; // TODO: FemaleBackPaths
			break;
		}
		default: {
			paths = MaleFrontPaths;
			break;
		}
	}

	return (
		<Svg viewBox="0 0 168 320" width={width} height={height}>
			<G
				fill={commonColor.brandPrimary}
				fillRule="evenodd"
				strokeLinejoin="round"
				strokeMiterlimit="1.414"
			>
				<Path d={paths.wholePath} />
			</G>
			<G fill="none">
				{paths.bodyPartsPaths.map(([bodyPartId, path]) => {
					const isSelected: boolean = selectedBodyPartsIds.includes(bodyPartId);

					return (
						<Path
							key={bodyPartId}
							d={path}
							{...(isSelected) && { // стили, "подсвечивающие" кликнутую часть тела
								fill: commonColor.brandPrimary,
								fillOpacity: 0.3
							}}
							onPress={() => onBodyPartPress(bodyPartId)}
						/>
					);
				})}
			</G>
		</Svg>
	);
}
