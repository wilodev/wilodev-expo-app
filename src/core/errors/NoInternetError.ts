export class NoInternetError extends Error {
	constructor(message = 'No internet connection') {
		super(message);
		this.name = 'NoInternetError';
	}
}
