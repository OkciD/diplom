import * as React from 'react';
import { StoreState } from '../../modules/index';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouterProps } from '../Router';
import { Accordion, Body, Content, H2, H3, Left, List, ListItem, Right, Text, Button, View } from 'native-base';
import styles from './Diagnosis.styles';

interface OwnProps {

}

interface StoreProps {

}

interface DispatchProps {

}

type Props = OwnProps & StoreProps & DispatchProps & RouterProps;

class Diagnosis extends React.Component<Props> {
	/* tslint:disable:max-line-length */
	private readonly dataArray: { title: string, content: string }[] = [
		{
			title: 'Описание',
			content: 'Воспалительные или воспалительно-дистрофические изменения слизистой оболочки желудка; длительно протекающее заболевание, характеризуется дистрофически-воспалительными изменениями, протекает с нарушением регенерации, а также с атрофией эпителиальных клеток и замещением нормальных желёз на фиброзную ткань. Прогрессирование заболевания ведёт к нарушению основных функций желудка, прежде всего секреторной.'
		}
	];

	private readonly doctors: { name: string, clinic: string }[] = [
		{ name: 'Георгий Кудрявцев', clinic: 'Здоровье +' },
		{ name: 'Анна Носкова', clinic: 'Ващ Доктор' },
		{ name: 'Ярослав Владимиров', clinic: 'Клиника здоровья' },
		{ name: 'София Данилова', clinic: 'МедДом' }
	];

	private readonly medTests: string[] = [
		'Общий анализ крови',
		'Общий анализ мочи',
		'Общий анализ кала'
	];

	public render(): React.ReactElement {
		return (
			<Content>
				<View style={styles.container}>
					<H2 style={styles.diagnosisName}>Гастрит</H2>
					<Accordion
						dataArray={this.dataArray}
					/>

					<H3 style={styles.doctorsListTitle}>Врачи</H3>
					<List>
						{this.doctors.map(({ name, clinic }, index) => (
							<ListItem thumbnail key={`${name}_${clinic}_${index}`}>
								<Left>
								</Left>
								<Body>
									<Text>{name}</Text>
									<Text note numberOfLines={1}>Гастроэнетролог</Text>
								</Body>
								<Right>
									<Text note>{clinic}</Text>
								</Right>
							</ListItem>
						))}
					</List>

					<H3 style={styles.medTestsListTitle}>Анализы</H3>
					<List>
						{this.medTests.map((name, index) => (
							<ListItem itemDivider key={`${name}_${index}`}>
								<Text>{name}</Text>
							</ListItem>
						))}
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
	return {

	};
}

export default connect<StoreProps, DispatchProps, OwnProps, any>(mapStateToProps, mapDispatchToProps)(Diagnosis);
