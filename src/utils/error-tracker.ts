import { ZodError } from 'zod'

export const errorTracker = (error: Error | string | ZodError, query?: string) => {
	// eslint-disable-next-line no-console
	console.log('---------------- START ERROR ------------------')

	if (query) {
		// eslint-disable-next-line no-console
		console.log(query)
	}

	//eslint-disable-next-line no-console
	console.log(JSON.stringify(error, null, 2))

	//eslint-disable-next-line no-console
	console.log('---------------- END ERROR')
}
