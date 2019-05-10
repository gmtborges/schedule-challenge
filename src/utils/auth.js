export function loggedIn() {
	return localStorage.getItem('loggedIn') || false;
}

export function getUsers() {
	return localStorage.getItem('users')
		? JSON.parse(localStorage.getItem('users'))
		: [];
}
