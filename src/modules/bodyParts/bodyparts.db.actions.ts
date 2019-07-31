import { executeSql } from '../db';

/**
 * Возвращает id "общей" части тела для переданного id "конкретной" части тела
 * @param {number} concreteBodyPartId
 * @return {Promise<number>}
 */
export function getCommonBodyPartId(concreteBodyPartId: number): Promise<number | null> {
	return executeSql<{ commonBodyPartId: number | null }>(`
SELECT
	DISTINCT bodypart.id_bodypart as commonBodyPartId
FROM bodypart
WHERE bodypart.id = ${concreteBodyPartId}
`)
	.then<number | null>(([{ commonBodyPartId }]) => commonBodyPartId);
}

export function getBodyPartName(bodyPartId: number): Promise<string> {
	return executeSql<{ name: string }>(`
SELECT name FROM bodypart WHERE id = ${bodyPartId}
`)
	.then<string>(([{ name }]) => name);
}
