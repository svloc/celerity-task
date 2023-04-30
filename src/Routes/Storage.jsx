const toJSON = (json) => {
	try {
		return JSON.parse(json);
	} catch (error) {
		return null;
	}
};
const toSTRING = (json) => {
	try {
		return JSON.stringify(json);
	} catch (error) {
		return null;
	}
};
export const clearSession = () => {
	localStorage.removeItem('isLoggedIn');
	sessionStorage.clear();
};
export const setisLoggedIn=(val)=> localStorage.setItem('isLoggedIn',toSTRING(val));
export const getisLoggedIn = () => toJSON(localStorage.getItem('isLoggedIn'));


