import { executeSql } from '../../db';

export function getLastValue(): Promise<number> {
	return executeSql<{ value: number }>('SELECT val as value from counts ORDER BY id DESC LIMIT 1;')
		.then<number>(([valObj]) => valObj ? valObj.value : 0);
}

export async function insertCount(operation: 'inc' | 'dec', value: number): Promise<number> {
	return executeSql<void>(`INSERT INTO counts (op, val) values ("${operation}", ${value});`)
		.then<number>(getLastValue);
}

export function reset(): Promise<void> {
	return executeSql<void>('DELETE FROM counts')
		.then<void>();
}
