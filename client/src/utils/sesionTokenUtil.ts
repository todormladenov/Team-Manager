export const getAccessToken = () => {
    return sessionStorage.getItem('accessToken');
}

export const setAccessToken = (value: string) => {
    return sessionStorage.setItem('accessToken', value);
}

export const clearAccessToken = () => {
    return sessionStorage.removeItem('accessToken');
}