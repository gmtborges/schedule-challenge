export default function loggedIn() {
	return localStorage.getItem('loggedIn') || false;
}
