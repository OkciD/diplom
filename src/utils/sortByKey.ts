export default function sortByKey<T = any>(array: T[], key: keyof T): T[] {
	return array.sort((objectA: T, objectB: T) => {
		const valueA = objectA[key];
		const valueB = objectB[key];
		return (
			(valueA < valueB) ? -1 :
			(valueA > valueB) ? 1 :
			0
		);
	});
}
