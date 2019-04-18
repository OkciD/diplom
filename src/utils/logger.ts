export interface Logger {
	log: (message: string) => void;
	logError: (error: string) => void;
}

export default function configureLogger(namespace: string): Logger {
	return {
		log: (message: string) => console.log(`LOG[${namespace}] ${message}`),
		logError: (error: string) => console.error(`LOG[${namespace}] ${error}`)
	};
}
