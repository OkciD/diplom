export default function getRandomHash(length: number = 7): string {
	return Math.random().toString(36).substr(2, length);
}
