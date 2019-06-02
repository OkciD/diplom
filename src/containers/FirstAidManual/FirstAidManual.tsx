import * as React from 'react';
import { StoreState } from '../../modules/index';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouterProps } from '../Router';
import { Content, H2, Text, View, List, ListItem } from 'native-base';
import styles from './FirstAidManual.styles';
import { Image } from 'react-native';

interface OwnProps {

}

interface StoreProps {

}

interface DispatchProps {

}

type Props = OwnProps & StoreProps & DispatchProps & RouterProps;

class FirstAidManual extends React.Component<Props> {
	public render(): React.ReactElement {
		return (
			<Content>
				<View style={styles.container}>
					<H2 style={styles.diagnosisName}>Перелом руки</H2>

					<Text style={styles.paragraph}>
						{/* tslint:disable-next-line:max-line-length */}
						Производится иммобилизация  путем наложения шины, в качестве которой можно использовать любые подручные материалы: доску, лыжную палку, фанеру, толстую ветку.
					</Text>

					<Text style={styles.paragraph}>
						Шину фиксируют к руке, обеспечивая ее неподвижность для уменьшения боли и предотвращения смещения.
					</Text>

					<Image
						source={{ uri: 'https://s.sakh.com/i/lg/forum/2018/02/05/0c/0ccf2e539f4924fbebea3d0d51d8738266869517.png' }}
						// @ts-ignore
						style={{ height: 150, width: null, flex: 1 }}
					/>

					<Text style={styles.paragraph}>
						Ни в коем случае нельзя дергать за конечность, пытаясь вправить кости.
					</Text>

					<Text style={styles.paragraph}>
						Чтобы правильно наложить шину, необходимо знать особенности этого процесса:
					</Text>

					<List>
						<ListItem noBorder noIndent>
							{/* tslint:disable-next-line:max-line-length */}
							<Text style={styles.paragraph}>Шиной фиксируется не менее двух суставов для предотвращения смещения костных осколков;</Text>
						</ListItem>
						<ListItem noBorder noIndent>
							{/* tslint:disable-next-line:max-line-length */}
							<Text style={styles.paragraph}>Размер шины должен соответствовать размеру конечности, но не меньше, чтобы надежно зафиксировать ее.</Text>
						</ListItem>
						<ListItem noBorder noIndent>
							{/* tslint:disable-next-line:max-line-length */}
							<Text style={styles.paragraph}>Шина накладывается поверх одежды, поэтому ее нужно разрезать, но не снимать.</Text>
						</ListItem>
					</List>
				</View>
			</Content>
		);
	}
}

function mapStateToProps(state: StoreState): StoreProps {
	return {};
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
	return {};
}

export default connect<StoreProps, DispatchProps, OwnProps, any>(mapStateToProps, mapDispatchToProps)(FirstAidManual);
