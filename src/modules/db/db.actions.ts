import SQLite from 'react-native-sqlite-storage';
import { DB_NAME } from './';

let db: SQLite.SQLiteDatabase;

export async function openDb(): Promise<void> {
	SQLite.DEBUG(__DEV__); // __DEV__ === true для дев-сборок
	SQLite.enablePromise(true);

	// @ts-ignore
	db = await SQLite.openDatabase({
		name: DB_NAME,
		createFromLocation: 1,
		readOnly: true
	});
}

export async function closeDb(): Promise<void> {
	await db.close();
}
