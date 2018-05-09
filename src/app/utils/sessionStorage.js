const getAuthorizationToken = () => sessionStorage.getItem('authorizationToken');
const setAuthorizationToken = token => sessionStorage.setItem('authorizationToken', token);

export { getAuthorizationToken, setAuthorizationToken };
