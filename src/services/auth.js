export const getToken = () => localStorage.getItem('token');

export const isAuthenticated = () => !!localStorage.getItem('token');

export const logout = () => localStorage.removeItem('token');
