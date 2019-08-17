import React from 'react';
import { Body, Content, List, ListItem, Right, Text, View } from 'native-base';
import commonColor from '../../../native-base-theme/variables/commonColor';

interface SymptomData {
	name: string;
	isCritical: boolean;
	[key: string]: any;
}

type Props = {
	symptoms: SymptomData[],
	renderRightComponent?: (symptom: SymptomData) => any,
	withSpacing: boolean
};

export default function SymptomsList(props: Props): React.ReactElement {
	const {
		symptoms,
		renderRightComponent,
		withSpacing = true
	} = props;

	return (
		<Content>
			<List>
				{symptoms.map((symptom) => {
					const { name, isCritical } = symptom;

					return (
						<ListItem key={name}>
							<Body>
								<Text
									{...isCritical && { style: { color: commonColor.inputErrorBorderColor } }}
								>
									{name}
								</Text>
							</Body>
							<Right>
								{renderRightComponent && renderRightComponent(symptom)}
							</Right>
						</ListItem>
					);
				})}
				{withSpacing && (
					<View style={{ height: 90 }} />
				)}
			</List>
		</Content>
	);
}
